// TODO: This page is for the customer information.  It will house th following cards and information:
// 1. Customer Information Card - This will sit under the navbar and just to the right of the long vertical in page nav card.  
// 2. Product Specs Card will sit bellow the Customer info card and to the right of the long vertical in page nav card and to the left
//    product info card and customer note cards
// 3. Product Info Card will sit bellow the Customer info card and to the left of the Product Specs Card and above teh Customer Note Card
// 4. Customer Note Card will sit bellow the Product Info Card and to the right of the long vertical in page nav card.  Want to make this card
//    expandable and collapsible.  This will be the last card on the page.
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Customer() {
    return ( 
        <>
        <NavBar />
        <Container fluid>
            <Row>
                <Col md={3} className="d-flex">
                    {/* In page vertical nav card */}
                    <Card className="w-100  customer-card">
                        <Card.Body>
                            <Card.Title>Customer Nav</Card.Title>
                            <Card.Text>Fill in customer nav buttons here</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={9}>
                    <Card className="w-100 h-20 mb-3 customer-info-card">
                    <Card.Body> 
                        <Card.Title>Customer Information</Card.Title>
                        <Card.Text>
                            Customer Information goes here
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    <Row>
                        <Col md={6}>
                            <Card className="mb-3">
                    <Card.Body>
                        <Card.Title>Product Specs</Card.Title>
                        <Card.Text>
                            Product Specs goes here
                        </Card.Text>
                    </Card.Body>
                    </Card>
                        </Col>
                        <Col md={6}>
                            <Card className="mb-3">
                    <Card.Body>
                        <Card.Title>Product Info</Card.Title>
                        <Card.Text>
                            Product Info goes here
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Button variant="link" onClick={() => {/*expand/collapse logic here*/}}>
                                Expand</Button>
                        </Card.Header>
                    <Card.Body>
                        <Card.Title>Customer Notes</Card.Title>
                        <Card.Text>
                            Customer Notes goes here
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