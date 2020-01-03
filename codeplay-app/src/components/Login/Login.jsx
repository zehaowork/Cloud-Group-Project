import React, { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { changeView, login } from "../../actions";
import axios from "axios";
import { SemipolarLoading } from "react-loadingg";
import { useHistory } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory()

  const [pass, setPass] = useState("");
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  /**
   * TODO: Add actual URL for login
   */
  const loginRequest = () => {
    setLoading(true);
    // setTimeout(() => {
      setLoading(false);
      history.push('/game')
      // dispatch(changeView("GAME_PAGE"));
      // alert("Your name is " + user + ", Your password is " + pass + ".");

      localStorage.setItem("loginStatus", "ON");
      localStorage.setItem("user", "xhao98");
    // }, 2000);

    // axios
    //   .get("OUR_SEVER")
    //   .then(res => {
    //     alert(res);
    //   })
    //   .catch("");
  };
  return (
    <div className="loginpage">
      {loading === true && (
        <SemipolarLoading size="large" speed={3} color="#FFFFFF" />
      )}
      {loading === false && (
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
      )}
    </div>
  );
}
export default Login;
