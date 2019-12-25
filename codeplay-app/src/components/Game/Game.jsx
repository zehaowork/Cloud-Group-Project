import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeView } from "../../actions";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/theme-monokai";
import "./Game.css";

function Game() {
  const dispatch = useDispatch();

  const [code, setCode] = useState("");

  function onChange(newValue) {
    setCode(newValue);
  }

  const logoff = () => {
    localStorage.setItem("user", "");
    localStorage.setItem("loginStatus", "OFF");
    dispatch(changeView("LOGIN_PAGE"));
  };

  return (
    <div className="gamepage">
      <div className="chapters">
        <div className="chapterholder">
          <p>First program</p>
        </div>
        <div className="chapterholder">
          <p>Type annotation</p>
        </div>
        <div className="chapterholder">
          <p>Variables</p>
        </div>
        <div className="chapterholder">
          <p>Numbers</p>
        </div>
        <div className="chapterholder">
          <p>Strings</p>
        </div>
        <div className="chapterholder">
          <p>Boolean</p>
        </div>
        <div className="chapterholder">
          <p>Array</p>
        </div>
        <div className="chapterholder">
          <p>Tuple</p>
        </div>
        <div className="chapterholder">
          <p>Enum</p>
        </div>
        <div className="chapterholder">
          <p>Union</p>
        </div>
        <div className="chapterholder current">
          <p>Any</p>
        </div>
        <div className="chapterholder">
          <p>Void</p>
        </div>
        <div className="chapterholder">
          <p>Never</p>
        </div>
        <div className="chapterholder">
          <p>Type inference</p>
        </div>
      </div>
      <div className="logo">
        <h3>Code & Play</h3>
      </div>
      <div className="userinfotag">
        <button
          onClick={() => {
            dispatch(changeView("USER_INFO_PAGE"));
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
        <div className="codebuttons">
          <button className="codebutton">Run</button>
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
