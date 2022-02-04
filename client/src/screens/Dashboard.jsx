import React, {useEffect} from "react";
import { Button, Card, Col, Container, Nav, Row } from "react-bootstrap";
import {useSelector} from "react-redux";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate();
  const {adminInfo} = useSelector(state => state.adminLogin)
  useEffect(() => {
    if (!adminInfo) {
      navigate("/")
    }
  }, [adminInfo])
  return (
    <Container>
      <Row className="h-100">
        <Col
          xs={10}
          md={10}
          className=" m-auto"
          style={{ backgroundColor: "white" }}
        >
          <Row className="p-2">
            <Col md={6} className="text-center">
              <Button>Click</Button>
            </Col>
            <Col md={6} className="text-center">
              <Button> Click</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
