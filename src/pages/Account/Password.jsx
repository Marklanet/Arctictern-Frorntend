import React, { useState } from "react";
import "./account.css";

const Password = () => {
  const [email, setEmail] = useState("");

  const [resetmessage, setResetmessage] = useState("");

  const tryReset = async (e) => {
    e.preventDefault();
    if (email.length !== 0) {
      setResetmessage("we have emailed you a reset link");
    } else {
      setResetmessage("! enter email first");
    }
  };

  return (
    <section className="container account">
      <form className="accountform boxshadow1">
        <h1>Resset Password</h1>
        <input
          type="email"
          placeholder="ENTER EMAIL"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <span>{resetmessage}</span>

        <button onClick={tryReset}>Reset Password</button>
      </form>
    </section>
  );
};

export default Password;
