import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Touchable,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {gql, useQuery} from '@apollo/client';
import {useNavigation} from '@react-navigation/native';

const CHARACTERSBYIDS = gql`
  query characters {
    charactersByIds(ids: [1, 2, 3, 4, 5, 6, 7, 8]) {
      name
      id
      image
    }
  }
`;

const index = () => {
  const navigation = useNavigation();

  const {
    error: errorLocation,
    data: dataLocation,
    loading: loadingLocation,
  } = useQuery(CHARACTERSBYIDS);

  return (
    <SafeAreaView style={{padding: 15}}>
      <ScrollView>
        <TouchableOpacity
          style={{padding: 10, backgroundColor: 'black'}}
          onPress={() => navigation.goBack()}>
          <Text style={{color: 'white'}}>Ir Atras</Text>
        </TouchableOpacity>
        <Text>Screen de Space X</Text>

        {loadingLocation ? <Text>...</Text> : <Text>Data</Text>}
        {errorLocation ? <Text>Hubo un error de conexión</Text> : null}

        {dataLocation &&
          dataLocation.charactersByIds.map(item => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ProductDetailsRandM', {id: item.id});
                }}
                style={{
                  marginBottom: 30,
                }}>
                <Image
                  source={{uri: item.image}}
                  style={{
                    height: 300,
                    width: '90%',
                    marginVertical: 20,
                    borderRadius: 10,
                  }}
                />
                <Text>{item.name}</Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
