import React, {createContext, useContext} from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import Cart from './src/screens/Cart';
import ProductDetails from './src/screens/ProductDetails';
import ProductDetailsRandM from './src/screens/ProductDetailsRandM';
import Camera from './src/screens/Camera';
import Context from './src/Context';

import SpaceX from './src/screens/SpaceX';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client';

const Stack = createNativeStackNavigator();

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <Context>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Camera" component={Camera} />

            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="SpaceX" component={SpaceX} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
            <Stack.Screen
              name="ProductDetailsRandM"
              component={ProductDetailsRandM}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    </Context>
  );
};

export default App;
