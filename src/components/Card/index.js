/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, Image, View} from 'react-native';
import BuyButton from './BuyButton';
import {useNavigation} from '@react-navigation/native';

const Card = ({children, url, modelo, id}) => {
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ProductDetails', {id});
        }}
        style={{margin: 20}}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={{uri: url}}
            style={{
              height: 200,
              width: '100%',
              marginVertical: 15,
              borderRadius: 10,
            }}
          />
        </View>
        <Text style={{fontSize: 18, fontWeight: '700', color: 'white'}}>
          {children}
        </Text>
      </TouchableOpacity>
      <BuyButton modelo={modelo} />
    </>
  );
};

export default Card;
