import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="font-sans bg-gray-100">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to RecipeApp
        </h1>
        <p className="text-lg mb-6">
          Discover, share, and save your favorite recipes.
        </p>
        <Link
          to="/create-recipe"
          className="bg-yellow-500 hover:bg-yellow-400 text-white py-3 px-6 rounded-lg text-xl transition duration-300"
        >
          Create Your Recipe
        </Link>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-8">
        {/* Feature Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-6">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Browse Recipes</h3>
              <p className="text-gray-700">
                Explore a variety of recipes across different cuisines and
                categories.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Create Recipes</h3>
              <p className="text-gray-700">
                Share your favorite recipes with the community by uploading them
                easily.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">
                Save Your Favorites
              </h3>
              <p className="text-gray-700">
                Save recipes that you love to try later in your personal
                collection.
              </p>
            </div>
          </div>
        </section>

        {/* Recipe Showcase Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-6">Popular Recipes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Recipe"
                className="w-full h-40 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-2">
                Spaghetti Bolognese
              </h3>
              <p className="text-gray-700 mb-4">
                A classic Italian pasta dish with a rich and savory sauce.
              </p>
              <Link
                to="/saved-recipe"
                className="text-yellow-500 hover:text-yellow-400"
              >
                Save Recipe
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Recipe"
                className="w-full h-40 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-2">
                Chicken Tikka Masala
              </h3>
              <p className="text-gray-700 mb-4">
                A flavorful and spicy chicken curry with aromatic Indian spices.
              </p>
              <Link
                to="/saved-recipe"
                className="text-yellow-500 hover:text-yellow-400"
              >
                Save Recipe
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Recipe"
                className="w-full h-40 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-2">
                Vegetarian Stir-Fry
              </h3>
              <p className="text-gray-700 mb-4">
                A healthy and colorful stir-fry loaded with fresh vegetables.
              </p>
              <Link
                to="/saved-recipe"
                className="text-yellow-500 hover:text-yellow-400"
              >
                Save Recipe
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
