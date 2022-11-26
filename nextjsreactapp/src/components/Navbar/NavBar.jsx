import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
  const categories = ["Ordinateur Portable", "Alimentations pour ordinateur","Casques VR",
                    "Imprimantes & périphériques","Casques de bureau","Téléphonie","Tablettes & liseuses",
                    "Télévision & vidéoprojecteur","Mémoire vive & stockage"]
  return (
      <Navbar bg="black" variant="dark">
        <Container fluid>
                <Navbar.Brand href="/">Shop</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">All</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown" >
                            {categories.map((category)=>(
                                <NavDropdown.Item href={`/category/${category}`}>{category}</NavDropdown.Item>))}
                        </NavDropdown>
                    </Nav>
                   
        </Container>
      </Navbar>
  );
}

export default NavBar;