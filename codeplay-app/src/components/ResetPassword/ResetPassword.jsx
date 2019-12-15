import React, { useState } from "react";
import "./ResetPassword.css";

function ResetPassword() {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const resetRequest = () => {
    alert("Your name is " + newPass + ", Your password is " + oldPass + ".");
    // axios
    //   .get("OUR_SEVER")
    //   .then(res => {
    //     alert(res);
    //   })
    //   .catch("");
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
        <button type="button" className="savepassword">
          Save new password
        </button>
      </div>
    </div>
  );
}

export default ResetPassword;
