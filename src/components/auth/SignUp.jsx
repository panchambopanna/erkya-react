import React, { useState } from "react";
import PropTypes from "prop-types";
// import { Button } from "../index";
import "./Modal.css";
import google from "../../images/google.png";
import { FiEye, FiEyeOff, FiX } from "react-icons/fi";
import { connect } from "react-redux";
import { signUp } from "../../store/action/auth";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Modal, Button } from "react-bootstrap";

const SignUp = ({ signUp, setModal, setmType, isAuthenticated, loading }) => {
  const [toggle, setToggle] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    //fullName: Yup.string().required("Name is required"),
  });

  const { values, handleSubmit, handleChange, handleBlur, errors, touched } = useFormik({
    initialValues: {
      email: "",
      password: "",
      fullName: "",
    },
    onSubmit: async (values, { setFieldError }) => {
      try {
        await signUp(values.email, values.password);
      } catch (e) {
        console.error(e);
        setFieldError("email", "Email already in use, please log in.");
      }
    },
    validationSchema,
  });

  const handleClose = () => {
    setModal(false)
  }

  if (isAuthenticated) handleClose()

  return(
    <Modal show={true} onHide={handleClose}>
      <Modal.Body>
        <h1>Sign Up</h1>
        <span className="close-btn" onClick={handleClose}>
          {" "}
          <FiX />
        </span>
        <form onSubmit={handleSubmit} noValidate>
          <div className="s_input-container">
            <input
              className="fname-input"
              type="text"
              id="fullname"
              placeholder=""
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            <label className="fname-label" htmlFor="fullname">
              Full Name
            </label>
            {errors.fullName && touched.fullName ? (
              <div className="invalid">{errors.fullName}</div>
            ) : null}
          </div>
          <div className="s_input-container">
            <input
              className={`signemail-input ${errors.email ? "invalid" : ""}`}
              type="email"
              id="signemail"
              placeholder=""
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            <label className="signemail-label" htmlFor="signemail">
              Email
            </label>
            {errors.email && touched.email ? (
              <div className="invalid">{errors.email}</div>
            ) : null}
          </div>
          <div className="s_input-container">
            <input
              className="signpass-input"
              type={toggle ? "text" : "password"}
              id="signpassword"
              placeholder=""
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            <label className="signpass-label" htmlFor="signpassword">
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

          <div className="ctabtn">
            <Button variant="info">{loading? 'Creating...' : 'Create account'}</Button>
          </div>

          <div className="gcontainer">
            <div className="gbox">
              <img src={google} alt="Google" />
              <span>Sign up with Google</span>
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
      </Modal.Body>
    </Modal>
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
  loading: state.auth.loading
});

export default connect(mapStateToProps, { signUp })(SignUp);
