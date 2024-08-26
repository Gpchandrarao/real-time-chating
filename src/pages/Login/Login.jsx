import React, { useState } from "react";
import assets from "../../assets/assets";
import "./Login.css";
import { singup, login, resetPass } from "../../config/firebase";

const Login = () => {
  const [currState, setCurrState] = useState("Sign Up");

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (currState === "Sign Up") {
      singup(userName, email, password);
    } else {
      login(email, password);
    }
  };

  const onClickLogin = () => {
    setCurrState("Login");
  };
  const onClickSingUp = () => {
    setCurrState("Sign Up");
  };

  return (
    <div className="login">
      <img src={assets.logo_big} alt="" className="logo" />
      <form className="login-form" onSubmit={onSubmit}>
        <h2>{currState}</h2>
        {currState === "Sign Up" ? (
          <input
            type="text"
            className="form-input"
            placeholder="Username"
            required
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
        ) : null}

        <input
          type="email"
          className="form-input"
          placeholder="Email address"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          className="form-input"
          placeholder="password"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">
          {currState === "Sign Up" ? "Create account" : "Login now"}
        </button>
        <div className="login-term">
          <input type="checkbox" name="" id="" />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>
        <div className="login-forgot">
          {currState === "Sign Up" ? (
            <p className="login-tooggle">
              Already have an account
              <span onClick={onClickLogin}>Login here</span>
            </p>
          ) : (
            <p className="login-tooggle">
              Create an account
              <span onClick={onClickSingUp}>click here</span>
            </p>
          )}{" "}
          {currState === "Login" ? (
            <p className="login-tooggle">
              Forgot Password ?
              <span onClick={() => resetPass(email)}>reset here</span>
            </p>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default Login;
