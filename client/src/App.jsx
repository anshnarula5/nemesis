import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./screens/Auth";
import Dashboard from "./screens/Dashboard";
import { Container, Row } from "react-bootstrap";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Row
        style={{
          backgroundColor: "#eaeded",
          minHeight: "100vh",
          overflowX: "hidden",
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Row>
    </Router>
  );
}

export default App;