import React, { useState, useEffect, useRef } from "react";
import { MdArrowDropDown, MdLocationOn } from "react-icons/md";

import "./Makeup.css";

const Makeup = () => {
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
          <div className="matte-filter">
            <button className="matte filters">
              <span className="filter-name">Matte Makeup</span>
            </button>
          </div>
          <div className="hd-filter">
            <button className="hd filters">
              <span className="filter-name">HD Makeup</span>
            </button>
          </div>
          <div className="glow-filter">
            <button className="glow filters">
              <span className="filter-name">Glow Makeup</span>
            </button>
          </div>
          <div className="airbrush-filter">
            <button className="airbrush filters">
              <span className="filter-name">Airbrush Makeup</span>
            </button>
          </div>
          <div className="monochromatic-filter">
            <button className="monochromatic filters">
              <span className="filter-name">Monochromatic Makeup</span>
            </button>
          </div>
          <div className="bridal-filter">
            <button className="bridal filters">
              <span className="filter-name">Bridal Makeup</span>
            </button>
          </div>
          <div className="hollywood-filter">
            <button className="hollywood filters">
              <span className="filter-name">Old Hollywood</span>
            </button>
          </div>
          <div className="hair-filter">
            <button className="hair filters">
              <span className="filter-name">Hair Stylist</span>
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

export default Makeup;
