import React, { useState } from "react";
import PropTypes from "prop-types";
// import { Button } from "../index";
import "./Modal.css";
import google from "../../images/google.png";
import { FiEye, FiEyeOff, FiX } from "react-icons/fi";
import { connect } from "react-redux";
import { logIn } from "../../store/action/auth";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Login = ({ logIn, setmType, setModal, isAuthenticated, loading }) => {
  const [toggle, setToggle] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const { values, handleSubmit, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: async (values, { setFieldError }) => {
        logIn(values.email, values.password)
          .then(handleClose)
          .catch((e) => {
            if (e.message.includes("user-not-found")) {
              setFieldError(
                "email",
                "This email id does not exist, please sign up."
              );
            } else if (
              e.message.includes("invalid") ||
              e.message.includes("wrong-password")
            ) {
              setFieldError(
                "password",
                "Password is incorrect! Try again or reset password"
              );
            }
          });
      },
      validationSchema,
    });

  const handleClose = () => {
    setModal(false);
  };

  if (isAuthenticated) handleClose();

  return (
    <Modal show={true} onHide={handleClose}>
      <Modal.Body>
        <h1>Log in</h1>
        <span className="close-btn" onClick={handleClose}>
          <FiX />
        </span>
        <form onSubmit={handleSubmit} noValidate>
          <div className="input-container">
            <input
              className={`email-input ${errors.email ? "invalid" : ""}`}
              type="email"
              id="logemail"
              name="email"
              placeholder=""
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            <label className="email-label" htmlFor="logemail">
              Email
            </label>
            {errors.email && touched.email ? (
              <div className="invalid">{errors.email}</div>
            ) : null}
          </div>
          <div className="input-container">
            <input
              className={`pass-input ${errors.password ? "invalid" : ""}`}
              type={toggle ? "text" : "password"}
              id="logpassword"
              placeholder=""
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  handleSubmit();
                }
              }}
              required
            />
            <label className="pass-label" htmlFor="logpassword">
              Password
            </label>
            {errors.password && touched.password ? (
              <div className="invalid">{errors.password}</div>
            ) : null}
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
            <Button type="submit" variant="info">
              {loading ? "Loading..." : "Log in"}
            </Button>
          </div>

          <div className="gcontainer">
            <div className="gbox">
              <img src={google} alt="Google" />
              <span>Log in with Google</span>
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
      </Modal.Body>
    </Modal>
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
  loading: state.auth.loading,
});

export default connect(mapStateToProps, { logIn })(Login);
