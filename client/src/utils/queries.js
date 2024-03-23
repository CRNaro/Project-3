import { gql } from '@apollo/client';
// This provides a query to grab the users info/saved material
export const customerInfo = gql`
  query customerInfo($email: String, $lastName: String) {
    customerInfo(email: $email, lastName: $lastName) {
      firstName
      lastName
      phoneNumber
      email
      customerNotes
      _id
      products {
        _id
        manufacturer
        serialNumber
        modelNumber
        installDate
        warrantyDuration
        cost
        manual
        installationNotes
        installedBy
      }
      parts {
        _id
        name
        partNumber
        cost
        installDate
        warrantyDuration
        installedBy
      }
    }
  }
`