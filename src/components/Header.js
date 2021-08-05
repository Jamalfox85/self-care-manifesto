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
      <div className="header">
        <img src={logo} alt="Self Care Manifesto Logo" />
      </div>
      <div className="navbar">
        <Router>
          <ul className="nav-links">
            <li className="link">
              <Link to={""} style={linkStyle}>
                Home
              </Link>
            </li>
            <li className="link">
              <Link to={""} style={linkStyle}>
                About
              </Link>
            </li>
            <li className="link">
              <Link to={""} style={linkStyle}>
                Blog
              </Link>
            </li>
            <li className="link">
              <Link to={""} style={linkStyle}>
                Resources
              </Link>
            </li>
          </ul>
        </Router>
      </div>
    </div>
  );
}

export default Header;
