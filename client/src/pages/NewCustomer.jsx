import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import NewCustomerForm from '../components/NewCustomerForm';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styles/Customer.css';
import '../styles/Home.css';

function NewCustomer() {
    return (
        <>
        <NewCustomerForm />
       
        </>
    )
}

export default NewCustomer;