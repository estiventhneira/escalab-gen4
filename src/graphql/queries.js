import gql from 'graphql-tag';

export const CHARACTER = gql`
  query character($id: ID!) {
    character(id: $id) {
      name
      id
      status
      gender
      species
      image
      type
      origin {
        name
      }
      created
    }
  }
`;
