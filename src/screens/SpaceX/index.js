import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {useQuery} from '@apollo/client';
import gql from 'graphql-tag';

const index = () => {
  const {loading, error, data} = useQuery(CHARACTERSBYIDS);
  console.log(data, loading, error);

  const CHARACTERSBYIDS = gql`
    query characters {
      charactersByIds(ids: [1, 2]) {
        name
        id
        status
        gender
        species
        image
      }
    }
  `;

  return (
    <ScrollView>
      <Text>Screen de Space X </Text>
    </ScrollView>
  );
};

export default index;
