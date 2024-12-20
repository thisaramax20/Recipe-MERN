import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="font-sans bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="bg-green-500 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Find Delicious Recipes at Your Fingertips
          </h2>
          <p className="text-lg mb-8">
            Explore a wide range of recipes, from quick meals to gourmet dishes!
          </p>
          <Link
            to="/auth"
            className="bg-white text-green-600 py-2 px-6 rounded-full text-xl font-semibold hover:bg-green-200 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <div className="bg-green-50 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-4">
                Personalized Recipes
              </h4>
              <p>
                Get recipe suggestions based on your preferences and dietary
                needs.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-4">
                Save Your Favorites
              </h4>
              <p>Save your favorite recipes and come back to them anytime.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-4">Share with Friends</h4>
              <p>
                Share your favorite recipes with friends and family
                effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-200">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">About RecipeHub</h3>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            RecipeHub is the perfect place for home cooks and food enthusiasts
            alike. With a simple and intuitive interface, you can quickly
            discover recipes based on your cravings, dietary preferences, and
            more!
          </p>
          <Link
            to="/auth"
            className="bg-green-600 text-white py-2 px-6 rounded-full text-xl font-semibold hover:bg-green-500 transition duration-300"
          >
            Join Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
