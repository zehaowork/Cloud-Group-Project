import React, { useState } from "react";
import "./ResetPassword.css";
import { changeView } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
function ResetPassword() {
  const [oldPass, setOldPass] = useState("");
  const userPass = useSelector(state => state.userPass);
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const dispatch = useDispatch();

  const resetRequest = () => {
    alert("Your name is " + newPass + ", Your password is " + oldPass + ".");
    if (isInputValid() === true) {
      // axios
      //   .get("OUR_SEVER")
      //   .then(res => {
      //     alert(res);
      //   })
      //   .catch("");
    }
  };

  /**
   * Validation on the new password
   */
  const isInputValid = () => {
    if (oldPass !== userPass) {
      alert("Your Old Password is Incorrect");
      return false;
    } else if (newPass === oldPass) {
      alert("Your new password is same as your old password!");
      return false;
    } else if (newPass !== confirmPass) {
      alert("New Passwords do not match.");
      return false;
    }
    return true;
  };

  return (
    <div className="resetpassword">
      <div className="innerreset">
        <h5>Reset password</h5>
        <input
          onChange={e => {
            setOldPass(e.target.value);
          }}
          value={oldPass}
          className="passwordinput"
          type="password"
          placeholder="Enter original password"
        ></input>
        <input
          onChange={e => {
            setNewPass(e.target.value);
          }}
          value={newPass}
          className="passwordinput"
          type="password"
          placeholder="Enter new password"
        ></input>
        <input
          onChange={e => {
            setConfirmPass(e.target.value);
          }}
          value={confirmPass}
          className="passwordinput"
          type="password"
          placeholder="Confirm new password"
        ></input>
        <div>
          <button
            onClick={() => {
              resetRequest();
            }}
            type="button"
            className="savepassword"
          >
            Save new password
          </button>
          <button
            className="savepassword"
            onClick={() => {
              dispatch(changeView("USER_INFO_PAGE"));
            }}
          >
            BACK
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
