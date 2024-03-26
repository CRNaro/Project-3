import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import '../styles/Customer.css';
import '../styles/Home.css';
import Auth from '../utils/auth';
import { useLazyQuery, useMutation  } from '@apollo/client';
import { customerInfo } from '../utils/queries';
// notes saver
import { UPDATE_CUSTOMER_NOTES } from '../utils/mutations';
import { ADD_PRODUCT } from '../utils/mutations';



function Customer() {
    const [showModal, setShowModal] = useState(false);
    // show search results
    const [showSearchResults, setShowSearchResults] = useState([]);
    // notes saver
const [updateCustomerNotes] = useMutation(UPDATE_CUSTOMER_NOTES);
const [customerNote, setCustomerNotes] = useState('');

const [selectedCustomer, setSelectedCustomer] = useState(null);

const [customerSearch, { loading, data }] = useLazyQuery (customerInfo);

const handleClearCustomer = () => {
    setSelectedCustomer(null);
    setShowSearchResults([]);
    setCustomerNotes('');
}

// notes saver
const handleSaveNotes = async (event) => {
    event.preventDefault();
    const customerId = selectedCustomer?._id
    const customerNotes = customerNote
    const { data: userData } = await updateCustomerNotes({
        variables: { customerNotes , customerId },
    });
    if (updatedData) {
        setCustomerNotes(updatedData.updateCustomerNotes.customerNotes);
    }


};

    //     const handleOpenModal = () => {
    //     setShowModal(true);
    // };
    // const handleCloseModal = () => {
    //     setShowModal(false);
    // }
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const customerIdentifier = event.target.elements.formBasicEmail.value;
        console.log('submit form with identifier: ',customerIdentifier);
        const { data } = await customerSearch({ variables: { email: customerIdentifier, lastName: customerIdentifier } });
        console.log('Form submitted');
        //const customerInfo = Array.isArray(data.customerInfo) ? data.customerInfo[0] : [data.customerInfo];
        setShowSearchResults(data.customerInfo);
}


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

        <Container fluid className="vh-100  d-flex flex-column mb-6">
            <Row className="customer-row flex-grow-1 d-flex-1">
               
                <Col className="d-flex flex-column">
                    <Row className="mb-3">
                        <Col md={8}>
                            <Card className="w-100 h-100 mb-3 customer-info-card flex-grow-1">
                                <Card.Body> 
                                <Card.Title>Customer Information</Card.Title>
                                    <div className="d-flex justify-content-start">
                                    <Form onSubmit={handleFormSubmit}>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Enter Search</Form.Label>
                                                <Form.Control type="text" placeholder="Last name or email" />
                                            </Form.Group>
                                            <Button className="submit-button" variant="primary" type="submit">
                                                Submit
                                            </Button>
                                            <Button className="clear-customer-button" variant="secondary" onClick={handleClearCustomer}>
                                            Clear Customer
                                            </Button>
                                        </Form>
                                        {showSearchResults && (
                                            <div key={showSearchResults._id} style={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center'}}>
                                                <Button variant="link" className="name-button" 
                                                onClick={() => {setSelectedCustomer(showSearchResults); setShowSearchResults(null);}}>
                                                {showSearchResults.firstName} {showSearchResults.lastName}</Button>
                                                <p>{showSearchResults.phoneNumber}</p>
                                                <p>{showSearchResults.email}</p> 
                                            </div>
                                        )}
                                    </div>
                                   <Card.Subtitle className="search-results">
                                     <div>Name: {selectedCustomer?.firstName} {selectedCustomer?.lastName}</div>
                                     <div>Phone: {selectedCustomer?.phoneNumber}</div>
                                     <div>Email: {selectedCustomer?.email}</div>
                                     </Card.Subtitle>
                                     <Button className="add-product-button" variant="primary" /* onClick={handleAddProduct} */>    
                                        Add Product
                                     </Button>
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
                                    Notes: {selectedCustomer?.customerNotes}
                                    </Card.Text>
                                    <textarea value={customerNote} onChange={(e) => 
                                        setCustomerNotes(e.target.value)}></textarea>
                                        <button onClick={handleSaveNotes}>Save Notes</button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="product-row flex-grow-1 d-flex-1">
                        <Col md={6} className="d-flex flex-column">
                        {selectedCustomer && (selectedCustomer?.products?.length > 0 ? 
                            selectedCustomer.products.map((product) => (
                            <Card key={product._id}className="mb-3 h-100 product-spec-card flex-grow-1">
                               
                                <Card.Body className="search-results">
                                    <Card.Title>Product Owned</Card.Title>
                                    <p>Product: {product.manufacturer}</p> 
                                    <p>Model Number: {product.modelNumber}</p>
                                    <p>Serial Number: {product.serialNumber}</p>
                                    <p>Install Date: {product.installDate}</p>
                                    <p>Warranty Duration: {product.warrantyDuration}</p>
                                    <p>Cost: {product.cost}</p>
                                    <p>Manual: {product.manual}</p>
                                    <p>Installation Notes: {product.installationNotes}</p>
                                    <p>Installed By: {product.installedBy}</p>
                                   </Card.Body>
                                   <div className="delete-button-container">
                                <Button className="delete-button" onClick={() => handleDeleteProduct(product._id)}>Delete</Button>
                                </div>
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
                            )
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
        {/* <Modal show={showModal} onHide={handleCloseModal}>
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
                {showSearchResults && (   //take .map((customer) =>
                    <div key={showSearchResults._id}>
                        <h2>{showSearchResults.firstName} {showSearchResults.lastName}</h2>
                        <p>{showSearchResults.phoneNumber}</p>
                        <p>{showSearchResults.email}</p>
                    </div>
                )}
            </Modal.Body>
        </Modal> */}
        </> 
    );
}

export default Customer;