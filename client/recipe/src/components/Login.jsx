import { useState } from "react";
import Form from "./Form";
import { useCookies } from "react-cookie";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // make API call to register user with username and password
    try {
      const response = await axios.post("/users/login", { username, password });

      setCookies("access_token", response.data.token);
      window.localStorage.setItem("userID", response.data.id);
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
    // clear form fields
    setUsername("");
    setPassword("");
  };
  return (
    <Form
      handleSubmit={handleSubmit}
      password={password}
      setPassword={setPassword}
      setUsername={setUsername}
      username={username}
      label={"Login"}
    />
  );
};

export default Login;
