import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Modal,
} from 'react-native';
import {useQuery, gql} from '@apollo/client';
import {CHARACTER} from '../../graphql/queries';

const index = ({navigation, route}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
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
          navigation.push('ProductDetails');
        }}>
        <Text style={{fontSize: 25, color: 'white'}}>Navegar</Text>
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
      </View>
    </SafeAreaView>
  );
};

export default index;
