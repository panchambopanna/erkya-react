import React, { useState } from "react";
import "./Modal.css";
import { FiX } from "react-icons/fi";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

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
    <Modal show={true} onHide={()=>setModal(false)}>
      <Modal.Body>
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
              onClick={(e) => triggerResetEmail(e)}
              variant="info"
            >Reset Password</Button>
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
      </Modal.Body>
    </Modal>
  );
};

Reset.propTypes = {};

export default Reset;
