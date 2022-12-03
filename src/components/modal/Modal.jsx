import React, { useState } from "react";
import Button from "../Button/Button";
import "./Modal.css";
import google from "../../images/google.png";
import { FiEye, FiEyeOff, FiX } from "react-icons/fi";

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

  const [state, setstate] = useState(false);

  const togglebtn = () => {
    setstate((preState) => !preState);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  if (mType === "login") {
    return (
      <div className="modal">
        <div className="modal__content modal__login">
          <h1>LogIn</h1>
          <span className="close-btn" onClick={() => setModal(false)}>
            {" "}
            <FiX />
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
                required
              />
              <label className="email-label" htmlFor="logemail">
                Email
              </label>
            </div>
            <div className="input-container">
              <input
                className="pass-input"
                type={state ? "text" : "password"}
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
              <span className="fieye" onClick={togglebtn}>
                {state ? <FiEye /> : <FiEyeOff />}
              </span>
            </div>

            <div className="forgotpass" onClick={handleFpass}>
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
          <h1>Sign Up</h1>
          <span className="close-btn" onClick={() => setModal(false)}>
            {" "}
            <FiX />
          </span>
          <form onSubmit={(e) => onSubmit(e)}>
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
                type={state ? "text" : "password"}
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
              <span className="fieye" onClick={togglebtn}>
                {state ? <FiEye /> : <FiEyeOff />}
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
          <h1>Password Recovery</h1>
          <span className="close-btn" onClick={() => setModal(false)}>
            {" "}
            <FiX />
          </span>
          <form>
            <div className="input-container">
              <input
                className="email-input"
                type="email"
                id="logemail"
                placeholder=""
                required
              />
              <label className="email-label" htmlFor="logemail">
                Email
              </label>
            </div>
            <div className="ctabtn">
              <Button type="submit" text="Reset Password" color="blue" />
              {/* Add logic to send links or some reset logic */}
            </div>
          </form>
          <div className="loginlink">
            Back to{" "}
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
