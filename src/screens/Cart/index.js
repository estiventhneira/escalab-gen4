import React, {useContext} from 'react';
import {
  TouchableOpacity,
  Text,
  SafeAreaView,
  View,
  Image,
  ScrollView,
} from 'react-native';
import {CartContext} from '../../Context';
import {useNavigation} from '@react-navigation/core';
import {useQuery} from '@apollo/client';
import {CHARACTERSBYIDS} from './graphql/queries';

const index = () => {
  const context = useContext(CartContext);
  const {cart, setCart} = context;
  const navigation = useNavigation();

  const {error, data, loading} = useQuery(CHARACTERSBYIDS, {
    variables: {ids: cart},
  });

  console.log(data);

  return (
    <SafeAreaView>
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
            onPress={() => navigation.navigate('Home')}>
            <Text style={{color: 'white'}}>Ir a Home</Text>
          </TouchableOpacity>
        </View>
        <Text>Tu carrito es: </Text>

        {data?.charactersByIds.map(item => {
          console.log(item);
          return (
            <>
              <Text>{item.name}</Text>
              <Image
                source={{uri: item.image}}
                style={{
                  height: 300,
                  width: '90%',
                  marginVertical: 20,
                  borderRadius: 10,
                }}
              />
              <TouchableOpacity
                onPress={() => {
                  const filtered = cart.filter(function (element) {
                    return element != item.id;
                  });
                  setCart(filtered);
                }}
                style={{
                  backgroundColor: 'red',
                  width: 150,
                  padding: 10,
                  borderRadius: 5,
                }}>
                <Text style={{color: 'white'}}>Eliminar</Text>
              </TouchableOpacity>
            </>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
