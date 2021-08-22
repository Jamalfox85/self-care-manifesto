import React from "react";
import "../styles/Postings.css";
import flowerbranchp from "../Assets/Branch-Flower-Purple.png";
import manifest from "../Assets/manifest.jpg";
import mbss from "../Assets/mbs-s.jpg";
import mbsb from "../Assets/mbs-b.jpg";
import gratitude from "../Assets/gratitude.jpg";

function Postings() {
  return (
    <div className="posting-wrapper">
      <div className="background">
        <div className="flower1"></div>
        <div className="flower2">
          <img src={flowerbranchp} alt="purple flower"></img>
        </div>
      </div>
      <h1 className="section-header">Check out our most popular posts!</h1>
      <div className="posts">
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
          <div className="quote-post">
            <div className="quote-post-img" id="quote-post-img-3">
              <img
                class="blog-post-img"
                src={mbss}
                alt="Mind, Body, Soul. Pt. 3 - Soul"
              />
            </div>
            <div>
              <div className="quote-post-title">
                Mind, Body, Soul. Pt. 3 - Soul
              </div>
              <div className="quote-post-tags">Fitness. Health.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Postings;
