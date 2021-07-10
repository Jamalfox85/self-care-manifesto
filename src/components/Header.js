import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../Assets/Logo.png";

function Header() {
  return (
    <>
      <div className="header">
        <img src={logo} alt="Self Care Manifesto Logo" />
      </div>
      <div className="navbar">
        <Router>
          <ul className="nav-links">
            <li className="link">
              <Link to={""}>Home</Link>
            </li>
            <li className="link">
              <Link to={""}>About</Link>
            </li>
            <li className="link">
              <Link to={""}>Blog</Link>
            </li>
            <li className="link">
              <Link to={""}>Resources</Link>
            </li>
          </ul>
        </Router>
      </div>
    </>
  );
}

export default Header;
