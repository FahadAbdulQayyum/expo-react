
import * as React from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function LogIn({ navigation }) {
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
                />
                <TextInput
                    placeholder='Enter your password'
                    textContentType='password'
                    secureTextEntry
                    keyboardType='number-pad'
                    style={styles.inpt1}
                />
                <TouchableOpacity
                    style={styles.btn}
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
