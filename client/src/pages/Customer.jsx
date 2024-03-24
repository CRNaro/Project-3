import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import '../styles/Customer.css';
import '../styles/Home.css';
import Auth from '../utils/auth';
import { useLazyQuery  } from '@apollo/client';
import { customerInfo } from '../utils/queries';

function Customer() {
    const [showModal, setShowModal] = useState(false);

        const handleOpenModal = () => {
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const customerIdentifier = event.target.elements.formBasicEmail.value;
        console.log('submit form with identifier: ',customerIdentifier);
        customerSearch({ variables: { email: customerIdentifier, lastName: customerIdentifier } });
        console.log('Form submitted');
    }


    const [customerSearch, { loading, data }] = useLazyQuery (customerInfo);

console.log('Data: ', data);
    // example of how to call lazyquery
//     <div>
//     {data?.dog && <img src={data.dog.displayImage} />}
//     <button onClick={() => customerSearch({ variables: { email: 'test1@email.com' } })}>
//       Click me!
//     </button>
//   </div>Customer Notes goes here
    const userData = data?.customerInfo || {};
    console.log(userData);

    if (loading) {
        return <h2>LOADING...</h2>;
      }

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
                                    <div className="d-flex justify-content-start">
                                        <Button variant="primary" 
                                        onClick={handleOpenModal}>Find Customer</Button>
                                    </div>
                                    <Card.Title>Customer Information</Card.Title>
                                    <Card.Text>
                                    Name: {data?.customerInfo?.firstName} {data?.customerInfo?.lastName}
                                    Phone: {data?.customerInfo?.phoneNumber}
                                    Email: {data?.customerInfo?.email}
                                  
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
                                    Notes: {data?.customerInfo?.customerNotes}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="product-row flex-grow-1 d-flex-1">
                        <Col md={6} className="d-flex flex-column">
                            {data?.customerInfo?.products?.length > 0 ? 
                            data.customerInfo.products.map((product) => (
                            <Card key={product._id}className="mb-3 h-100 product-spec-card flex-grow-1">
                                <Card.Body>
                                    <Card.Title>Product Owned</Card.Title>
                                    <Card.Text>
                                    Product: {product.manufacturer} {product.modelNumber}
                                    Serial Number: {product.serialNumber}
                                    Install Date: {product.installDate}
                                    Warranty Duration: {product.warrantyDuration}
                                    Cost: {product.cost}
                                    Manual: {product.manual}
                                    Installation Notes: {product.installationNotes}
                                    Installed By: {product.installedBy}
                                    </Card.Text>
                                </Card.Body>
                            </Card>  
                            )) : Array.from({ length: 3 }).map((_, index) => (
                            <Card key={index} className="mb-3 h-100 product-spec-card flex-grow-1">
                                <Card.Body>
                                    <Card.Title>Product Owned</Card.Title>
                                    <Card.Text>
                                    Product:
                                    Serial Number:
                                    Install Date:
                                    Warranty Duration:
                                    Cost:
                                    Manual:
                                    Installation Notes:
                                    Installed By:
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            ))}
                        </Col>
                        {/* CRN May Not need */}
                        {/* <Col md={6} className="d-flex flex-column">
                            {data?.customerInfo?.parts.map((part, index) => (
                            <Card key={part._id}className="mb-3 h-100 product-info-card flex-grow-1">
                                <Card.Body>
                                    <Card.Title>Product Specs</Card.Title>
                                    <Card.Text>
                                    Part: {part.name}
                                    Part Number: {part.partNumber}
                                    Cost: {part.cost}
                                    Install Date: {part.installDate}
                                    Warranty Duration: {part.warrantyDuration}
                                    Installed By: {part.installedBy}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            ))}
                        </Col> */}
                    </Row>  
                </Col>
            </Row>
        </Container>
        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Find Customer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Customer Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter customer last name or email" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
        </>
    );
}

export default Customer;