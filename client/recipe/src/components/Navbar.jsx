import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cookies, setCookies] = useCookies(["access-token"]);
  const navigate = useNavigate();

  const handleLogout = () => {
    setCookies("access-token", "");
    window.localStorage.removeItem("userID");
    navigate("/auth");
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or App Name */}
        <div className="text-white text-2xl font-bold">
          <Link to="/">RecipeApp</Link>
        </div>

        {/* Navbar Links (desktop) */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-white hover:text-yellow-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/create-recipe"
            className="text-white hover:text-yellow-300 transition duration-300"
          >
            Create Recipe
          </Link>
          <Link
            to="/saved-recipe"
            className="text-white hover:text-yellow-300 transition duration-300"
          >
            Saved Recipe
          </Link>
          {!cookies["access_token"] ? (
            <Link
              to="/auth"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              Login/Register
            </Link>
          ) : (
            <button onClick={handleLogout}>Logout</button>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-yellow-300 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (conditional rendering based on isMenuOpen state) */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-700 p-4 space-y-4">
          <Link
            to="/"
            className="block text-white hover:text-yellow-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/create-recipe"
            className="block text-white hover:text-yellow-300 transition duration-300"
          >
            Create Recipe
          </Link>
          <Link
            to="/saved-recipe"
            className="block text-white hover:text-yellow-300 transition duration-300"
          >
            Saved Recipe
          </Link>
          {!cookies["access_token"] ? (
            <Link
              to="/auth"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              Login/Register
            </Link>
          ) : (
            <button onClick={handleLogout}>Logout</button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
