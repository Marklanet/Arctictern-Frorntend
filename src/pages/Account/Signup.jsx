import React, { useState } from "react";
import "./account.css";

const Signup = () => {
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [number, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConpassword] = useState("");
  const [registerstatus, setRegistermessage] = useState("");

  const tryCreactingaccount = async (e) => {
    e.preventDefault();
    if (
      name.length !== 0 &&
      email.length !== 0 &&
      number.length !== 0 &&
      password.length !== 0
    ) {
      if (password.localeCompare(confirmpassword) !== 0) {
        setRegistermessage("! Passwords must march");
      } else if (password.length < 6 || confirmpassword < 6) {
        setRegistermessage("! Password must be atleast 6 digits");
      } else {
        setRegistermessage("Veryfying Details");
      }
    } else {
      setRegistermessage("! Fill in all fields");
    }
  };

  return (
    <section className="container account mb">
      <form className="accountform boxshadow1">
        <h1>Create Account</h1>
        <input
          type="email"
          placeholder="EMAIL"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="USER NAME"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="phone"
          placeholder="PHONE NUMBER"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="ENTER PASSWORD"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="CONFIRM PASSWORD"
          onChange={(e) => {
            setConpassword(e.target.value);
          }}
        />

        <span>{registerstatus}</span>

        <button onClick={tryCreactingaccount}>SIGN UP</button>
      </form>
    </section>
  );
};

export default Signup;
