/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';
import BuyButton from './BuyButton';

const Card = ({children, item}) => {

  const { modelo, url, id } = item;

  return (
    <TouchableOpacity style={{margin: 20}}>
      <View style={styles.container}>
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
      
      <View style={styles.containerNumber}>
        <Text style={styles.colorNumber}># {id}</Text>
      </View>
      <Text style={styles.description}>{children}</Text>
      <BuyButton modelo={modelo} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10
  },
  description:{
    fontSize: 18, 
    fontWeight: '700', 
    color: 'white', 
    marginVertical: 15
  },
  containerNumber:{
    justifyContent:'center',
    alignItems:'center',
    width: 50,
  },
  colorNumber:{
    fontWeight:'bold',
    fontSize: 20,
    color: 'white',
    backgroundColor: '#d22923',
    borderRadius: 50,
    padding: 10,
  }
})

export default Card;
