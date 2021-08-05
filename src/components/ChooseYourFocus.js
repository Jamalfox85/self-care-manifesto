import React from "react";
import "../styles/ChooseYourFocus.css";

function ChooseYourFocus() {
  return (
    <div className="quiz-wrapper">
      <div className="overlay"></div>
      <div className="quiz-left">
        <p className="email-sup-text">Not sure where to start?</p>
        <h2 className="email-main-text">
          Take this quiz to find where you should focus your efforts first.
        </h2>
        <button className="CTA quiz-btn">Start Quiz!</button>
      </div>
      <div className="quiz-right"></div>
    </div>
  );
}

export default ChooseYourFocus;
