
import * as React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go To Sign Up"
                onPress={() => navigation.navigate('Signup')}
            ><Text>SignUp</Text></Button>

            {/* <TouchableOpacity
                onPress={() => navigation.navigate('signUp')}
            ><Text>SignUp</Text></TouchableOpacity> */}
        </View>
    );
}
