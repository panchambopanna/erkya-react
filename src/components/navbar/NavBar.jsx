import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const menu = [
    { name: "FashionDesigners", path: "/fashion" },
    { name: "Models", path: "/models" },
    { name: "Makeup/Hair", path: "/makeup" },
    { name: "Photographers/Retouchers", path: "/photo" },
    { name: "Videographers/Editors", path: "/video" },
    { name: "Studios", path: "/studio" },
    { name: "Rent/Sales", path: "/rent" },
    { name: "Props/Jewellary", path: "/jewels" },
  ];
  return (
    <nav>
      <div className="navBar__links">
        {menu.map(({ name, path }, index) => {
          return (
            <li>
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {" "}
                {name}{" "}
              </NavLink>
            </li>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;
