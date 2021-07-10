import React from "react";
import "../styles/Postings.css";
import Post from "./Post";

function Postings() {
  return (
    <div className="posting-wrapper">
      <div className="background">
        <div className="flower1"></div>
        <div className="flower2"></div>
      </div>
      <h1 className="section-header">Check out our most popular posts!</h1>
      <div className="posts">
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default Postings;
