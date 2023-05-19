import React, { useState, useEffect, useRef } from "react";
import { MdArrowDropDown, MdLocationOn } from "react-icons/md";

import "./Jewels.css";

const Jewels = () => {
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <main>
      <section className="filterandsort-bar">
        <div className="filter-controls">
          <div className="location-filter">
            <button className="locationdropdown-trigger filters">
              <span className="locationicon">
                <MdLocationOn />
              </span>
              <span className="filter-name">Location</span>
              <span className="dropdownicon">
                <MdArrowDropDown />
              </span>
            </button>
          </div>
          <div className="antique-filter">
            <button className="antique filters">
              <span className="filter-name">Antique Jewelry</span>
            </button>
          </div>
          <div className="temple-filter">
            <button className="temple filters">
              <span className="filter-name">Temple Jewelry</span>
            </button>
          </div>
          <div className="bead-filter">
            <button className="bead filters">
              <span className="filter-name">Bead Jewelry</span>
            </button>
          </div>
          <div className="bridaljewels-filter">
            <button className="bridaljewels filters">
              <span className="filter-name">Bridal Jewellery</span>
            </button>
          </div>
          <div className="fashionjewels-filter">
            <button className="fashionjewels filters">
              <span className="filter-name">Fashion Jewelry</span>
            </button>
          </div>
          <div className="handmade-filter">
            <button className="handmade filters">
              <span className="filter-name">Handmade Jewelry</span>
            </button>
          </div>
          <div className="props-filter">
            <button className="props filters">
              <span className="filter-name">Props</span>
            </button>
          </div>
        </div>
        <div className="sortmenu" ref={menuRef}>
          <button
            className="dropdown-trigger"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <span className="filtervalue">Recommended</span>
            <span className="dropdownicon">
              <MdArrowDropDown />
            </span>
            <label className="dropdown-trigger-label"> Sort</label>
          </button>
          <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
            <ul className="sortmenu-items">
              <li className="sortmenu-item">Recommended</li>
              <li className="sortmenu-item">Most Recent</li>
              <li className="sortmenu-item">Favourites</li>
              <li className="sortmenu-item">Most Viewed</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Jewels;
