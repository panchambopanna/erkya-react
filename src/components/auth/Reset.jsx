import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "../index";
import "./Modal.css";
import { FiX } from "react-icons/fi";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Reset = ({ setModal, setmType }) => {
  const [email, setEmail] = useState();

  const navigate = useNavigate();

  const triggerResetEmail = async (e) => {
    try {
      await sendPasswordResetEmail(auth, email)
        .then(setModal(false))
        .then(navigate("/confirm"));
    } catch (e) {
      console.error(e);
    }
  };

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
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="email-label" htmlFor="logemail">
              Email
            </label>
          </div>
          <div className="ctabtn">
            <Button
              fn={(e) => triggerResetEmail(e)}
              text="Reset Password"
              color="blue"
            />
          </div>
        </form>
        <div className="loginlink">
          Back to{" "}
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
    </div>
  );
};

Reset.propTypes = {};

export default Reset;
