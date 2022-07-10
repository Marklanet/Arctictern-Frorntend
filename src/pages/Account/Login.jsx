import React, { useState } from "react";
import "./account.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginmessage, setLoginmessage] = useState("");

  const tryLogin = async (e) => {
    e.preventDefault();
    if (email.length !== 0 && password.length !== 0) {
      setLoginmessage("login will happen");
    } else {
      setLoginmessage("! fill in all fields");
    }
  };

  return (
    <section className="container account">
      <form className="accountform boxshadow1">
        <h1>Login Form</h1>
        <input
          type="email"
          placeholder="ENTER EMAIL"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="ENTER PASSWORD"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <span>{loginmessage}</span>

        <button onClick={tryLogin}>LOGIN</button>
      </form>
    </section>
  );
};

export default Login;
