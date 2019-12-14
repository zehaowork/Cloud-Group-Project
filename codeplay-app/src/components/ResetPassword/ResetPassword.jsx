import React, { Component } from "react";
import "./ResetPassword.css";

function ResetPassword() {
  return (
    <div className="resetpassword">
      <div className="innerreset">
        <h5>Reset password</h5>
        <input
          className="passwordinput"
          type="password"
          placeholder="Enter original password"
        ></input>
        <input
          className="passwordinput"
          type="password"
          placeholder="Enter new password"
        ></input>
        <input
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
