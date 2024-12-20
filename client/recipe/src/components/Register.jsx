import { useState } from "react";
import Form from "./Form";
import axios from "../api/axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // make API call to register user with username and password
    try {
      const response = await axios.post("/users/register", {
        username,
        password,
      });
      alert(response.data.message);
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
      label={"Register"}
    />
  );
};

export default Register;
