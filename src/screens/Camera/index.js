import React, {useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const index = () => {
  const [state, setState] = useState({});

  console.log(state);
  return (
    <SafeAreaView>
      <Text>Camara</Text>

      {state.uri ? (
        <Image source={{uri: state.uri}} style={{height: 500, width: 500}} />
      ) : null}

      <TouchableOpacity
        style={{
          backgroundColor: 'black',
          padding: 7,
          borderRadius: 5,
          margin: 10,
        }}
        onPress={async () => {
          return launchImageLibrary(
            {
              cameraType: 'front',
              saveToPhotos: true,
            },
            response => {
              console.log(response);
              if (response.didCancel) {
                console.log('el usuario cancelo');
                return;
              }
              if (response.assets[0].uri) {
                const uri = response.assets[0].uri;
                setState({...state, uri});
              }
            },
          );
        }}>
        <Text style={{fontSize: 25, color: 'white'}}>Tomar una foto</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default index;
