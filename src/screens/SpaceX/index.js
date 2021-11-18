import React, {useState, useEffect} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import axios from 'axios';
import {gql, useQuery} from '@apollo/client';

const index = () => {
  const [rockets, setRockets] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.spacexdata.com/latest/rockets')
      .then(e => setRockets(e.data));
  }, []);

  console.log(rockets);

  const CHARACTERSBYIDS = gql`
    query characters {
      charactersByIds(ids: [1, 2, 3, 4, 5, 6, 7, 8]) {
        name
        id
        status
        gender
        species
        image
        location {
          id
          name
        }
      }
    }
  `;

  //const {loading, error, data} = useQuery(CHARACTERSBYIDS);

  const {
    error: errorLocation,
    data: dataLocation,
    loading: loadingLocation,
  } = useQuery(CHARACTERSBYIDS);

  console.log(dataLocation, loadingLocation, errorLocation);

  return (
    <ScrollView>
      <Text>Screen de Space X</Text>

      {loadingLocation ? <Text>...</Text> : <Text>Data</Text>}

      {errorLocation ? <Text>Hubo un error de conexión</Text> : null}

      {dataLocation &&
        dataLocation.charactersByIds.map(e => {
          console.log(e.name);
          return (
            <>
              <Image
                source={{uri: e.image}}
                style={{
                  height: 200,
                  width: '90%',
                  marginVertical: 20,
                  borderRadius: 10,
                }}
              />
              <Text>{e.name}</Text>
            </>
          );
        })}
    </ScrollView>
  );
};

export default index;
