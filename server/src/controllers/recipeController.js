import { RecipeModel } from "../models/Recipe.js";
import { UserModel } from "../models/User.js";

export const getRecipe = async (req, res, next) => {
  try {
    const response = await RecipeModel.find({});
    if (response) {
      res.status(200).json({ response });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createRecipe = async (req, res, next) => {
  const recipe = new RecipeModel(req.body);
  try {
    const response = await recipe.save();
    if (response) {
      res.status(201).json({ response });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateRecipe = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.body.userID);
    const recipe = await RecipeModel.findById(req.body.recipeID);

    //update user model with recipe
    user.savedRecipes.push(recipe);

    //saving the new user model
    await user.save();
    res.status(200).json({ message: "Recipe updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//getting ids of recipes
export const getRecipeIds = async (req, res, next) => {
  try {
    const response = await UserModel.findById(req.body.userID);
    if (response) {
      res.status(200).json({ savedRecipes: response?.savedRecipes });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//getting the recipes
export const getRecipeInfo = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.body.userID);
    const savedRecipes = await RecipeModel.find({
      _id: { $in: user.savedRecipes },
    });

    if (savedRecipes) {
      res.status(200).json({ savedRecipes: savedRecipes });
    } else {
      res.status(404).json({ message: "No saved recipes found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
