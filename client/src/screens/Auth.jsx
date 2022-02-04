import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { login, register } from "../redux/actions/adminActions";
const Auth = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
  });
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const { email, name, password } = formData;
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  const handleLogin = () => {
    dispatch(login({ email, password }));
  };
  const handleRegister = () => {
    dispatch(register({ email, password, name }));
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
                      value={name}
                      onChange={handleChange}
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
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="email" className="my-2">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="enter password"
                  value={password}
                  name="password"
                  onChange={handleChange}
                />
              </Form.Group>
              <div className="mt-3 text-center">
                <p>
                  {!toggle ? "Don't " : "Already "}have an account ?{" "}
                  <Button
                    size="sm"
                    variant="outline-primary"
                    onClick={handleToggle}
                  >
                    Sign {toggle ? "In" : "Up"}
                  </Button>
                </p>
                <Button
                  className="btn btn-block"
                  onClick={toggle ? handleRegister : handleLogin}
                >
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
