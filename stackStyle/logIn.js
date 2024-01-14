
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useSelector, useDispatch } from 'react-redux';
import { addUser, LoadUser } from '../features/counterSlice';
import { getData, removeData } from '../features/storage';


export default function LogIn({ navigation }) {

    const navigationn = useNavigation();
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { userInfo } = useSelector((state) => state.counter);

    useEffect(() => {
        const dataFetch = async () => {
            // const dataFetch = () => {
            const userToken = await getData('user') || {}
            // const data = getData('user') || {}
            let res = await fetch('https://hackathon-seven-sandy.vercel.app/api/auth/middleware', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'x-auth-token': userToken
                },
            });
            res = await res.json()
            console.log('verifyy res', res)

            if (res.success) {
                return navigation.navigate('Home')
            }

            // await storeData('user', '');
            await removeData('user')

            return navigation.navigate('Login')

        }

        dataFetch()

        // const removeIt = async () => {
        //     await removeData('user')
        // }
        // removeIt()
    }, [])

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
            return navigationn.navigate('Home');
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
