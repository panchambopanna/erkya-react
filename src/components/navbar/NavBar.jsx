import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const menu = [
    { name: "Fashion Designers", path: "/fashion" },
    { name: "Models", path: "/models" },
    { name: "Makeup/Hair", path: "/makeup" },
    { name: "Photographers/Retouchers", path: "/photo" },
    { name: "Videographers/Editors", path: "/video" },
    { name: "Studios", path: "/studio" },
    { name: "Props/Jewellary", path: "/jewels" },
    { name: "Rent/Sales", path: "/rent" },
  ];
  return (
    <nav>
      <div className="navBar__links">
        {menu.map(({ name, path }, index) => {
          return (
            <div key={index}>
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {" "}
                {name}{" "}
              </NavLink>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;
