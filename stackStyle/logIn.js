
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useSelector, useDispatch } from 'react-redux';
import { addUser, LoadUser } from '../features/counterSlice';
import { getData } from '../features/storage';


export default function LogIn({ navigation }) {

    const navigationn = useNavigation();
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { userInfo } = useSelector((state) => state.counter);

    useEffect(() => {
        console.log('useEffect running');

        // dispatch(LoadUser())

        // const fetchData = async () => {
        // async function fetchData() {
        //     console.log('useEffect running');

        //     try {
        //         const data = await dispatch(LoadUser());

        //         console.log('|||dataaaa||||', data)

        //         if (data.success) {
        //             navigation.navigate('Home');
        //         }
        //     } catch (error) {
        //         // Handle errors if necessary
        //         console.error('Error fetching data:', error);
        //     }
        // };

        // fetchData();

        const dataFetch = async () => {
            // const dataFetch = () => {
            const data = await getData('user') || {}
            // const data = getData('user') || {}
            console.log('dataaaa', data)
        }
        dataFetch()
        // console.log('fetchData --- ', dataFetch)

        // const res = dispatch(LoadUser())
        // userInfo && console.log('userInfoooo---', userInfo);
        // console.log('userInfoooo---', res, userInfo);

        // const dispatchUser = async () => {
        //     try {
        //         const res = await dispatch(LoadUser())
        //         // const res = dispatch(LoadUser())
        //         console.log('resss', res);
        //     } catch (err) {

        //     }
        // }
        // dispatchUser()

        // const remove = async () => {
        //     await AsyncStorage.removeItem('user');
        // }
        // remove()

    }, [])

    // useEffect(() => {
    //     console.log('userInfooooooo,,,', userInfo)

    //     // Check if user information is loaded successfully
    //     // if (userInfo.length > 0) {
    //     // if (userInfo) {
    //     if (userInfo?.success) {
    //         console.log('userIn', userInfo)
    //         // Redirect to the home page using the navigation prop
    //         navigationn.navigate('Home');
    //     }

    //     // }, [userInfo?.success]);
    // }, [userInfo]);


    const sendData = async () => {

        console.log('email:', email, 'password:', password)

        const data = await fetch('https://hackathon-seven-sandy.vercel.app/api/auth/login', {
            method: 'POST',
            headers: {
                // Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email, password,
            }),
        });
        const datajson = await data.json()
        console.log('data', data)
        console.log('datajson', datajson)

        if (datajson.success) {
            console.log('userInfooo', userInfo);
            dispatch(addUser(datajson.token))
            // navigationn.navigate('Home');
        }
    }

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <View
                style={styles.inpt}
            >
                <Text>Log In</Text>
                <TextInput
                    placeholder='Enter your Email'
                    textContentType='username'
                    keyboardType='email-address'
                    style={styles.inpt1}
                    value={email}
                    // onChange={e => setEmail(e.target.value)}
                    onChangeText={e => setEmail(e)}
                // onChangeText={e => console.log('setEmail(e.target.value)', e)}
                />
                <TextInput
                    placeholder='Enter your password'
                    textContentType='password'
                    secureTextEntry
                    keyboardType='number-pad'
                    style={styles.inpt1}
                    value={password}
                    // onChangeText={e => setPassword(e.target.value)}
                    onChangeText={e => setPassword(e)}
                />
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => sendData()}
                >
                    <Text
                        style={styles.txt}
                    >Submit</Text></TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('ProductDetail')}
                >
                    <Text
                        style={{ ...styles.txt, ...styles.txt1 }}
                    >Go to Product Detail Screen</Text></TouchableOpacity>
            </View>
            <View
                style={{ ...styles.inpt, ...styles.inpt2, ...styles.inpt3 }}
            >
                <View
                    style={{ flex: 1, flexDirection: 'row' }}
                >
                    <Text>Haven't you registered yet?&nbsp;</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Signup')}
                    >
                        <Text
                            style={{ ...styles.txt, ...styles.txt1 }}
                        >Sign Up</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    inpt: {
        flex: 1,
        backgroundColor: '#EEF0E5',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',

    },
    inpt1: {
        backgroundColor: '#DED0B6',
        marginVertical: 2,
        width: '90%',
        paddingHorizontal: 10,
        padding: 5,
        borderRadius: 5,
    },
    inpt2: {
        flex: .1,
        backgroundColor: '#DED0B6',
        marginVertical: 2,
        width: '90%',
        paddingHorizontal: 10,
        padding: 5,
        borderRadius: 5,
    },
    inpt3: {
        backgroundColor: '',
    },
    btn: {
        backgroundColor: '#607274',
        width: '90%',
        paddingHorizontal: 10,
        padding: 8,
        borderRadius: 5,
        marginTop: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt: {
        color: 'white',
    },
    txt1: {
        color: 'red',
    },
})
