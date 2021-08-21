import React from "react";
import "../styles/Hero.css";
import manifest from "../Assets/manifest.jpg";
import mbsb from "../Assets/mbs-b.jpg";
import gratitude from "../Assets/gratitude.jpg";

function Hero() {
  return (
    <>
      <div className="quote">
        <h1 className="quote-main-text">
          Selfcare is a journey, but it has never been about the destination.
        </h1>
        <div className="quote-posts">
          <div className="quote-post">
            <div className="quote-post-img" id="quote-post-img-1">
              <img
                class="blog-post-img"
                src={manifest}
                alt="most effective manifestation methods"
              />
            </div>
            <div>
              <div className="quote-post-title">
                Most Effective Manifestation Methods
              </div>
              <div className="quote-post-tags">
                Spiritual. Career. Finances.
              </div>
            </div>
          </div>
          <div className="quote-post">
            <div className="quote-post-img" id="quote-post-img-2">
              <img
                class="blog-post-img"
                src={gratitude}
                alt="The importance of showing gratitude"
              />
            </div>
            <div>
              <div className="quote-post-title">
                The Importance of Showing Gratitude
              </div>
              <div className="quote-post-tags">Spiritual. Mental Health.</div>
            </div>
          </div>
          <div className="quote-post">
            <div className="quote-post-img" id="quote-post-img-3">
              <img
                class="blog-post-img"
                src={mbsb}
                alt="Mind, Body, Soul. Pt. 2 - Body"
              />
            </div>
            <div>
              <div className="quote-post-title">
                Mind, Body, Soul. Pt. 2 - Body
              </div>
              <div className="quote-post-tags">Fitness. Health.</div>
            </div>
          </div>
        </div>
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
