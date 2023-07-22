import React from 'react'
import { Container,
    ListGroup,
    Form,
    Col,
    Row,
    InputGroup, } from 'react-bootstrap'

const EditProfile = () => {
  return (
    <div className="d-flex justify-content-center w-75 mx-auto gap-3 mt-4">
      <div className="nav-tabs">
        <ListGroup>
          <ListGroup.Item active>Basic information </ListGroup.Item>
          <ListGroup.Item>About Me</ListGroup.Item>
          <ListGroup.Item>Links</ListGroup.Item>
          <ListGroup.Item>Password</ListGroup.Item>
        </ListGroup>
      </div>
      <div className="edit-container">
      <Container className="border p-4">
          <Form>
            <Row>
              <Col>
                <Form.Label>First name</Form.Label>
                <Form.Control placeholder="First name" />
              </Col>
              <Col>
                <Form.Label>Second name</Form.Label>
                <Form.Control placeholder="Last name" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Email</Form.Label>
                <Form.Control placeholder="abc@example.com" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label htmlFor="telephone">Phone Number</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>
                  <Form.Control
                    placeholder="9999999999"
                    id="telephone"
                    aria-label="telephone"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label htmlFor="profession">Profession</Form.Label>
                <div>
                    List of available profession options
                    </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label htmlFor="genre">Genre</Form.Label>
                <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default EditProfile;
