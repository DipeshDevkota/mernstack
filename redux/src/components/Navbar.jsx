import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import { useSelector } from "react-redux";
const Navbars = () => {

  const cartProducts= useSelector(state=> state.cart)

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Redux Toolkit</Navbar.Brand>

        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link href="#">
            <Link to="/products">Products</Link>
          </Nav.Link>
        </Nav>
        <Navbar.Collapse className="">
          <Navbar.Text>
            <Nav.Link href="#">
              <Link to="/cart">My Bag {cartProducts.length}</Link>
            </Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
