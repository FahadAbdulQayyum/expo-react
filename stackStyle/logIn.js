
import * as React from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function LogIn({ navigation }) {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                // width: '90%',
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
                    // returnKeyType='password'
                    secureTextEntry
                    keyboardType='number-pad'
                    style={styles.inpt1}
                />
                <TouchableOpacity
                    style={styles.btn}
                >
                    <Text
                        style={styles.txt}
                    >Submit</Text></TouchableOpacity >
                {/* <Text>Sign Up Screen</Text> */}
                {/* <Button
                    title="Go To Home"
                    onPress={() => navigation.navigate('Home')}
                /> */}
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate('Signup')}
                >
                    <Text
                        style={styles.txt}
                    >Sign Up</Text></TouchableOpacity >
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    inpt: {
        flex: 1,
        // backgroundColor: 'red',
        backgroundColor: '#EEF0E5',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',

    },
    inpt1: {
        // backgroundColor: 'blue',
        // backgroundColor: '#B2A59B',
        backgroundColor: '#DED0B6',
        // marginVertical: '15px',
        marginVertical: 2,
        // marginBottom: '5px',
        width: '90%',
        // padding: '5px',
        paddingHorizontal: 10,
        padding: 5,
        borderRadius: 5,
    },
    btn: {
        backgroundColor: '#607274',
        width: '90%',
        paddingHorizontal: 10,
        padding: 8,
        borderRadius: 5,
        marginTop: 3,
        // textAlign: 'center',
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt: {
        color: 'white',
    }
})
