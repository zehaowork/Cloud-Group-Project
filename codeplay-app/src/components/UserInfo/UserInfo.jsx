import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { changeView, changeAvatar } from "../../actions/index";
import axios from "axios";

function UserInfo() {
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState(useSelector(state => state.avatar));

  /**
   *  Simple HTML structures  - Apply CSS after.
   */

  //TODO: ADD URL AND ACTION TO RESPOSNE
  const saveRequest = () => {
    // axios
    //   .get()
    //   .then()
    //   .catch();

    dispatch(changeAvatar("GOBLIN"));
  };

  return (
    <div>
      <button
        onClick={() => {
          dispatch(changeView("RESET_PAGE"));
        }}
      >
        Reset Pass
      </button>
      <div className="btn-group">
        <button
          onClick={() => {
            setAvatar("GOBLIN");
          }}
          className="avatarBtn"
        >
          Goblin
        </button>
        <button
          onClick={() => {
            setAvatar("KNIGHT");
          }}
          className="avatarBtn"
        >
          Knight
        </button>
        <button
          onClick={() => {
            setAvatar("WARRIOR");
          }}
          className="avatarBtn"
        >
          Warrior
        </button>
        <button
          onClick={() => {
            setAvatar("DRAGON");
          }}
          className="avatarBtn"
        >
          Dragon
        </button>

        <button>{/** for test purpose */ avatar}</button>
      </div>
      <button>Save</button>
      <button
        onClick={() => {
          dispatch(changeView("GAME_PAGE"));
        }}
      >
        Back
      </button>
    </div>
  );
}

export default UserInfo;
