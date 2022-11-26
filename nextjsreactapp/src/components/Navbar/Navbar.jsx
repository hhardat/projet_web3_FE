import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useEffect } from 'react';
import axios from 'axios';

const NavBar = () => {

  const [categories, setCategories] = useState([]);
  // recupération de la dat GET 
  const hook = () => {
    axios
      .get('http://localhost:3001/categories')
      .then(response => {
        //setTimeout(() => setNotes(response.data), 5000)
        setCategories(response.data)
      })
  }
  
  useEffect(hook, [])
  
  return (
      <Navbar bg="black" variant="dark">
        <Container fluid>
                <Navbar.Brand href="/">Shop</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">All</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown" >
                            {categories.map((category)=>(
                                <NavDropdown.Item key={category.id} href={`/categories/${category.slug}`}>{category.name}</NavDropdown.Item>))}
                        </NavDropdown>
                    </Nav>
                   
        </Container>
      </Navbar>
  );
}

export default NavBar;