import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import "../styles/Home.css";
import { Container, Row, Col, Card } from 'react-bootstrap';




function Home() {
  return (
    <div className="d-flex flex-column vh-100">
      <NavBar />
      <Container fluid className="flex-grow-1">
        <Row  >
          <Col md={3} className="d-flex">
            <Card className="w-100  customer-card">
                <Card.Body>
                    <Card.Title>Customer Nav</Card.Title>
                    <Card.Text>Fill in customer nav buttons here</Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <Col md={9} className="d-flex">
                <Card className="w-100 home-card">
                    <Card.Body>
                        <Card.Title>Home</Card.Title>
                        <Card.Text>
                            Welcome to the home page. This is a simple example of a home page.
                        </Card.Text>
                        <Link to='/about'>About</Link>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
  }
export default Home;