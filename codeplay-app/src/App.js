import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import UserInfo from "./components/UserInfo/UserInfo";
import Game from "./components/Game/Game";

function App() {
  const viewController = useSelector(state => state.viewController);
  return (
    <div className="App">
      {viewController === "LOGIN_PAGE" && <Login />}
      {viewController === "SIGNUP_PAGE" && <SignUp />}
      {viewController === "RESET_PAGE" && <ResetPassword />}
      {viewController === "USER_INFO_PAGE" && <UserInfo />}
      {viewController === "GAME_PAGE" && <Game />}
    </div>
  );
}

export default App;
