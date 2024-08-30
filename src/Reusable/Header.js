import { Nav, Container, Navbar } from "react-bootstrap";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "rgb(1, 100, 143)" }}> {/* Custom background color */}
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ color: "white", fontSize: "20px" }}>
          <HomeRoundedIcon />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/explore" style={{ color: "white", fontSize: "20px" }}>Explore</Nav.Link>
            <Nav.Link as={Link} to="/recommendations" style={{ color: "white", fontSize: "20px" }}>Recommendations</Nav.Link>
            <Nav.Link as={Link} to="/about" style={{ color: "white", fontSize: "20px" }}>About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact" style={{ color: "white", fontSize: "20px" }}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
