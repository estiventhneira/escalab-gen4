/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

const buyButton = ({modelo}) => {
  return (
    <View
      style={{
        backgroundColor: '#d22923',
        padding: 10,
        marginVertical: 15,
        borderRadius: 5,
        width: '40%',
      }}>
      <Text style={{color: 'white', fontSize: 18, fontWeight: '700'}}>
        {modelo}
      </Text>
    </View>
  );
};

export default buyButton;
