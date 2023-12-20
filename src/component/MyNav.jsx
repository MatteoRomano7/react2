import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"

const MyNav = () => {
  return (
  <div>
    <Navbar expand="lg" className=" mb-5 border-bottom border-dark   customNav">
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
  </div>)
}
export default MyNav
