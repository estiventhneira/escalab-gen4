import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {data} from '../../assets/data';

const index = ({navigation, route}) => {
  const {id} = route.params;
  return (
    <View style={{flexDirection: 'column'}}>
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
          source={{uri: data[id].url}}
          style={{
            height: 200,
            width: '90%',
            marginVertical: 20,
            borderRadius: 10,
          }}
        />
      </View>
      <Text style={{padding: 20, fontSize: 20}}>{data[id].description}</Text>
    </View>
  );
};

export default index;
