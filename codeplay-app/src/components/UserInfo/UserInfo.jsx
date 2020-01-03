import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { changeView, changeAvatar } from "../../actions/index";
import "./UserInfo.css";
import axios from "axios";

function UserInfo() {
  const dispatch = useDispatch();
  const username = "xhao98";
  const password = "123123";
  const date = "2013/01/01";
  const [avatar, setAvatar] = useState("witch");
  const progress = 22;
  //TODO: ADD URL AND ACTION TO RESPOSNE
  const saveRequest = () => {
    axios
      .post("/save")
      .then(res => {})
      .catch(res => {
        alert("Loading Failure");
      });

    dispatch(changeAvatar("GOBLIN"));
  };

  const changeAvatar = newAvatar => {
    setAvatar(newAvatar);
  };

  return (
    <div className="userinfopage">
      <div className="avatarholder">
        <img src={avatar + ".png"} className="avatarimage"></img>
        <button
          onClick={() => {
            changeAvatar("troll");
          }}
          className="changeavatar"
        >
          Change Avatar
        </button>
      </div>
      <div className="userinfoholder">
        <div className="usernameinfoholder">
          <h2 className="label">Username</h2>
          <h2 className="info" align="left">
            {username}
          </h2>
        </div>
        <div className="passwordinfoholder">
          <h2 className="label passwordlabel">Password</h2>
          <h2 type="password" className="info" align="left">
            ********
          </h2>
          <button
            onClick={() => {
              dispatch(changeView("RESET_PAGE"));
            }}
            className="changepassword"
          >
            Change Password
          </button>
        </div>
        <div className="usernameinfoholder">
          <h2 className="label">Joined</h2>
          <h2 className="info" align="left">
            {date}
          </h2>
        </div>
        <div className="usernameinfoholder">
          <h2 className="label">Progress</h2>
          <h2 className="info" align="left">
            {progress + "%"}
          </h2>
        </div>
        <div className="infobuttons">
          <button
            onClick={() => {
              dispatch(changeView("GAME_PAGE"));
            }}
            className="infobutton"
          >
            Back
          </button>
          <button className="infobutton">Save</button>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
