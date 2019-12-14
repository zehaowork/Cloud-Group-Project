import React, { Component } from "react";

import { useDispatch } from "react-redux";
import { switchReset } from "../../actions/index";

function UserInfo() {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(switchReset());
      }}
    >
      Reset Pass
    </button>
  );
}

export default UserInfo;
