import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import CreateRecipe from "./pages/CreateRecipe";
import SavedRecipe from "./pages/SavedRecipe";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />}>
            <Route path="create-recipe" element={<CreateRecipe />} />
            <Route path="saved-recipe" element={<SavedRecipe />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/auth" element={<Auth />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
