import React, {useContext} from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import {CartContext} from '../../Context';

const index = ({modalIsOpen, setModalIsOpen, character}) => {
  const context = useContext(CartContext);
  const {cart, setCart} = context;
  console.log(character);
  return (
    <Modal visible={modalIsOpen} transparent={true}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            width: '80%',
            height: '20%',
          }}>
          <Text style={{marginBottom: 20}}>
            estás seguro de añadir este artículo?
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{
                backgroundColor: 'black',
                padding: 6,
                borderRadius: 5,
                margin: 5,
              }}
              onPress={() => {
                const parseId = parseInt(character.id, 10);
                setCart([...cart, parseId]);
                setModalIsOpen(false);
              }}>
              <Text style={{fontSize: 15, color: 'white'}}>Sí Comprar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'black',
                padding: 6,
                borderRadius: 5,
                margin: 5,
              }}
              onPress={() => {
                setModalIsOpen(false);
              }}>
              <Text style={{fontSize: 15, color: 'white'}}>No, Eliminar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default index;
