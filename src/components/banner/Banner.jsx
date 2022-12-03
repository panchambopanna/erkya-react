import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = (props) => {
  const { dImage, desc, next, invert } = props;

  return (
    <div className={invert ? "banner invert" : "banner"}>
      <img src={dImage} alt="" />
      <div className="desc">
        {desc}
        <Link to={`/${next}`}>Show more </Link>
      </div>
    </div>
  );
};

export default Banner;
