import React, { useState } from "react";
import "../Login/Login.css";
import { useDispatch } from "react-redux";
import { switchLogin } from "../../actions/";

function SignUp() {
  const dispatch = useDispatch();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const signupRequest = () => {
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
        <input
          type="password"
          onChange={e => {
            setConfirmPass(e.target.value);
          }}
          value={confirmPass}
          className="logininput"
          placeholder="Retype password"
        ></input>
        <div className="loginbuttons">
          <button
            onClick={() => {
              signupRequest();
            }}
            type="button"
            className="loginbutton"
          >
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
