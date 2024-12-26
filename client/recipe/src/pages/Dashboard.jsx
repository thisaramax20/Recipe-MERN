import { useEffect, useState } from "react";
import axios from "../api/axios";

const Dashboard = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/recipes");
        setRecipes(response.data.response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [recipes]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Recipes
      </h1>
      <ul>
        {recipes.length === 0 ? (
          <p className="text-center text-xl text-gray-500">Loading...</p>
        ) : (
          recipes.map((recipe) => (
            <li
              key={recipe._id}
              className="bg-white rounded-lg shadow-lg mb-6 p-6"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {recipe.name}
                </h2>
                <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                  Save
                </button>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-700 mb-2">
                  Ingredients:
                </h3>
                <ul className="list-disc pl-6 text-gray-700">
                  {recipe.ingredients.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-700 mb-2">
                  Instructions:
                </h3>
                <p className="text-gray-700">{recipe.instructions}</p>
              </div>

              <div className="mt-6">
                <img
                  className="w-52 h-auto rounded-lg mb-4"
                  src={recipe.imageUrl}
                  alt="recipe"
                />
                <p className="text-sm text-gray-500">
                  {recipe.cookingTime} minutes
                </p>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Dashboard;
