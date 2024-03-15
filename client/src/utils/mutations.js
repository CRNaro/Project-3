import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`;
export const ADD_EMPLOYEE = gql`
  mutation addEmployee($firstName: String!, $lastName: String!, $username: String!, $password: String!) {
    addEmployee(firstname: $firstName, lastName: $lastname, username: $username, password: $password) {
      employee {
        _id
        username
      }
    }
  }
`;

export const ADD_CUSTOMER = gql`
  mutation addCustomer($firstName: String!, $lastName: String!, $phoneNumber: Int, $email: String, $customerNotes: STRING, $products: ProductData!) {
    addCustomer(firstName: $firstName, lastName: $lastName, phoneNumber: $phoneNumber, email: $email, customerNotes: $customerNaotes, products: $products) {
    
    }
  }
`;