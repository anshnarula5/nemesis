import React from "react";
import { Button, Card, Col, Container, Nav, Row } from "react-bootstrap";

const Dashboard = () => {
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
