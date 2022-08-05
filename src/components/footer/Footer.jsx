import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <small>&#169; All rights reserved 2022</small>
      {/* Social media links */}
      <br />
      <a href="https://www.facebook.com/eryka30/">
        <i class="fa-brands fa-facebook"></i>
      </a>
      <a href="https://www.instagram.com/eryka_kreations/">
        <i class="fa-brands fa-instagram"></i>
      </a>
    </div>
  );
};

export default Footer;
