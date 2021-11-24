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

const index = () => {
  const navigation = useNavigation();
  const [characters, setCharacters] = useState([1, 2, 3, 4, 5]);

  const CHARACTERSBYIDS = gql`
    query characters($ids: [ID!]!) {
      charactersByIds(ids: $ids) {
        name
        id
        image
      }
    }
  `;

  const {
    error: errorLocation,
    data: dataLocation,
    loading: loadingLocation,
  } = useQuery(CHARACTERSBYIDS, {variables: {ids: characters}});

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
        {errorLocation ? console.log(errorLocation) : null}

        {dataLocation &&
          dataLocation.charactersByIds.map(item => {
            return (
              <View style={{width: '100%'}}>
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    width: '100%',
                    marginBottom: 30,
                  }}
                  onPress={() => {
                    navigation.navigate('ProductDetailsRandM', {id: item.id});
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
                <View
                  style={{
                    flexDirection: 'row',
                    marginBottom: 15,
                    justifyContent: 'space-around',
                  }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: 'green',
                      width: 150,
                      padding: 10,
                      borderRadius: 5,
                    }}>
                    <Text style={{color: 'white'}}>Comprar</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      const filtered = characters.filter(function (element) {
                        return element != item.id;
                      });
                      setCharacters(filtered);
                    }}
                    style={{
                      backgroundColor: 'red',
                      width: 150,
                      padding: 10,
                      borderRadius: 5,
                    }}>
                    <Text style={{color: 'white'}}>Eliminar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
