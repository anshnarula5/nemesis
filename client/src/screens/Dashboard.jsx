import React, { useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Nav,
  Row,
  Tab,
  Table,
  Tabs,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate();
  const { adminInfo } = useSelector((state) => state.adminLogin);
  useEffect(() => {
    if (!adminInfo) {
      navigate("/");
    }
  }, [adminInfo]);
  return (
    <Container>
      <Row className=" my-5">
        <Col
          xs={10}
          md={8}
          className="mx-auto my-5 p-4"
          style={{ backgroundColor: "white" }}
        >
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Add new user">
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="text" placeholder="Mobile Number" />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email </Form.Label>
                  <Form.Control placeholder="Enter email" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Tab>
            <Tab eventKey="profile" title="All users">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Username</th>
                    <th>Mobile Number</th>
                    <th>Address</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td >Larry the Bird</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
