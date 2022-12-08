import styles from "./nav.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Guitar from "../images/guitarLogo.jpg";

function BrandExample() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={Guitar}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Dixon Guitars
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default BrandExample;
