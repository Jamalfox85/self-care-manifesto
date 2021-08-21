import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h3>Company</h3>
          <p>
            Self Care Manifesto was created to help people achieve their most
            loving self. If you can't love yourself, how the hell are you gonna
            love anyone else?
          </p>
        </div>
        <div className="footer-section">
          <h3>Useful Links</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Resources</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>Atlanta, GA 30308, US</li>
            <li>info@selfcaremanifesto.com</li>
            <li>404-444-4444</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Copyright; Self Care Manifesto</p>
        {/* <div className="footer-socials"></div> */}
      </div>
    </div>
  );
}

export default Footer;
