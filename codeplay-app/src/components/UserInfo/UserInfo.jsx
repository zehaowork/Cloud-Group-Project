import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { changeView, changeAvatar } from "../../actions/index";
import "./UserInfo.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

function UserInfo() {
  const dispatch = useDispatch();
  const history = useHistory()
    const [profile, setProfile] = useState({

  username : "xhao98",
  password : "123123",
  date : "2013/01/01",
  avatar: useState("witch"),
  progress : 22
})

const avatar = useState("witch");

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

        <img src={profile.avatar + ".png"} className="avatarimage"></img>
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
                history.push('/game')
              // dispatch(changeView("GAME_PAGE"));
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
