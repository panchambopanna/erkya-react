import React from "react";
import Button from "../button/Button";
import "./Modal.css";
import google from "../../images/google.png";

const Modal = ({ mType, setModal, setmType }) => {
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

  if (mType === "login") {
    return (
      <div className="modal">
        <div className="modal__content modal__login">
          <h2>LogIn</h2>
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
            <div className="input-container">
              <input
                className="pass-input"
                type="password"
                id="logpassword"
                placeholder=""
              />
              <label className="pass-label" htmlFor="logpassword">
                Password
              </label>
              <i class="fa fa-eye-slash ShowHidePw"></i>
            </div>

            <div className="forgotpass" onClick={handleFpass}>
              Forgot password?
            </div>

            <Button text="LogIn" color="blue" />

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
          <form>
            <div className="sinput-container">
              <input
                className="fname-input"
                type="text"
                id="fullname"
                placeholder=""
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
              />
              <label className="signpass-label" htmlFor="signpassword">
                Password
              </label>
              <i class="fa fa-eye-slash ShowHidePw"></i>
            </div>

            <Button text="SignUp" color="blue" />

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
          <h2>LogIn</h2>
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

            <div className="sendMail">
              Enter your email address and a link will be sent to set new
              password
            </div>

            <Button text="Verify" color="blue" />
            {/* Add logic to send links or some reset logic */}

            <div className="glogincontainer">
              <div className="glogin">
                <img src={google} alt="Google" />
                <span>LogIn with Google</span>
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
  }
};

export default Modal;
