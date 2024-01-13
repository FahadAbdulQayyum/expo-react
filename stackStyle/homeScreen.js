import { ViewPropTypes } from 'deprecated-react-native-prop-types';

import * as React from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';

import AnimatedDotsCarousel from 'react-native-animated-dots-carousel';

const LENGTH = 10;

import CarouselCards from './carouselCard';
import CarouselFahad from './carouselfahad';

export default function HomeScreen({ navigation }) {

    // const [index, setIndex] = React.useState(0)

    // const increaseIndex = () => {
    //     setIndex(Math.min(index + 1, LENGTH - 1));
    // };
    // const decreaseIndex = () => {
    //     setIndex(Math.max(index - 1, 0));
    // };

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            // justifyContent: 'center'
            // justifyContent: 'space-between',
            // justifyContent: 'space-around',
        }}>

            {/* <CarouselCards /> */}
            <CarouselFahad />

            {/* <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'red',
                    height: 10,
                    // width: 10,
                    width: '95%',
                    // marginVertical: 5,
                    marginTop: 5,
                }}
            >
                <CarouselCards />
            </View> */}

            <View
                style={{
                    flex: 1,
                    backgroundColor: 'orange',
                    height: 10,
                    // width: '100%',
                    width: '95%',
                    marginVertical: 5,
                }}
            >
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
});
