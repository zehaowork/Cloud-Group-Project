import React, { useState, useEffect } from "react";

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

  const playSound = () => {
    var sound = document.getElementById("audio");
    sound.play();
  };

  return (
    <div className="userinfopage">
      <audio autoPlay id="audio" src={avatar + ".wav"}></audio>
      <div className="avatarholder">
        <img src={avatar + ".png"} className="avatarimage"></img>
        <div className="avatars">
          <button
            onClick={() => {
              playSound();
              setAvatar("goblin");
            }}
            className="avatarpic"
          >
            <img className="avicon" src="goblin1.png"></img>
          </button>
          <audio src=""></audio>
          <button
            onClick={() => {
              setAvatar("fairy");
            }}
            className="avatarpic"
          >
            <img className="avicon" src="fairy1.png"></img>
          </button>
          <button
            onClick={() => {
              setAvatar("wizard");
            }}
            className="avatarpic"
          >
            <img className="avicon" src="wizard1.png"></img>
          </button>
          <button
            onClick={() => {
              setAvatar("witch");
            }}
            className="avatarpic"
          >
            <img className="avicon" src="witch1.png"></img>
          </button>
          <button
            onClick={() => {
              setAvatar("ogre");
            }}
            className="avatarpic"
          >
            <img className="avicon" src="ogre1.png"></img>
          </button>
          <button
            onClick={() => {
              setAvatar("troll");
            }}
            className="avatarpic"
          >
            <img className="avicon" src="troll1.png"></img>
          </button>
          <button
            onClick={() => {
              setAvatar("assassin");
            }}
            className="avatarpic"
          >
            <img className="avicon" src="assassin1.png"></img>
          </button>
          <button
            onClick={() => {
              setAvatar("archer");
            }}
            className="avatarpic"
          >
            <img className="avicon" src="archer1.png"></img>
          </button>
          <button
            onClick={() => {
              setAvatar("elf");
            }}
            className="avatarpic"
          >
            <img className="avicon" src="elf1.png"></img>
          </button>
          <button
            onClick={() => {
              setAvatar("knight");
            }}
            className="avatarpic"
          >
            <img className="avicon" src="knight1.png"></img>
          </button>
        </div>
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
