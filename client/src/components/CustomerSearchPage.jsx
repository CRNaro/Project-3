// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import { useLazyQuery } from '@apollo/client';
// import { customerInfo } from '../utils/queries';

// export default function CustomerSearchPage({ 
//     onCustomerSelect,
//     setSelectedCustomer,
// }) {
//     const [currentCustomer, setCurrentCustomer] = useState(null);
//     const [showSearchResults, setShowSearchResults] = useState([]);
//     const [customerSearch, { data }] = useLazyQuery(customerInfo);

//     const handleFormSubmit = async (event) => {
//         event.preventDefault();
//         const customerIdentifier = event.target.elements.formBasicEmail.value;
//         console.log('submit form with identifier: ',customerIdentifier);
//         await customerSearch({ variables: { email: customerIdentifier, lastName: customerIdentifier } });
//         console.log('Form submitted');
//         const customerInfo = Array.isArray(data.customerInfo) ? data.customerInfo[0] : [data.customerInfo];  
//         setShowSearchResults([customerInfo]); //took data.customerInfo out of the array
//         setCurrentCustomer(customerInfo);
//     };

// // export default function CustomerSearchPage({ 
// //     onCustomerSelect,
// //     showSearchResults, 
// //     setSelectedCustomer,
// //     handleFormSubmit
// // }) {
// //     const [currentCustomer, setCurrentCustomer] = useState(null);
// //     const handleSubmit = async (event) => {
// //         event.preventDefault();
// //        await handleFormSubmit(event);
// //        setCurrentCustomer(showSearchResults);
// //     };
// //     const handleConfirm = () => {
// //         setSelectedCustomer(currentCustomer);
// //     };

//     return (
//         <div>
//             <h1>Find Customer</h1>
//             <Form onSubmit={handleSubmit}>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Customer Name</Form.Label>
//                     <Form.Control type="text" placeholder="Enter customer last name or email" />
//                 </Form.Group>
//                 <Button variant="primary" type="submit">
//                     Submit
//                 </Button>
//             </Form>
//             {currentCustomer && (
//                  <div>
//                  <h2 className="customer-modal-name">{currentCustomer.firstName} {currentCustomer.lastName}</h2>
//                  <p>{currentCustomer.phoneNumber}</p>
//                  <p>{currentCustomer.email}</p>
//                  <Button variant="success" onClick={handleConfirm}>
//                      Confirm
//                  </Button>
           
//                 </div>
//             )}
//         </div>
//     );
// }


// ---------------
//         <CustomerSearchPage 
//   onCustomerSelect={setSelectedCustomer}
//   showSearchResults={showSearchResults}
//   setSelectedCustomer={setSelectedCustomer}
//   showCustomerModal={showCustomerModal}
//   handleCloseModal={handleCloseModal}
//   handleFormSubmit={handleFormSubmit}
// />
     // <div key={showSearchResults._id} onClick={() => setSelectedCustomer(showSearchResults)}>
                //     <h2 className="customer-modal-name">{showSearchResults.firstName} {showSearchResults.lastName}</h2>
                //     <p>{showSearchResults.phoneNumber}</p>
                //     <p>{showSearchResults.email}</p>