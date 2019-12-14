import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import ResetPassword from "../ResetPassword/ResetPassword";
import UserInfo from "../UserInfo/UserInfo";
function ProfileResetSwitcher() {
  const resetPassVisible = useSelector(state => state.resetVisble);
  if (resetPassVisible === true) {
    return <ResetPassword />;
  } else {
    return <UserInfo />;
  }
}

export default ProfileResetSwitcher;
