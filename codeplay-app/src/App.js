import React from "react";

import "./App.css";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import LoginSignupSwitcher from "./components/Switcher/LoginSignupSwitcher";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import ProfileResetSwitcher from "./components/Switcher/ProfileResetSwitcher";

function App() {
  return (
    <div className="App">
      <ProfileResetSwitcher />
    </div>
  );
}

export default App;
