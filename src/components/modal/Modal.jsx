import React from "react";
import Button from "../button/Button";
import "./Modal.css";
import google from "../../images/google.png";
import { useState } from "react";

const Modal = ({ mType, setModal, setmType }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
  });
  const { email, password, fullName } = formData;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [passError, setPassError] = useState();

  const handleSignUp = () => {
    setmType("signUp");
  };
  const handleLogin = () => {
    setmType("login");
  };
  const handleFpass = () => {
    setmType("fpass");
    console.log(mType);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  if (mType === "login") {
    return (
      <div className="modal">
        <div className="modal__content modal__login">
          <h2>LogIn</h2>
          <span className="close-btn" onClick={() => setModal(false)}>
            {" "}
            &times;
          </span>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="input-container">
              <input
                className="email-input"
                type="email"
                id="logemail"
                name="email"
                placeholder=""
                value={email}
                onChange={(e) => handleChange(e)}
              />
              <label className="email-label" htmlFor="logemail">
                Email
              </label>
            </div>
            <div className="input-container">
              <input
                className="pass-input"
                type="password"
                id="logpassword"
                name="password"
                value={password}
                onChange={(e) => handleChange(e)}
              />
              <label className="pass-label" htmlFor="logpassword">
                Password
              </label>
              <i class="fa fa-eye-slash ShowHidePw"></i>
            </div>

            <div className="forgotpass" onClick={handleFpass}>
              Forgot password?
            </div>

            <Button type="submit" text="LogIn" color="blue" />

            <div className="glogincontainer">
              <div className="glogin">
                <img src={google} alt="Google" />
                <span>LogIn with Google</span>
              </div>
            </div>
          </form>
          <div className="signuplink">
            Not a Eryka User?{" "}
            <span
              onClick={() => {
                handleSignUp();
              }}
            >
              {" "}
              Sign Up{" "}
            </span>
          </div>
        </div>
      </div>
    );
  } else if (mType === "signUp") {
    return (
      <div className="modal">
        <div className="modal__content modal__signUp">
          <h2>Sign Up</h2>
          <span className="close-btn" onClick={() => setModal(false)}>
            {" "}
            &times;
          </span>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="sinput-container">
              <input
                className="fname-input"
                type="text"
                id="fullname"
                placeholder=""
                name="fullName"
                value={fullName}
                onChange={(e) => handleChange(e)}
              />
              <label className="fname-label" htmlFor="fullname">
                Full Name
              </label>
            </div>
            <div className="sinput-container">
              <input
                className="signemail-input"
                type="email"
                id="signemail"
                placeholder=""
                name="email"
                value={email}
                onChange={(e) => handleChange(e)}
              />
              <label className="signemail-label" htmlFor="signemail">
                Email
              </label>
            </div>
            <div className="sinput-container">
              <input
                className="signpass-input"
                type="password"
                id="signpassword"
                placeholder=""
                name="password"
                value={password}
                onChange={(e) => handleChange(e)}
              />
              <label className="signpass-label" htmlFor="signpassword">
                Password
              </label>
              <i class="fa fa-eye-slash ShowHidePw"></i>
            </div>

            <div className="sinput-container">
              <input
                className="signpassc-input"
                type="password"
                id="signpasswordcheck"
                onBlur={(e) => {
                  e.target.value !== password
                    ? setPassError(true)
                    : setPassError(false);
                }}
              />
              <label className="signpassc-label" htmlFor="signpasswordcheck">
                Confirm Password
              </label>
              {passError && (
                <span style={{ color: "red", fontSize: "small" }}>
                  Password doesn't match
                </span>
              )}
              <i class="fa fa-eye-slash ShowHidePw"></i>
            </div>

            <Button type="submit" text="SignUp" color="blue" />

            <div className="gsigncontainer">
              <div className="gsignup">
                <img src={google} alt="Google" />
                <span>SignUp with Google</span>
              </div>
            </div>
          </form>
          <div className="loginlink">
            Already Eryka User?{" "}
            <span
              onClick={() => {
                handleLogin();
              }}
            >
              {" "}
              Log In{" "}
            </span>
          </div>
        </div>
      </div>
    );
  } else if (mType === "fpass") {
    return (
      <div className="modal">
        <div className="modal__content modal__fpass">
          <h2>Password Recovery</h2>
          <span className="close-btn" onClick={() => setModal(false)}>
            {" "}
            &times;
          </span>
          <form>
            <div className="input-container">
              <input
                className="email-input"
                type="email"
                id="logemail"
                placeholder=""
              />
              <label className="email-label" htmlFor="logemail">
                Email
              </label>
            </div>

            <Button text="Reset Password" color="blue" />
            {/* Add logic to send links or some reset logic */}
          </form>
          <div className="loginlink">
            Already Eryka User?{" "}
            <span
              onClick={() => {
                handleLogin();
              }}
            >
              {" "}
              Log In{" "}
            </span>
          </div>
        </div>
      </div>
    );
  }
};

export default Modal;
