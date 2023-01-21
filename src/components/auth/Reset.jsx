import React from "react";
import PropTypes from "prop-types";
import { Button } from "../index";
import "./Modal.css";
import { FiX } from "react-icons/fi";

const Reset = ({ setModal, setmType }) => {
  console.log("rendering");
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
