import React, { useState, useEffect, useRef } from "react";
import { MdArrowDropDown, MdLocationOn } from "react-icons/md";

import "./Video.css";

const Video = () => {
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
          <div className="cinematic-filter">
            <button className="cinematic filters">
              <span className="filter-name">Cinematic</span>
            </button>
          </div>
          <div className="documentary-filter">
            <button className="documentary filters">
              <span className="filter-name">Documentary</span>
            </button>
          </div>
          <div className="storytelling-filter">
            <button className="storytelling filters">
              <span className="filter-name">Storytelling</span>
            </button>
          </div>
          <div className="traditional-filter">
            <button className="traditional filters">
              <span className="filter-name">Traditional</span>
            </button>
          </div>
          <div className="vintage-filter">
            <button className="vintage filters">
              <span className="filter-name">Vintage</span>
            </button>
          </div>
          <div className="editors-filter">
            <button className="editors filters">
              <span className="filter-name">Editors</span>
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

export default Video;
