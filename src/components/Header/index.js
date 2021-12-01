/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  Touchable,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const Header = () => {
  const navigation = useNavigation();
  const ref = useRef();
  return (
    <View
      style={{
        height: 100,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
      }}>
      <Text style={{color: 'white', fontSize: 25, fontWeight: '800'}}>
        Bienvenido
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Camera');
        }}>
        <Text style={{color: 'white'}}>Boton </Text>
      </TouchableOpacity>
      <TextInput ref={ref} />
      <View>
        <Image
          source={require('../../assets/Tesla-Emblema.png')}
          style={{height: 90, width: 90}}
        />
      </View>
    </View>
  );
};

export default Header;
