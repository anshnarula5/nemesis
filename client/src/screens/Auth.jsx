import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const Auth = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
  });
  const [toggle, setToggle] = useState(false);
  const { email, name, password } = formData;
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <Container>
      <Row className="justify-content-md-center h-100 ">
        <Col xs={10} md={4} className=" m-auto">
          <Card className="p-4">
            <h1 className="m-3 text-center">Sign {!toggle ? "In" : "Up"}</h1>
            <Form>
              {toggle && (
                <>
                  <Form.Group controlId="email" className="my-2">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="enter name"
                      name="name"
                    />
                  </Form.Group>
                </>
              )}
              <Form.Group controlId="email" className="my-2">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="enter email"
                  value={email}
                  name="email"
                />
              </Form.Group>
              <Form.Group controlId="email" className="my-2">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="enter password"
                  value={password}
                  name="password"
                />
              </Form.Group>
              <div className="mt-3 text-center">
                <p>
                  {!toggle ? "Don't " : "Already "}have an account ? {" "}
                  <Button size="sm"  variant="outline-primary" onClick={handleToggle}>
                     Sign {toggle ? "In" : "Up"}
                  </Button>
                </p>
                <Button className="btn btn-block" type="submit">
                  Sign {!toggle ? "In" : "Up"}{" "}
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
