import Login from "../components/Login";
import Register from "../components/Register";

const Auth = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-4">
      <Register />
      <Login />
    </div>
  );
};

export default Auth;
