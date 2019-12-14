import React, { Component } from "react";
import "../Login/Login.css";
import { useDispatch } from "react-redux";
import { switchLogin } from "../../actions/";

function SignUp() {
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
        <input
          type="password"
          className="logininput"
          placeholder="Retype password"
        ></input>
        <div className="loginbuttons">
          <button type="button" className="loginbutton">
            Sign Up
          </button>
          <button
            onClick={() => {
              dispatch(switchLogin());
            }}
            className="signup back"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
