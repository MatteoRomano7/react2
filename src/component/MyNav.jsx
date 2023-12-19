import { Navbar } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import Container from "react-bootstrap/Container"

const MyNav = () => {
  <Navbar expand="lg" className="bg-body-success mb-2 bg-dark customNav">
    <Container fluid>
      <Navbar.Brand href="#">The Roman's Bookshop</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Contatti</Nav.Link>
          <Nav.Link href="#">Chi Siamo</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
}
export default MyNav
