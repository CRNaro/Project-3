import { gql } from '@apollo/client';
// This provides a query to grab the users info/saved material
export const GET_ME = gql`
query me {
    me {
      _id
      firstName
      lastName
      email
      username
    }
  }
`