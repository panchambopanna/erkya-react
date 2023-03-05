import { replace } from "formik";
import React, { useEffect } from "react";
import { MdOutlineDone } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const ResetConfirm = () => {
  const navigate = useNavigate();

  const timeout = () =>
    setTimeout(() => navigate("/", { replace: true }), 5000);

  useEffect(() => {
    timeout();
  }, []);

  return (
    <div style={{ alignContent: "center" }}>
      <div
        style={{
          border: "5px solid var(--success)",
          borderRadius: "50%",
          width: "80px",
          margin: "10px auto",
        }}
      >
        <MdOutlineDone size="4em" style={{ color: "var(--success)" }} />
      </div>
      <h1>Reset link has been sent to your email</h1>
      <Link to="/" replace onClick={() => clearTimeout(timeout)}>
        <h4 style={{ color: "var(--gray300)", fontWeight: "100" }}>
          Automiatically redirecting to home... click here to go back to home
        </h4>
      </Link>
    </div>
  );
};

export default ResetConfirm;
