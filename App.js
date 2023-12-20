// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './stackStyle/homeScreen'
import SignUp from './stackStyle/signUp'
import LogIn from './stackStyle/logIn';
import ProductDetailScreen from './stackStyle/productDetail';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}
          options={{
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
                onPress={() => alert('This is a button!')}
                title="Info"
                // color="#fff"
                color='#f4511e'
              />
            ),
          }}

        />
        {/* <Stack.Screen name="Signup" component={SignUp} options={{ headerShown: false }} /> //Header hidden */}
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
  );
}

export default App;
















// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';

// export default function App() {
//   return (
//     <NavigationContainer>
//       {/* Rest of your app code */}
//     </NavigationContainer>
//   );
// }











// // import * as React from 'react';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // // const App = () => {
// // //   return (
// // //     <NavigationContainer>
// // //       <Stack.Navigator>
// // //         <Stack.Screen
// // //           name="Home"
// // //           component={HomeScreen}
// // //           options={{ title: 'Welcome' }}
// // //         />
// // //         <Stack.Screen name="Profile" component={ProfileScreen} />
// // //       </Stack.Navigator>
// // //     </NavigationContainer>
// // //   );
// // // };

// // const Stack = createNativeStackNavigator();

// // // const MyStack = () => {
// // const App = () => {
// //   return (
// //     <NavigationContainer>
// //       <Stack.Navigator>
// //         <Stack.Screen
// //           name="Home"
// //           component={HomeScreen}
// //           options={{ title: 'Welcome' }}
// //         />
// //         <Stack.Screen name="Profile" component={ProfileScreen} />
// //       </Stack.Navigator>
// //     </NavigationContainer>
// //   );
// // };

// // const HomeScreen = ({ navigation }) => {
// //   return (
// //     <Button
// //       title="Go to Jane's profile"
// //       onPress={() =>
// //         navigation.navigate('Profile', { name: 'Jane' })
// //       }
// //     />
// //   );
// // };
// // const ProfileScreen = ({ navigation, route }) => {
// //   return <Text>This is {route.params.name}'s profile</Text>;
// // };

// // export default App;