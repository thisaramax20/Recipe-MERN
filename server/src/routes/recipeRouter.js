import express from "express";
import {
  createRecipe,
  getRecipe,
  getRecipeIds,
  getRecipeInfo,
  updateRecipe,
} from "../controllers/recipeController.js";

const router = express.Router();

router.get("/", getRecipe);
router.post("/", createRecipe);
router.put("/", updateRecipe);
router.get("/savedRecipes/ids", getRecipeIds);
router.get("/savedRecipes", getRecipeInfo);

export { router as recipeRouter };
