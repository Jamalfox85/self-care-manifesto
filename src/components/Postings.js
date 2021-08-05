import React from "react";
import "../styles/Postings.css";
import Post from "./Post";
import flowerbranchp from "../Assets/Branch-Flower-Purple.png";

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
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default Postings;
