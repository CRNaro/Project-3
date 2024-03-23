import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styles/Customer.css';
import '../styles/Home.css';

function Customer() {
    return ( 
        <>
        <NavBar />
        <Container fluid className="vh-100  d-flex flex-column mb-6">
            <Row className="customer-row flex-grow-1 d-flex-1">
               
                <Col className="d-flex flex-column">
                    <Row className="mb-3">
                        <Col md={8}>
                            <Card className="w-100 h-100 mb-3 customer-info-card flex-grow-1">
                                <Card.Body> 
                                    <Card.Title>Customer Information</Card.Title>
                                    <Card.Text>
                                        Customer Information goes here
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="w-100 mb-3 h-100 customer-notes-card flex-grow-1">
                                <Card.Header>
                                    <Button variant="link" onClick={() => {/*expand/collapse logic here*/}}>
                                        Expand</Button>
                                </Card.Header>
                                <Card.Body className="mb-3">
                                    <Card.Title>Customer Notes</Card.Title>
                                    <Card.Text>
                                        Customer Notes goes here
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="product-row flex-grow-1 d-flex-1">
                        <Col md={6} className="d-flex flex-column">
                            <Card className="mb-3 h-100 product-spec-card flex-grow-1">
                                <Card.Body>
                                    <Card.Title>Product Owned</Card.Title>
                                    <Card.Text>
                                        Product Specs goes here
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="d-flex flex-column">
                            <Card className="mb-3 h-100 product-info-card flex-grow-1">
                                <Card.Body>
                                    <Card.Title>Product Specs</Card.Title>
                                    <Card.Text>
                                        Product Info goes here
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>  
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Customer;