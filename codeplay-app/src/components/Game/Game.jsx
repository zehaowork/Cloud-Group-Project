import React from "react";
import { useDispatch } from "react-redux";
import { changeView } from "../../actions";
import AceEditor from "react-ace";
import "brace/mode/javascript";
import "brace/theme/monokai";

function Game() {
  const dispatch = useDispatch();

  function onChange(newValue) {
    console.log("change", newValue);
  }

  return (
    <div>
      {" "}
      <button
        onClick={() => {
          dispatch(changeView("USER_INFO_PAGE"));
        }}
      >
        UserINFO
      </button>
      <button
        onClick={() => {
          dispatch(changeView("LOGIN_PAGE"));
        }}
      >
        LOG OFF
      </button>
      <AceEditor
        mode="javascript"
        theme="monokai"
        fontSize={16}
        onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
      />
    </div>
  );
}
export default Game;
