import { Container, Navbar } from "react-bootstrap";
import {useDispatch} from "react-redux";
import {ADMIN_LOGOUT} from "../redux/types";
import { useNavigate } from "react-router";

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({type : ADMIN_LOGOUT})
    console.log("HI")
    localStorage.clear("adminInfo");
    navigate("/")
  }
  return (
    <Navbar fixed="top"  bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Admin Dashboard</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text onClick={handleLogout} style={{cursor : "pointer"}}>
            Logout
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header
