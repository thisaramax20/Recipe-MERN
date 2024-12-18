import { useState } from "react";
import Form from "./Form";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // make API call to register user with username and password
    console.log("User registered successfully", username, password);
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
    />
  );
};

export default Register;
