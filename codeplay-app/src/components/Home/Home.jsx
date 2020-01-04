import React, { useState, useEffect } from "react";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/theme-monokai";
import "./Home.css";
import axios from "axios";

import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  const [setUnit] = useState(2);
  const [setStory] = useState(" ");
  const [setSolution] = useState("");


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

  const login = () => {
    history.push("/login");
  };

  const singup = () => {
    history.push("/singup");
  };

  return (
    <div className="home">
        <div className="centered-p">
            <h2>Welcome apprentice,</h2>
            <br/>
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
        <div className='loginbuttons'>
            <button
              onClick={() => {
                login();
              }}
              className="loginbutton"
            >
              Login
            </button>
            <button
              onClick={() => {
                singup();
              }}
              className="signup"
            >
              Singup
            </button>
        </div>
    </div>
  );
}
export default Home;
