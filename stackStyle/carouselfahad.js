import * as React from 'react';
import { View, Text, Dimensions, Image } from 'react-native'; // Import Dimensions

import Carousel from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window'); // Get the width of the screen

const sliderWidth = screenWidth;
const itemWidth = screenWidth - 40; // You can adjust the padding as needed

export default class App extends React.Component {
    _renderItem = ({ item, index }) => {
        return (
            <View
                style={styles.item}
                key={index}
            >
                {/* {console.log('itemee', item)} */}
                <Image
                    source={{ uri: item?.imageSource }}
                    style={styles.image}
                />
            </View>
        );
    }

    render() {
        const products = this.props.products?.products || []; // Ensure products is not undefined
        const data = products.map(v => ({ imageSource: v?.imgUrl }));
        return (
            <Carousel
                data={data}
                renderItem={this._renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}

                autoplay={true} // Enable autoplay
                autoplayInterval={2000} // Set the interval between slides (in milliseconds)
                loop={true} // Enable infinite loop
            />
        );
    }
}

const styles = {
    item: {
        flex: 1,
        // flex: .5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2196F3',
    },
    text: {
        color: 'white',
        fontSize: 18,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 8,
    },
};