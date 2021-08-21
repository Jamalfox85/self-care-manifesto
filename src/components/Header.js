import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../Assets/Logo.png";

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  fontSize: "16px",
  color: "black",
};

function Header() {
  return (
    <div className="header-wrapper">
      {/* <div className="header">
        <img src={logo} alt="Self Care Manifesto Logo" />
      </div> */}
      <div className="navbar">
        <img src={logo} alt="Self Care Manifesto Logo" className="nav-logo" />
        <Router>
          <ul className="nav-links">
            <li className="link">
              <Link to={""} style={linkStyle}>
                <span className="nav-link-text">Home</span>
              </Link>
            </li>
            <li className="link">
              <Link to={""} style={linkStyle}>
                <span className="nav-link-text">About</span>
              </Link>
            </li>
            <li className="link">
              <Link to={""} style={linkStyle}>
                <span className="nav-link-text">Blog</span>
              </Link>
            </li>
            <li className="link">
              <Link to={""} style={linkStyle}>
                <span className="nav-link-text">Resources</span>
              </Link>
            </li>
          </ul>
        </Router>
      </div>
    </div>
  );
}

export default Header;
