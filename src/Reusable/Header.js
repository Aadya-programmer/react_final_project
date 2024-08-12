import { Nav, Container, Navbar } from "react-bootstrap";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
export function Header(){
  return(
    <div className="top">
      <Navbar data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" style={{color:"black", fontSize:"20px"}}><HomeRoundedIcon/></Navbar.Brand>
          <Nav className="me-auto"> &emsp;
            <Nav.Link href="#home" style={{color:"black", fontSize:"20px"}}>Explore</Nav.Link> &emsp;&emsp;
            <Nav.Link href="#recommendations" style={{color:"black", fontSize:"20px"}}>Recommendations</Nav.Link>&emsp;&emsp;
            <Nav.Link href="#about" style={{color:"black", fontSize:"20px"}}>About Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}