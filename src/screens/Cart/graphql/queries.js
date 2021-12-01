import gql from 'graphql-tag';

export const CHARACTERSBYIDS = gql`
  query characters($ids: [ID!]!) {
    charactersByIds(ids: $ids) {
      name
      id
      image
      status
      species
    }
  }
`;
