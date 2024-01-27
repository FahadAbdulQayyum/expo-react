import React from 'react'
import { View, Text, Button, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../stackStyle/homeScreen'
import SignUp from '../stackStyle/signUp'
import LogIn from '../stackStyle/logIn';

import { useSelector, useDispatch } from 'react-redux'

import { onLoad } from '../features/counterSlice'
import ProductDetail from '../productDetail';

const Stack = createNativeStackNavigator();

const Screens = () => {

    // const count = useSelector((state) => state.counter.Products)
    const userInfo = useSelector((state) => state.counter.userInfo)
    const dispatch = useDispatch()

    console.log('userInfooo', userInfo)
    console.log('userInfooo', Boolean(userInfo))

    return (
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
                                // onPress={() => navigation.navigate('Signup')}
                                onPress={() => Boolean(userInfo) ? navigation.navigate('Login') : navigation.navigate('Signin')
                                }
                                // title="Signup"
                                title={!Boolean(userInfo) ? "Signup" : "Logout"}
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
                {/* <Stack.Screen name="ProductDetail" component={ProductDetail} options={{
                    headerShown: false
                }}
                /> */}

                <Stack.Screen name="ProductDetail" component={ProductDetail}
                    options={({ navigation }) => ({
                        title: 'Product Detail',
                        headerStyle: {
                            backgroundColor: '#f4511e',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        headerRight: () => (
                            <Button
                                // onPress={() => navigation.navigate('Signup')}
                                onPress={() => Boolean(userInfo) ? navigation.navigate('Login') : navigation.navigate('Signin')
                                }
                                // title="Signup"
                                title={!Boolean(userInfo) ? "Signup" : `Total: $${1}`}
                                color='#f4511e'
                            />
                        ),
                    })}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Screens