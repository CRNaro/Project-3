import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import storePic from '../assets/StorePic.jpg';
import "../styles/Home.css";
import "../styles/Customer.css";
import "../styles/Footer.css";


import Auth from '../utils/auth';


function Home() {
  return (
    <div className=" d-flex flex-column vh-100 custom-container">
      <Container fluid className="flex-grow-1 d-flex flex-column m-3">
        <Row className="flex-grow-1" >
          
                <Card className="home-card">
                    <Card.Body>
                        <Card.Title>Please Log In to Work With Customer Info</Card.Title>
                        <Card.Text>
                            Welcome to the home page. This is a simple example of a home page.
                        </Card.Text>
                      <div className="img-container">
                  <Card.Img variant="top" src={storePic} className="card-image w-100" />
                  </div>
                    </Card.Body>
                </Card>
           
        </Row>
      </Container>
      <Footer/>
    </div>
  );
  }
export default Home;