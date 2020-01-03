import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeView } from "../../actions";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/theme-monokai";
import "./Game.css";
import axios from "axios";
import DragDrop from "./DragDrop";

import { useHistory } from "react-router-dom";


function Game() {
  const dispatch = useDispatch();
  const history = useHistory()

  const [code, setCode] = useState("");
  const [unit, setUnit] = useState(2);
  const [story, setStory] = useState(" ");
  const [solution, setSolution] = useState("");

  function onChange(newValue) {
    setCode(newValue);
  }

  useEffect(() => {
    axios
      .get("/load/game")
      .then(res => {
        setStory(res.data.story);
        setSolution(res.data.solution);
        setUnit(res.data.unit);
      })
      .catch(res => {
        alert("loading failure");
      },[]);
  });

  const logoff = () => {
    localStorage.setItem("user", "");
    localStorage.setItem("loginStatus", "OFF");
    history.push('/login')
    // dispatch(changeView("LOGIN_PAGE"));
  };

  return (
    <div className="gamepage">
      <div className="chapters">
        <div className={unit === 0 ? "chapterholder current" : "chapterholder"}>
          <p>First program</p>
        </div>
        <div className={unit === 1 ? "chapterholder current" : "chapterholder"}>
          <p>Type annotation</p>
        </div>
        <div className={unit === 2 ? "chapterholder current" : "chapterholder"}>
          <p>Variables</p>
        </div>
        <div className={unit === 3 ? "chapterholder current" : "chapterholder"}>
          <p>Numbers</p>
        </div>
        <div className={unit === 4 ? "chapterholder current" : "chapterholder"}>
          <p>Strings</p>
        </div>
        <div className={unit === 5 ? "chapterholder current" : "chapterholder"}>
          <p>Boolean</p>
        </div>
        <div className={unit === 6 ? "chapterholder current" : "chapterholder"}>
          <p>Array</p>
        </div>
        <div className={unit === 7 ? "chapterholder current" : "chapterholder"}>
          <p>Tuple</p>
        </div>
        <div className={unit === 8 ? "chapterholder current" : "chapterholder"}>
          <p>Enum</p>
        </div>
        <div className={unit === 9 ? "chapterholder current" : "chapterholder"}>
          <p>Union</p>
        </div>
        <div
          className={unit === 10 ? "chapterholder current" : "chapterholder"}
        >
          <p>Any</p>
        </div>
        <div
          className={unit === 11 ? "chapterholder current" : "chapterholder"}
        >
          <p>Void</p>
        </div>
        <div
          className={unit === 12 ? "chapterholder current" : "chapterholder"}
        >
          <p>Never</p>
        </div>
        <div
          className={unit === 13 ? "chapterholder current" : "chapterholder"}
        >
          <p>Type inference</p>
        </div>
      </div>
      <div className="logo">
        <h3>Code & Play</h3>
      </div>
      <div className="userinfotag">
        <input type="image" src="speaker.png" class="btn-sound" />

        <button
          onClick={() => {
              history.push('/user')
            // dispatch(changeView("USER_INFO_PAGE"));
          }}
          className="userinfo"
        >
          User info
        </button>
        <button
          onClick={() => {
            logoff();
          }}
          className="btn-log-off"
        >
          LOG OFF
        </button>
      </div>
      <div className="story">
        <p className="storytext" align="justify">
          One day, the evil Mephisto burned down all of the villages. Everyone
          died a fiery death but one. The name was Ze. The legend begins...
          <br></br>
          <br></br>
          24 years later, Prognosis is still under the wicked rule of Mephisto,
          or as his friends call him, the Mephman, Phisty Boi or simply, the Big
          M. Not that he had any friends, no. His friends had died in a freak
          sleepover accident. Mephisto was the only survivor, and he vowed never
          to have friends again. He's actually a really misunderstood character.
          But he did not handle this tragic loss well as he made it his life
          goal to rule Prognosis, for eternity.
          <br></br>
          <br></br>
          Crimbi, the local fool of the village of Gadad, was up to his usual
          tomfoolery. Being the only fool in the village, he was given special
          permission to smile and laugh, which was strictly banned for everyone
          else in Prognosis. Today, Crimbi decided to swim across the river
          Manto, despite its strong currents and history of drowning swimmers.
          Yes, Crimbi was a fool alright.
        </p>
      </div>
      <div className="instructionssolution">
        <p className="instructions" align="left">
          <ol>
            <li>Help swim</li>
            <li>Don't die</li>
            <li>Don't die</li>
            <li>Don't die</li>
            <li>Don't die</li>
            <li>Don't die</li>
          </ol>
        </p>
        <button className="solutiontag">Solution</button>
      </div>
      <div className="code">
        <AceEditor
          mode="typescript"
          theme="monokai"
          name="code"
          fontSize={15}
          height="280px"
          width="560px"
          onChange={onChange}
          value={code}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
        />
        {/*<DragDrop /> */}
        <div className="codebuttons">
          <button
            onClick={() => {
              setUnit((unit + 1) % 14);
            }}
            className="codebutton"
          >
            Run
          </button>
          <button
            onClick={() => {
              setCode("");
            }}
            className="codebutton"
          >
            Restart
          </button>
        </div>
      </div>
      <div className="output">
        <p>Hello world</p>
      </div>
    </div>
  );
}
export default Game;
