import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { changeView, changeAvatar } from "../../actions/index";
import "./UserInfo.css";
import axios from "axios";

function UserInfo() {
  const dispatch = useDispatch();
  const [profile, setProfile] = useState({
    username: "Zehao",
    password: "123123",
    date: "23/09/2019",
    progress: "20",
    avatar: "goblin.png"
  });

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
    <div className="userinfopage">
      <div className="avatarholder">
        <img src={profile.avatar} className="avatarimage"></img>
        <div className="avatars">
          <button className="avatarpic"><img className="avicon" src="goblin1.png"></img></button>
          <button className="avatarpic"><img className="avicon"src="fairy1.png"></img></button>
          <button className="avatarpic"><img className="avicon" src="wizard1.png"></img></button>
          <button className="avatarpic"><img className="avicon" src="witch1.png"></img></button>
          <button className="avatarpic"><img className="avicon" src="ogre1.png"></img></button>
          <button className="avatarpic"><img className="avicon" src="troll1.png"></img></button>
          <button className="avatarpic"><img className="avicon" src="assassin1.png"></img></button>
          <button className="avatarpic"><img className="avicon" src="archer1.png"></img></button>
          <button className="avatarpic"><img className="avicon" src="elf1.png"></img></button>
          <button className="avatarpic"><img className="avicon" src="knight1.png"></img></button>
        </div>
      </div>
      <div className="userinfoholder">
        <div className="usernameinfoholder">
          <h2 className="label">Username</h2>
          <h2 className="info" align="left">
            {profile.username}
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
            {profile.date}
          </h2>
        </div>
        <div className="usernameinfoholder">
          <h2 className="label">Progress</h2>
          <h2 className="info" align="left">
            {profile.progress + "%"}
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
