import { useState } from "react";
import axios from "../api/axios";
import { useGetUserID } from "../hooks/useGetUserId";
import { useNavigate } from "react-router-dom";

const CreateRecipe = () => {
  const userID = useGetUserID();
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: [],
    instructions: "",
    imageUrl: "",
    cookingTime: 0,
    userOwner: userID,
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const addIngredient = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  };

  const handleIngredientChange = (event, index) => {
    const { value } = event.target;
    const ingredients = recipe.ingredients;
    ingredients[index] = value;
    setRecipe({ ...recipe, ingredients });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    // make API call to create recipe with recipe object
    try {
      const response = await axios.post("/recipes", recipe);
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-center text-gray-700 mb-6">
        Create Recipe
      </h1>
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-lg font-medium text-gray-800"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            required
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="ingredients"
            className="block text-lg font-medium text-gray-800"
          >
            Ingredients
          </label>
          <button
            type="button"
            onClick={addIngredient}
            className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
          >
            Add Ingredient
          </button>
          {recipe.ingredients.map((data, index) => (
            <input
              key={index}
              name="ingredients"
              type="text"
              value={data}
              onChange={(event) => handleIngredientChange(event, index)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-2 transition duration-200"
            />
          ))}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="instructions"
            className="block text-lg font-medium text-gray-800"
          >
            Instructions
          </label>
          <textarea
            name="instructions"
            onChange={handleChange}
            rows="5"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            required
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="imageUrl"
            className="block text-lg font-medium text-gray-800"
          >
            Image URL
          </label>
          <input
            type="text"
            name="imageUrl"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="cooking-time"
            className="block text-lg font-medium text-gray-800"
          >
            Cooking Time (minutes)
          </label>
          <input
            type="number"
            name="cookingTime"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateRecipe;
