import React, { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import UserInfo from "./components/UserInfo/UserInfo";
import { Route } from "react-router-dom";
import Game from "./components/Game/Game";
import Home from "./components/Home/Home";
import { loadUser } from "./actions";
import { useHistory } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const loginStatus = localStorage.getItem("loginStatus");
    const user = loginStatus ? localStorage.getItem("user") : "";

    dispatch(loadUser(user));
    if (loginStatus === "ON") {
      history.push("/game");
    }
  }, []);

  //ADD OTHER ROUTES HERE
  return (
    <React.Fragment>
        <Route
            path="/home"
            render={routerProps => <Home routerProps={routerProps} />}
        ></Route>
        <Route
            path="/login"
            render={routerProps => <Login routerProps={routerProps} />}
        ></Route>
        <Route
            path="/singup"
            render={routerProps => <SignUp routerProps={routerProps} />}
        ></Route>
        <Route
            path="/game"
            render={routerProps => <Game routerProps={routerProps} />}
        ></Route>
        <Route
            path="/user"
            render={routerProps => <UserInfo routerProps={routerProps} />}
        ></Route>
        <Route
            path="/reset"
            render={routerProps => <ResetPassword routerProps={routerProps} />}
        ></Route>
    </React.Fragment>
  );
}

export default App;
