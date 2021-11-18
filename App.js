import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import Cart from './src/screens/Cart';
import ProductDetails from './src/screens/ProductDetails';
import SpaceX from './src/screens/SpaceX';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

const MainStack = createNativeStackNavigator();

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <MainStack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}>
          <MainStack.Screen name="Home" component={Home} />
          <MainStack.Screen name="Cart" component={Cart} />
          <MainStack.Screen name="SpaceX" component={SpaceX} />
          <MainStack.Screen name="ProductDetails" component={ProductDetails} />
        </MainStack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
