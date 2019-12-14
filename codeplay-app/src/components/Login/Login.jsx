import React, { Component } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { switchSignUp } from "../../actions";

function Login() {
  const dispatch = useDispatch();
  return (
    <div className="loginpage">
      <div className="innerlogin">
        <h1>CODE & PLAY</h1>
        <input
          type="text"
          className="logininput"
          placeholder="Username"
        ></input>
        <input
          type="password"
          className="logininput"
          placeholder="Password"
        ></input>
        <div className="loginbuttons">
          <button type="button" className="loginbutton">
            Log In
          </button>
          <button
            className="signup"
            onClick={() => {
              dispatch(switchSignUp());
            }}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
export default Login;
