import React from "react";
import { useDispatch } from "react-redux";
import { switchUserInfo } from "../../actions";

function Game() {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(switchUserInfo());
      }}
    >
      UserINFO
    </button>
  );
}
export default Game;
