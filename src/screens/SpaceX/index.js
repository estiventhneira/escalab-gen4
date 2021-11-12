import React, {useState, useEffect} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import axios from 'axios';

const index = () => {
  const [rockets, setRockets] = useState({});

  useEffect(() => {
    axios
      .get('https://api.spacexdata.com/latest/rockets')
      .then(e => setRockets(e.data));
  }, []);

  console.log(rockets);

  return (
    <ScrollView>
      <Text>Screen de Space X</Text>
      {rockets.map(item => {
        return (
          <View>
            <Image
              source={{uri: item.flickr_images[0]}}
              style={{height: 300, width: 300}}
            />
            <Text>{item.name}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default index;
