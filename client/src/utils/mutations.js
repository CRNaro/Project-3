import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      employee {
       username
       email
     }
    }
  }
`;
export const ADD_EMPLOYEE = gql`
  mutation addEmployee($firstName: String!, $lastName: String!, $username: String!, $email: String!, $password: String!) {
    addEmployee(firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password) {
      token
      employee {
        _id
        firstName
        lastName
        email
        username
      }
    }
  }
`;

export const ADD_CUSTOMER = gql`
mutation Mutation($firstName: String!, $lastName: String!, $phoneNumber: Float!, $email: String!) {
  addCustomer(firstName: $firstName, lastName: $lastName, phoneNumber: $phoneNumber, email: $email) {
    _id
    firstName
    lastName
    phoneNumber
    email
  }
}
`
export const UPDATE_CUSTOMER_NOTES = gql`
  mutation UpdateCustomerNotes($id: ID!, $customerNotes: String!) {
    updateCustomerNotes(id: $id, customerNotes: $customerNotes) {
      _id
      customerNotes
    }
  }
`;

export const SAVE_NOTE = gql`
  mutation Mutation($customerId: String!, $customerNotes: String!) {
    saveNote(customerId: $customerId, customerNotes: $customerNotes) {
      customerNotes
    }
  }
`;