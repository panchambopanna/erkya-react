import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "../index";
import "./Modal.css";
import google from "../../images/google.png";
import { FiEye, FiEyeOff, FiX } from "react-icons/fi";
import { connect } from "react-redux";
import { logIn } from "../../store/action/auth";

const Login = ({ logIn, setmType, setModal, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [toggle, setToggle] = useState(false);
  const { email, password } = formData;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onLogin = (e) => {
    e.preventDefault();
    logIn(email, password);
  };

  if (isAuthenticated) setModal(false);

  return (
    <div className="modal">
      <div className="modal__content modal__login">
        <h1>LogIn</h1>
        <span className="close-btn" onClick={() => setModal(false)}>
          {" "}
          <FiX />
        </span>
        <form onSubmit={(e) => onLogin(e)}>
          <div className="input-container">
            <input
              className="email-input"
              type="email"
              id="logemail"
              name="email"
              placeholder=""
              value={email}
              onChange={(e) => handleChange(e)}
              required
            />
            <label className="email-label" htmlFor="logemail">
              Email
            </label>
          </div>
          <div className="input-container">
            <input
              className="pass-input"
              type={toggle ? "text" : "password"}
              id="logpassword"
              placeholder=""
              name="password"
              value={password}
              onChange={(e) => handleChange(e)}
              required
            />
            <label className="pass-label" htmlFor="logpassword">
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

          <div className="forgotpass" onClick={() => setmType("fpass")}>
            Forgot password?
          </div>

          <div className="ctabtn">
            <Button type="submit" text="LogIn" color="blue" />
          </div>

          <div className="gcontainer">
            <div className="gbox">
              <img src={google} alt="Google" />
              <span>LogIn with Google</span>
            </div>
          </div>
        </form>
        <div className="signuplink">
          Not a Eryka User?{" "}
          <span
            onClick={() => {
              setmType("signup");
            }}
          >
            {" "}
            Sign Up{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  logIn: PropTypes.func.isRequired,
  setModal: PropTypes.func.isRequired,
  setmType: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logIn })(Login);
