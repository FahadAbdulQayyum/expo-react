// use this command to run this app -> 'npx expo start --tunnel'

import * as React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './stackStyle/homeScreen'
import SignUp from './stackStyle/signUp'
import LogIn from './stackStyle/logIn';
import ProductDetailScreen from './stackStyle/productDetail';

import { Provider } from 'react-redux';
import store from './features/store';

import Screen from './Screens'

const Stack = createNativeStackNavigator();


function App() {
  return (
    <Provider store={store}>
      <Screen />
    </Provider>
  );
}

export default App;