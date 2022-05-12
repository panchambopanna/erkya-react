import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const menu = [
    { name: "Fashion Designers", path: "/fashion" },
    { name: "Models", path: "/models" },
    { name: "Makeup/Hair", path: "/makeup" },
    { name: "Photographers/Retouchers", path: "/photo" },
    { name: "Videographers/Editors", path: "/video" },
    { name: "Studios", path: "/studio" },
    { name: "Rent/Sales", path: "/rent" },
    { name: "Props/Jewellary", path: "/jewels" },
  ];
  return (
    <div className="navBar">
      <div className="navBar__items">
        {menu.map((e, index) => (
          <Link to={e.path} className="navBar__item" key={index}>
            {e.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
