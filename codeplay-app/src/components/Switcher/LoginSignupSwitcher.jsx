import React, { Component } from "react";
import Login from "../Login/Login";
import { useSelector, useDispatch } from "react-redux";
import SignUp from "../SignUp/SignUp";
function LoginSignupSwitcher() {
  const signupVisible = useSelector(state => state.signupVisible);
  if (signupVisible === true) {
    return <SignUp />;
  } else {
    return <Login />;
  }
}

export default LoginSignupSwitcher;
