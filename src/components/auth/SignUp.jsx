import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "../index";
import "./Modal.css";
import google from "../../images/google.png";
import { FiEye, FiEyeOff, FiX } from "react-icons/fi";
import { connect } from "react-redux";
import { signUp } from "../../store/action/auth";
import { createPortal } from "react-dom";

const SignUp = ({ signUp, setModal, setmType, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
  });
  const [toggle, setToggle] = useState(false);
  const { email, password, fullName } = formData;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSignUp = (e) => {
    e.preventDefault();
    signUp(email, password);
  };

  if (isAuthenticated) setModal(false);

  return createPortal(
    <div className="modal">
      <div className="modal__content modal__signUp">
        <h1>Sign Up</h1>
        <span className="close-btn" onClick={() => setModal(false)}>
          {" "}
          <FiX />
        </span>
        <form onSubmit={(e) => onSignUp(e)}>
          <div className="s_input-container">
            <input
              className="fname-input"
              type="text"
              id="fullname"
              placeholder=""
              name="fullName"
              value={fullName}
              onChange={(e) => handleChange(e)}
              required
            />
            <label className="fname-label" htmlFor="fullname">
              Full Name
            </label>
          </div>
          <div className="s_input-container">
            <input
              className="signemail-input"
              type="email"
              id="signemail"
              placeholder=""
              name="email"
              value={email}
              onChange={(e) => handleChange(e)}
              required
            />
            <label className="signemail-label" htmlFor="signemail">
              Email
            </label>
          </div>
          <div className="s_input-container">
            <input
              className="signpass-input"
              type={toggle ? "text" : "password"}
              id="signpassword"
              placeholder=""
              name="password"
              value={password}
              onChange={(e) => handleChange(e)}
              required
            />
            <label className="signpass-label" htmlFor="signpassword">
              Password
            </label>
            <span
              className="fieye"
              onClick={() => {
                setToggle((preState) => !preState);
              }}
            >
              {toggle ? <FiEye /> : <FiEyeOff />}
            </span>
          </div>

          <div className="ctabtn">
            <Button type="submit" text="SignUp" color="blue" />
          </div>

          <div className="gcontainer">
            <div className="gbox">
              <img src={google} alt="Google" />
              <span>SignUp with Google</span>
            </div>
          </div>
        </form>

        <div className="s_policy">
          By signing up, you are agreeing to our
          <a href="/"> Terms of Services</a> and
          <a href="/"> Privacy Policy</a>
        </div>

        <div className="loginlink">
          Already Eryka User?{" "}
          <span
            onClick={() => {
              setmType("login");
            }}
          >
            {" "}
            Log In{" "}
          </span>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

SignUp.propTypes = {
  signUp: PropTypes.func.isRequired,
  setmType: PropTypes.func.isRequired,
  setModal: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signUp })(SignUp);
