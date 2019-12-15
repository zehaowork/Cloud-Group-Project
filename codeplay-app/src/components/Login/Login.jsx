import React, { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { changeView, login } from "../../actions";
import axios from "axios";

function Login() {
  const dispatch = useDispatch();
  const [pass, setPass] = useState("");
  const [user, setUser] = useState("");

  /**
   * TODO: Add actual URL for login
   */
  const loginRequest = () => {
    alert("Your name is " + user + ", Your password is " + pass + ".");
    // axios
    //   .get("OUR_SEVER")
    //   .then(res => {
    //     alert(res);
    //   })
    //   .catch("");
  };
  return (
    <div className="loginpage">
      <div className="innerlogin">
        <h1>CODE & PLAY</h1>
        <input
          onChange={e => {
            setUser(e.target.value);
          }}
          value={user}
          type="text"
          className="logininput"
          placeholder="Username"
        ></input>
        <input
          onChange={e => {
            setPass(e.target.value);
          }}
          value={pass}
          type="password"
          className="logininput"
          placeholder="Password"
        ></input>
        <div className="loginbuttons">
          <button
            onClick={() => {
              loginRequest();
              dispatch(changeView("GAME_PAGE"));
            }}
            type="button"
            className="loginbutton"
          >
            Log In
          </button>
          <button
            className="signup"
            onClick={() => {
              dispatch(changeView("SIGNUP_PAGE"));
            }}
          >
            Sign up?
          </button>
        </div>
      </div>
    </div>
  );
}
export default Login;
