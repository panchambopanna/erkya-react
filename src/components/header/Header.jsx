import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/space.png";
import { FiSearch, FiLogOut } from "react-icons/fi";
import { Button } from "../index";
import "./Header.css";
import { logOut } from "../../store/action/auth";
import { connect } from "react-redux";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import Reset from "../auth/Reset";
import { useNavigate } from "react-router-dom";

const Header = ({ logOut, isAuthenticated }) => {
  const [modal, setModal] = useState(false);
  const [mType, setmType] = useState("");

  console.log(modal)

  const navigate = useNavigate();

  const handleClick = (mType) => {
    setModal(true);
    setmType(mType);
  };

  const unAuthorisedLinks = (
    <div className="header__buttons">
      <Button text="Log in" fn={() => handleClick("login")} />
      <Button text="Create account" color="blue" fn={() => handleClick("signup")} />
    </div>
  );

  const authorisedLinks = (
    <div className="header__buttons">
      {/* <Button text="Log Out" fn={() => logOut()} /> */}
      <div className="user">
        <Link to="/karthikarya"> {/** Change name to usename when user db is setup */}
          <img className="card_avatar" src="https://i.pravatar.cc/100" alt="" />
        </Link>
      </div>
      <div className="user_logout" onClick={()=>
        logOut().then(()=>navigate('/'))
        }>
        <FiLogOut />
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

      {modal && mType === "login" && (
        <Login setModal={setModal} setmType={setmType} />
      )}
      {modal && mType === "signup" && (
        <SignUp setModal={setModal} setmType={setmType} />
      )}
      {modal && mType === "fpass" && (
        <Reset setModal={setModal} setmType={setmType} />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logOut })(Header);
