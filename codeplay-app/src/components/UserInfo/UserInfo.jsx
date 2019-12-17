import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { changeView, changeAvatar } from "../../actions/index";
import "./UserInfo.css";
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
    <div className = "userinfopage">
      <div className = "avatarholder">
        <img src="troll.png" className="avatarimage"></img>
        <button className="changeavatar">Change Avatar</button>
      </div>
      <div className="userinfo">
        <div className="usernameinfoholder">
          <h2 className="label">Username</h2>
          <h2 className="info" align="left">Sanjee</h2>
        </div>
        <div className = "passwordinfoholder">
          <h2 className="label passwordlabel">Password</h2>
          <h2 className="info" align="left">***************</h2>
          <button className="changepassword">Change Password</button>
        </div>
        <div className="usernameinfoholder">
          <h2 className="label">Joined</h2>
          <h2 className="info" align="left">05/01/2020</h2>
        </div>
        <div className="usernameinfoholder">
          <h2 className="label">Progress</h2>
          <h2 className="info" align="left">12%</h2>
        </div>
        <div className="infobuttons">
          <button className="infobutton">Back</button>
          <button className="infobutton">Save</button>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;

{ /* <button
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

        <button>{avatar}</button>
      </div>
      <button>Save</button>
      <button
        onClick={() => {
          dispatch(changeView("GAME_PAGE"));
        }}
      >
        Back
      </button>
      </div>  */ }
