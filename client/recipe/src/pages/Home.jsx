import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-green-600 text-white h-screen p-6">
        <h2 className="text-2xl font-semibold mb-8">RecipeHub Dashboard</h2>
        <nav>
          <ul>
            <li className="mb-4">
              <Link
                to="/home/dashboard"
                className="block text-lg py-2 px-4 rounded hover:bg-green-500"
              >
                Home
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/home/create-recipe"
                className="block text-lg py-2 px-4 rounded hover:bg-green-500"
              >
                Create Recipe
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/home/saved-recipe"
                className="block text-lg py-2 px-4 rounded hover:bg-green-500"
              >
                Saved Recipes
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Welcome to Your Dashboard!
        </h1>

        {/* Create Recipe Section */}
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
