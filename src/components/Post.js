import React from "react";
import "../styles/Post.css";
import { Link } from "react-router-dom";

function Post() {
  return (
    <div className="card">
      <div className="card-image"></div>
      <div className="card-name">
        <h1>Card Name Here</h1>
      </div>
      <div className="card-description">
        <p>
          Card description, card descripiton, card description.Card description,
          card descripiton, card description.Card description, card descripiton,
          card description.
          <span className="read-more">
            <Link to={""}>Read more...</Link>
          </span>
        </p>
      </div>
      <div className="card-tag">
        <h3>Health</h3>
      </div>
    </div>
  );
}

export default Post;
