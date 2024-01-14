// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './stackStyle/homeScreen'
import SignUp from './stackStyle/signUp'
import LogIn from './stackStyle/logIn';
import ProductDetailScreen from './stackStyle/productDetail';

import { Provider } from 'react-redux';
import store from './features/store';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Home" component={HomeScreen}
            options={({ navigation }) => ({
              title: 'My home',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerRight: () => (
                <Button
                  onPress={() => navigation.navigate('Signup')}
                  title="Signup"
                  color='#f4511e'
                />
              ),
            })}

          />
          <Stack.Screen name="Signup" component={SignUp} options={{
            headerShown: false
          }}
          />
          <Stack.Screen name="Login" component={LogIn} options={{
            headerShown: false
          }}
          />
          <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{
            headerShown: false
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;