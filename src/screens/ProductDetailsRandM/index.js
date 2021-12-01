import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Modal,
} from 'react-native';
import ModalBuyItem from '../../components/ModalBuyItem';
import ModalDeleteItem from '../../components/ModalDeleteItem';
import {CartContext} from '../../Context';
import {useQuery, gql} from '@apollo/client';
import {CHARACTER} from '../../graphql/queries';

const index = ({navigation, route}) => {
  const context = useContext(CartContext);
  const {cart} = context;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false);
  const {id} = route.params;
  const {data, error, loading} = useQuery(CHARACTER, {
    variables: {id: id},
  });
  const character = data?.character;
  const date = new Date(character?.created).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'utc',
  });

  return (
    <SafeAreaView style={{flexDirection: 'column'}}>
      <ModalBuyItem
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        character={character}
      />
      <ModalDeleteItem
        modalIsOpen={modalDeleteIsOpen}
        setModalIsOpen={setModalDeleteIsOpen}
        character={character}
      />
      <TouchableOpacity
        style={{
          backgroundColor: 'black',
          padding: 7,
          borderRadius: 5,
          margin: 10,
        }}
        onPress={() => {
          navigation.goBack();
        }}>
        <Text style={{fontSize: 25, color: 'white'}}>Regresar Atrás</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'black',
          padding: 7,
          borderRadius: 5,
          margin: 10,
        }}
        onPress={() => {
          navigation.navigate('Cart');
        }}>
        <Text style={{fontSize: 25, color: 'white'}}>Carrito</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'black',
          padding: 7,
          borderRadius: 5,
          margin: 10,
        }}
        onPress={() => {
          navigation.popToTop();
        }}>
        <Text style={{fontSize: 25, color: 'white'}}>Volver a home</Text>
      </TouchableOpacity>

      <View style={{alignItems: 'center'}}>
        <Image
          source={{uri: character?.image}}
          style={{
            height: 300,
            width: '90%',
            marginVertical: 20,
            borderRadius: 10,
          }}
        />
        <Text>Name: {character?.name}</Text>
        <Text>Gender: {character?.gender}</Text>
        <Text>Species: {character?.species}</Text>
        <Text>Status: {character?.status}</Text>
        <Text>Created at: {date}</Text>
        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            padding: 7,
            borderRadius: 5,
            margin: 10,
          }}
          onPress={() => {
            setModalIsOpen(true);
          }}>
          <Text style={{fontSize: 25, color: 'white'}}>Comprar</Text>
        </TouchableOpacity>
        {cart.includes(parseInt(character?.id, 10)) ? (
          <TouchableOpacity
            style={{
              backgroundColor: 'red',
              padding: 7,
              borderRadius: 5,
              margin: 10,
            }}
            onPress={() => {
              setModalDeleteIsOpen(true);
            }}>
            <Text style={{fontSize: 25, color: 'white'}}>Eliminar</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default index;
