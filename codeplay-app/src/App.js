import React, { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import UserInfo from "./components/UserInfo/UserInfo";
import Game from "./components/Game/Game";
import { loadLoginStatus, loadUser, changeView } from "./actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const loginStatus = localStorage.getItem("loginStatus");
    const user = loginStatus ? localStorage.getItem("user") : "";

    dispatch(loadUser(user));
    if (loginStatus === "ON") {
      dispatch(changeView("GAME_PAGE"));
    }
  }, []);

  const viewController = useSelector(state => state.viewController);

  return (
    <div className="App">
      {viewController === "LOGIN_PAGE" && <Login />}
      {viewController === "SIGNUP_PAGE" && <SignUp />}
      {viewController === "RESET_PAGE" && <ResetPassword />}
      {viewController === "USER_INFO_PAGE" && <UserInfo />}
      {viewController === "GAME_PAGE" && <Game />}
      <audio id="background" autoPlay loop src="background.wav"></audio>
    </div>
  );
}

export default App;
