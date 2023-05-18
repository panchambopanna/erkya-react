import React, { useState, useEffect, useRef } from "react";
import { MdArrowDropDown, MdLocationOn } from "react-icons/md";

import "./Fashion.css";

const Fashion = () => {
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
          <div className="couture-filter">
            <button className="couture filters">
              <span className="filter-name">Haute couture</span>
            </button>
          </div>
          <div className="couture-filter">
            <button className="couture filters">
              <span className="filter-name">Luxury Fashion</span>
            </button>
          </div>
          <div className="massmarket-filter">
            <button className="massmarket filters">
              <span className="filter-name">Mass market</span>
            </button>
          </div>
          <div className="sports-filter">
            <button className="sports filters">
              <span className="filter-name">Sportwear</span>
            </button>
          </div>
          <div className="evening-filter">
            <button className="evening filters">
              <span className="filter-name">Evening wear</span>
            </button>
          </div>
          <div className="children-filter">
            <button className="children filters">
              <span className="filter-name">Childrens wear</span>
            </button>
          </div>

          <div className="footwear-filter">
            <button className="footwear filters">
              <span className="filter-name">Footwear</span>
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

export default Fashion;
