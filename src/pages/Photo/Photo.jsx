import React from "react";
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

const Photo = () => {
  return (
    <main>
      <section className="FilterandSort-bar">
        <div className="Filter-controls">
          <div className="Location-filter">
            <div className="Locationdropdown">
              <span className="locationicon">
                <MdLocationOn />
              </span>
              <span className="filter-name">Location</span>
              <span className="dropdownicon">
                <MdArrowDropDown />
              </span>
            </div>
          </div>
        </div>
        <div className="Sort">
          <div className="SortMenu_filterdropdown">
            <button className="BasicDropdown">
              <span className="FilterValue">Recommended</span>
              <span className="dropdownicon">
                <MdArrowDropDown />
              </span>
              <label className="BasicDropdown-label"> Sort</label>
            </button>
            <div className="Dropdown-content Dropdown-hidden">
              <ul className="SortMenu-items">
                <li className="SortMenu-item">Recommended</li>
                <li className="SortMenu-item">Most Recent</li>
                <li className="SortMenu-item">Favourites</li>
                <li className="SortMenu-item">Most Viewed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="Container-grid">
        <div className="Profile-card">
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
            <h2 className="card-name">Karthik Arya</h2>
            <p className="card-profession">Photographer/Retoucher</p>
            <span className="location">
              <FiMapPin />
              <p className="card-city"> Bengaluru </p>
            </span>
          </div>
          <div className="Social-icons">
            <span className="social-link">
              {" "}
              <FiFacebook /> <a aria-label="facebook" href="#"></a>{" "}
            </span>
            <span className="social-link">
              {" "}
              <FiInstagram /> <a aria-label="instagram" href="#"></a>{" "}
            </span>
            <span className="social-link">
              {" "}
              <FiYoutube /> <a aria-label="youtube" href="#"></a>{" "}
            </span>
            <span className="social-link">
              {" "}
              <FiTwitter /> <a aria-label="twitter" href="#"></a>{" "}
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Photo;
