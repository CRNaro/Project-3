import { useState } from 'react';
import React from 'react';
import { Container, Row, Col, Card, Navbar, Nav, Modal, Tab } from 'react-bootstrap';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { Link } from 'react-router-dom';
import logo from '../assets/HeartlineStove.jpg';

import Auth from '../utils/auth';

function NavBar() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} width="80" height="40" className="d-inline-block align-top" alt="heartlinelogo" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            {/* if user is logged in show saved books and logout */}
            {Auth.loggedIn() ? (
              <>
                <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
              </>
            ) : (
              <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignupForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
}

export default NavBar;
