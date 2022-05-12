import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/eryka space.png";
import Button from "../button/Button";
import Modal from "../modal/Modal";
import "./Header.css";

const Header = () => {
  const [modal, setModal] = useState(false);
  const [mType, setmType] = useState("");
  const handleClick = (mType) => {
    setModal(true);
    setmType(mType);
  };

  return (
    <>
      <div className="header">
        <Link to="/">
          {" "}
          <img className="header__img" src={logo} alt="Eryka Kreations" />
        </Link>
        <div className="header__searchbar">
          <i class="fas fa-search"></i>
          <input type="search" placeholder="Search for Creators" />
        </div>
        <div className="header__buttons">
          <Button text="Log In" fn={() => handleClick("login")} />
          <Button
            text="Sign Up"
            color="blue"
            fn={() => handleClick("signUp")}
          />
        </div>
      </div>

      {modal && <Modal mType={mType} setModal={setModal} setmType={setmType} />}
    </>
  );
};

export default Header;
