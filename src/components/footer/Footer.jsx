import React from "react";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-copyright">
        <small>© 2023 Eryka Space. All rights reserved.</small>
      </div>
      {/* Social media links */}
      <div className="FSocial-icons">
        <span className="FSocial-link">
          <a href="https://www.facebook.com/eryka30/" target="blank">
            {" "}
            <FiFacebook />
          </a>
        </span>
        <span className="FSocial-link">
          <a href="https://www.instagram.com/eryka_kreations/" target="blank">
            {" "}
            <FiInstagram />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
