import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
      <Navbar bg="black" variant="dark">
        <Container fluid>
                <Navbar.Brand href="#home">Shop</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#all">All</Nav.Link>
                        <Nav.Link href="#new">New</Nav.Link>
                    </Nav>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search" 
                    />
                    <Button variant="dark">Search</Button>
                </Form>    
        </Container>
      </Navbar>
  );
}

export default NavBar;