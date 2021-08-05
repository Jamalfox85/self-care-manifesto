import React from "react";
import "../styles/Email.css";

function Email() {
  return (
    <div className="email-wrapper">
      <div className="overlay email-overlay"></div>
      <div className="email-flower1"></div>
      <div className="email-flower2"></div>
      <div className="email-content">
        <p>Want to receive updates and reminders?</p>
        <h1>Join the team and stay connected!</h1>
        <div className="email-input-wrapper">
          <input className="email-input"></input>
          <button className="email-input-button">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Email;
