import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 text-center">
      <p className="text-sm">© 2024 RecipeApp. All rights reserved.</p>
      <div className="mt-4">
        <Link to="/" className="mx-4 text-yellow-300 hover:text-yellow-200">
          Home
        </Link>
        <Link
          to="/create-recipe"
          className="mx-4 text-yellow-300 hover:text-yellow-200"
        >
          Create Recipe
        </Link>
        <Link
          to="/saved-recipe"
          className="mx-4 text-yellow-300 hover:text-yellow-200"
        >
          Saved Recipes
        </Link>
        <Link to="/auth" className="mx-4 text-yellow-300 hover:text-yellow-200">
          Login/Register
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
