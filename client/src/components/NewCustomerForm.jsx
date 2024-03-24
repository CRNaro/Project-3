import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { ADD_CUSTOMER } from '../utils/mutations'
import { Form, Button, Alert } from 'react-bootstrap';

const NewCustomerForm = () => {
    const [userFormData, setUserFormData] = useState({ firstName: '', lastName: '', phoneNumber: 0, email: '' });
    const [showAlert, setShowAlert] = useState(false);
    const [validated] = useState(false);
    const [addCustomer] = useMutation(ADD_CUSTOMER)


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        if (!/^\d+$/.test(userFormData.phoneNumber)) {
            console.log('Phone number must contain only numbers');
            return;
        }


        try {
            let { firstName, lastName, phoneNumber, email } = userFormData
            phoneNumber = Math.floor(phoneNumber)
            const { data } = await addCustomer({
                variables: { firstName, lastName, phoneNumber, email },
            });


        } catch (e) {
            console.error(e);
            setShowAlert(true);
        }

        // setUserFormData({
        //     firstName: '',
        //     lastName: '',
        //     phoneNumber: '',
        //     email: '',

        // });
    }

    return (
        <>

            {/* This is needed for the validation functionality above */}
            <Form onSubmit={handleFormSubmit}>
                {/* show alert if server response is bad */}
                <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                    Customer was not created, something went wrong!
                </Alert>

                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='firstName'>First Name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Customer First Name'
                        name='firstName'
                        onChange={handleInputChange}
                        value={userFormData.firstName}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>First Name is required!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='lastName'>Last Name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Customer Last Name'
                        name='lastName'
                        onChange={handleInputChange}
                        value={userFormData.lastName}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>Last name is required!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='phoneNumber'>Phone Number</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Customer Phone Number'
                        name='phoneNumber'
                        onChange={handleInputChange}
                        value={userFormData.phoneNumber}
                    />
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='email'>Email</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Customer email address'
                        name='email'
                        onChange={handleInputChange}
                        value={userFormData.email}
                    />
                    <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
                </Form.Group>
                {Auth.loggedIn() && (
                    <Button
                        disabled={!(userFormData.firstName && userFormData.lastName && userFormData.phoneNumber && userFormData.email)}
                        type='submit'
                        variant='success'>
                        Submit
                    </Button>
                )}
            </Form>
        </>
    );
};

export default NewCustomerForm;