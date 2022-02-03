import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar fixed="top"  bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Logout
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header
