
import React from 'react';
import { Container, Row, Col, Card, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/HeartlineStove.jpg';
 
function NavBar() {
  return (
    <Navbar bg="light">
        <Container>
            <Navbar.Brand href="#home">
            <img src={logo} width="80" height="40" className="d-inline-block align-top" alt="heartlinelogo" />
            </Navbar.Brand>
            <Nav className="me-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
        </Container>
    </Navbar>   
  );
}

export default NavBar;
