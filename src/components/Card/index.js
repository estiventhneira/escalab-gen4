/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, Image, View} from 'react-native';
import BuyButton from './BuyButton';

const Card = ({children, url, modelo}) => {
  return (
    <TouchableOpacity style={{margin: 20}}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={{uri: url}}
          style={{
            height: 200,
            width: '90%',
            marginVertical: 20,
            borderRadius: 10,
          }}
        />
      </View>
      <Text style={{fontSize: 18, fontWeight: '700', color: 'white'}}>
        {children}
      </Text>
      <BuyButton modelo={modelo} />
    </TouchableOpacity>
  );
};

export default Card;
