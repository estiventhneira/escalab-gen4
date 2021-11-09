/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const buyButton = ({modelo}) => {
  return (
    <View style={{paddingHorizontal: 25}}>
      <TouchableOpacity
        style={{
          backgroundColor: '#d22923',
          padding: 10,
          marginVertical: 15,
          borderRadius: 5,
          width: '40%',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            fontWeight: '700',
          }}>
          {modelo}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default buyButton;
