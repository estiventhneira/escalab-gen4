import React, {useContext} from 'react';
import {TouchableOpacity, Text, SafeAreaView} from 'react-native';
import {CartContext} from '../../Context';

const index = () => {
  const context = useContext(CartContext);
  const {cart, setCart} = context;

  return (
    <SafeAreaView>
      <Text>Tu carrito es: </Text>

      {context.cart.map(item => (
        <>
          <Text>{item}</Text>
          <TouchableOpacity
            onPress={() => {
              const filtered = cart.filter(function (element) {
                return element != item;
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
      ))}
    </SafeAreaView>
  );
};

export default index;
