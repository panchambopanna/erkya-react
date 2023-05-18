import React, { useState, useEffect, useRef } from "react";
import { MdArrowDropDown, MdLocationOn } from "react-icons/md";

import "./Models.css";

const Models = () => {
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
          <div className="highfashion-filter">
            <button className="highfashion filters">
              <span className="filter-name">High Fashion</span>
            </button>
          </div>
          <div className="commercial-filter">
            <button className="commercial filters">
              <span className="filter-name">Commercial</span>
            </button>
          </div>
          <div className="fitness-filter">
            <button className="fitness filters">
              <span className="filter-name">Fitness</span>
            </button>
          </div>
          <div className="plussize-filter">
            <button className="plussize filters">
              <span className="filter-name">Plus Size</span>
            </button>
          </div>
          <div className="swimwear-filter">
            <button className="swimwear filters">
              <span className="filter-name">SwimWear</span>
            </button>
          </div>
          <div className="boudoir-filter">
            <button className="boudoir filters">
              <span className="filter-name">Boudoir</span>
            </button>
          </div>
          <div className="mature-filter">
            <button className="mature filters">
              <span className="filter-name">Mature</span>
            </button>
          </div>

          <div className="bodyparts-filter">
            <button className="bodyparts filters">
              <span className="filter-name">Body Parts</span>
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

export default Models;
