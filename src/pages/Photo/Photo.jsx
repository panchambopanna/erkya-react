import React, { useState, useEffect, useRef } from "react";
import { MdArrowDropDown, MdLocationOn } from "react-icons/md";
import {
  FiFacebook,
  FiInstagram,
  FiYoutube,
  FiTwitter,
  FiMapPin,
  FiBookmark,
} from "react-icons/fi";
import "./Photo.css";
import { Link } from "react-router-dom";

const Photo = () => {
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
          <div className="landscape-filter">
            <button className="landscape filters">
              <span className="filter-name">Landscape</span>
            </button>
          </div>
          <div className="fashion-filter">
            <button className="fashion filters">
              <span className="filter-name">Fashion</span>
            </button>
          </div>
          <div className="wedding-filter">
            <button className="wedding filters">
              <span className="filter-name">Wedding</span>
            </button>
          </div>
          <div className="portrait-filter">
            <button className="portrait filters">
              <span className="filter-name">Portraits</span>
            </button>
          </div>
          <div className="event-filter">
            <button className="event filters">
              <span className="filter-name">Events</span>
            </button>
          </div>
          <div className="travel-filter">
            <button className="travel filters">
              <span className="filter-name">Travel</span>
            </button>
          </div>
          <div className="pet-filter">
            <button className="pet filters">
              <span className="filter-name">Pet</span>
            </button>
          </div>
          <div className="beauty-filter">
            <button className="beauty filters">
              <span className="filter-name">Beauty</span>
            </button>
          </div>
          <div className="product-filter">
            <button className="product filters">
              <span className="filter-name">Product</span>
            </button>
          </div>
          <div className="food-filter">
            <button className="food filters">
              <span className="filter-name">Food</span>
            </button>
          </div>
          <div className="architecture-filter">
            <button className="architecture filters">
              <span className="filter-name">Architecture</span>
            </button>
          </div>
          <div className="sports-filter">
            <button className="sports filters">
              <span className="filter-name">Sports</span>
            </button>
          </div>
          <div className="wildlife-filter">
            <button className="wildlife filters">
              <span className="filter-name">Wildlife</span>
            </button>
          </div>
          <div className="urban-filter">
            <button className="urban filters">
              <span className="filter-name">Urban</span>
            </button>
          </div>
          <div className="glamour-filter">
            <button className="glamour filters">
              <span className="filter-name">Glamour</span>
            </button>
          </div>
          <div className="boudoir-filter">
            <button className="boudoir filters">
              <span className="filter-name">Boudoir</span>
            </button>
          </div>
          <div className="documentary-filter">
            <button className="documentary filters">
              <span className="filter-name">Documentary</span>
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
      <section className="container-grid">
        <div className="profile-card">
          <div className="card-info">
            <span className="card-save">
              {" "}
              <FiBookmark />{" "}
            </span>
            <img
              className="card-image"
              src="https://i.pravatar.cc/100"
              alt=""
            />
            <h2 className="card-name">
              <Link to="/profile">Karthik Arya</Link>
            </h2>
            <p className="card-profession">Photographer/Retoucher</p>
            <span className="location">
              <FiMapPin />
              <p className="card-city"> Bengaluru </p>
            </span>
          </div>
          <div className="social-icons">
            <span className="social-link">
              {" "}
              <a
                aria-label="facebook"
                target="__blank"
                href="https://facebook.com"
                rel="noopener noreferrer"
              >
                {" "}
                <FiFacebook />{" "}
              </a>{" "}
            </span>
            <span className="social-link">
              {" "}
              <a
                aria-label="instagram"
                href="https://instagram.com"
                rel="noopener noreferrer"
              >
                {" "}
                <FiInstagram />{" "}
              </a>{" "}
            </span>
            <span className="social-link">
              {" "}
              <a
                aria-label="youtube"
                href="https://youtube.com"
                rel="noopener noreferrer"
              >
                {" "}
                <FiYoutube />
              </a>{" "}
            </span>
            <span className="social-link">
              {" "}
              <a
                aria-label="twitter"
                href="https://twitter.com"
                rel="noopener noreferrer"
              >
                {" "}
                <FiTwitter />
              </a>{" "}
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Photo;
