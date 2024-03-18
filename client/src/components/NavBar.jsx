
import React from 'react';
import { Container, Row, Col, Card, Navbar, Nav } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar bg="light">
        <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
        </Container>
    </Navbar>   
  );
}

export default NavBar;
