import React from 'react';
import {SafeAreaView} from 'react-native';

import Home from './src/screens/Home';

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#2d2e32', flex: 1}}>
      <Home />
    </SafeAreaView>
  );
};

export default App;
