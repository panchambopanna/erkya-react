import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/space.png";
import { FiSearch, FiUser } from "react-icons/fi";
import { Button, Modal } from "../index";
import "./Header.css";
import { logOut } from "../../store/action/auth";
import { connect } from "react-redux";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import Reset from "../auth/Reset";

const Header = ({ logOut, isAuthenticated }) => {
  const [modal, setModal] = useState(false);
  const [mType, setmType] = useState("");
  const handleClick = (mType) => {
    setModal(true);
    setmType(mType);
  };

  const unAuthorisedLinks = (
    <div className="header__buttons">
      <Button text="Log In" fn={() => handleClick("login")} />
      <Button text="Sign Up" color="blue" fn={() => handleClick("signup")} />
    </div>
  );

  const authorisedLinks = (
    <div className="header__buttons">
      <Button text="Log Out" fn={() => logOut()} />
      <div className="user">
        <Link to="/profile">
          <FiUser />
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <header className="header">
        <Link to="/">
          {" "}
          <img className="header__img" src={logo} alt="Eryka Kreations" />
        </Link>
        <div className="header__searchbar">
          <FiSearch className="fis" />
          <input type="search" placeholder="Search for Creators" />
        </div>
        <div className="header__buttons">
          {isAuthenticated ? authorisedLinks : unAuthorisedLinks}
        </div>
      </header>

      {modal && mType == "login" && (
        <Login setModal={setModal} setmType={setmType} />
      )}
      {modal && mType == "signup" && (
        <SignUp setModal={setModal} setmType={setmType} />
      )}
      {modal && mType == "fpass" && (
        <Reset setModal={setModal} setmType={setmType} />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logOut })(Header);
