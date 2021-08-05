import React from "react";
import "../styles/Hero.css";

function Hero() {
  return (
    <>
      <div className="quote">
        <h1>
          Selfcare is a journey, but it has never been about the destination.
        </h1>
      </div>
      <div className="main">
        <div className="main-left">
          <p className="sup-text">Thanks for stopping by!</p>
          <h1 className="main-text">
            <span className="headline">The Self Care Manifesto:</span>
            <br />
            your guide to finding unconditional love, peace, and acceptance
            within yourself.
          </h1>
          <button className="CTA">Discover Your Power</button>
        </div>
        <div className="main-right"></div>
      </div>
      <div className="quote" id="quote2">
        <h1>
          If your COMPASSION does not include yourself, it is INCOMPLETE. ~Jack
          Kornfield
        </h1>
      </div>
    </>
  );
}

export default Hero;
