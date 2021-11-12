import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Index = ({children, BgColor}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('SpaceX')}
      style={{backgroundColor: BgColor, padding: 20}}>
      <Text style={{color: 'white', fontSize: 20}}>{children} </Text>
    </TouchableOpacity>
  );
};

export default Index;
