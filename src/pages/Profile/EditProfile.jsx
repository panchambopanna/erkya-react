import React from "react";
import { ListGroup } from "react-bootstrap";

const EditProfile = () => {
  return (
    <div className="d-flex w-75 mx-auto gap-3 mt-4">
      <div className="nav-tabs">
        <ListGroup>
          <ListGroup.Item active>Basic information </ListGroup.Item>
          <ListGroup.Item>About Me</ListGroup.Item>
          <ListGroup.Item>Links</ListGroup.Item>
          <ListGroup.Item>Password</ListGroup.Item>
        </ListGroup>
      </div>
      <div className="edit-container">Right section</div>
    </div>
  );
};

export default EditProfile;
