import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Touchable,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import {useQuery} from '@apollo/client';
import {CHARACTERSBYIDS} from './graphql/queries';
import {useNavigation} from '@react-navigation/native';
import {CartContext} from '../../Context';

const index = () => {
  const navigation = useNavigation();
  const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [characters, setCharacters] = useState(originalArray);
  const [page, setPage] = useState(0);
  const context = useContext(CartContext);
  const {cart, setCart} = context;
  const [dataCache, setDataCache] = useState(false);

  useEffect(() => {
    const multiplo = 10 * page;
    const filtered = originalArray.map(element => {
      const newElement = element + multiplo;
      return newElement;
    });
    const allArrays = filtered.concat(characters);
    setCharacters(allArrays);
  }, [page]);

  const {
    error: errorLocation,
    data: dataLocation,
    loading: loadingLocation,
  } = useQuery(CHARACTERSBYIDS, {variables: {ids: characters}});

  useEffect(() => {
    if (dataLocation) {
      setDataCache(dataLocation);
    }
    return;
  }, [dataLocation]);

  return (
    <SafeAreaView style={{padding: 15}}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity
            style={{padding: 15, width: '30%', backgroundColor: 'black'}}
            onPress={() => navigation.goBack('Cart')}>
            <Text style={{color: 'white'}}>Ir Atras</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{padding: 15, width: '30%', backgroundColor: 'black'}}
            onPress={() => navigation.navigate('Cart')}>
            <Text style={{color: 'white'}}>Ir al Carrito</Text>
          </TouchableOpacity>
        </View>

        {errorLocation ? console.log(errorLocation) : null}

        {loadingLocation ? (
          <ActivityIndicator size="large" style={{padding: 20}} />
        ) : null}

        {dataCache &&
          dataCache.charactersByIds.map(item => {
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
                  <Text
                    style={{fontSize: 20, fontWeight: '700', color: 'gray'}}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    marginBottom: 15,
                    justifyContent: 'space-around',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      const parseId = parseInt(item.id, 10);
                      setCart([...cart, parseId]);
                    }}
                    style={{
                      backgroundColor: 'green',
                      width: 150,
                      padding: 10,
                      borderRadius: 5,
                    }}>
                    <Text style={{color: 'white'}}>Comprar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity
            onPress={() => {
              if (page > 0) {
                setPage(page - 1);
              }
            }}
            style={{
              backgroundColor: 'blue',
              padding: 10,
              borderRadius: 5,
            }}>
            <Text style={{color: 'white'}}>Página anterior</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setPage(page + 1);
            }}
            style={{
              backgroundColor: 'blue',
              padding: 10,
              borderRadius: 5,
            }}>
            <Text style={{color: 'white'}}>Siguiente página</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
