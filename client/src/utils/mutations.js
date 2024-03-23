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
  mutation addCustomer($firstName: String!, $lastName: String!, $phoneNumber: String, $email: String) {
    addCustomer(firstName: $firstName, lastName: $lastName, phoneNumber: $phoneNumber, email: $email) {
      _id
    }
  }
`;
