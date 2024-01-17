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
            >
                {console.log('itemee', item)}
                {/* <Text style={styles.text}>{item.title}</Text> */}
                <Image
                    // source={{ uri: item?.imageSource }}
                    source={{ uri: item?.imageSource }}
                    style={styles.image}
                />

                {/* {item?.map(v => <Image
                    source={{ uri: v?.imageSource }}
                    style={styles.image}
                />)} */}

                {/* {
                    item?.map((v, i) => {
                        <View
                            key={i}
                            style={styles.item}
                        >
                            <Image
                                source={{ uri: v?.imageSource }}
                                style={styles.image}
                            />
                        </View>
                    }
                    )
                } */}

                {/* {this?.props?.products?.products && this?.props?.products?.products?.map(v =>
                    <Image
                        source={{ uri: v.imgUrl }}
                        style={styles.image}
                    />)} */}

                {/* <Image
                    source={{ uri: item?.imageSource }}
                    style={styles.image}
                /> */}
            </View >
        );
    }

    render() {
        // const data = [this?.props?.products?.products?.map(v => ({ imageSource: v?.imgUrl }))]
        const data = this?.props?.products?.products?.map(v => ({ imageSource: v?.imgUrl }))
        // const data = [
        //     // { title: 'Item 1' },
        //     // { title: 'Item 2' },
        //     // { title: 'Item 3' },

        //     // { imageSource: require('./path/to/image1.jpg') },
        //     // { imageSource: require('./path/to/image2.jpg') },
        //     // { imageSource: require('./path/to/image3.jpg') }

        //     { imageSource: 'https://blog.rrc.co.uk/wp-content/uploads/2022/03/shutterstock_274566236.jpg' },
        //     { imageSource: 'https://blog.rrc.co.uk/wp-content/uploads/2022/03/shutterstock_274566236.jpg' },
        //     { imageSource: 'https://blog.rrc.co.uk/wp-content/uploads/2022/03/shutterstock_274566236.jpg' }

        //     // { imageSource: this.props.products.products?.map(v => v.imgUrl) }

        //     // this?.props?.products?.products?.map(v => ({ imageSource: v?.imgUrl }))

        //     // JSON.stringify(this?.props?.products?.products?.map(v => ({ imageSource: v?.imgUrl })))

        // ];

        // console.log('htisprosp', this.props)
        // console.log('htisprosp', this.props.products.products)
        // console.log('htisprosp', {this.props.products.products?.map(v => imageSource:v.imgUrl))}
        // console.log('htisprosp', this.props.products.products?.map(v => v.imgUrl))

        console.log('daataa', data)

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










// import * as React from 'react';

// import Carousel from 'react-native-snap-carousel';

// const { width: screenWidth } = Dimensions.get('window'); // Get the width of the screen

// const sliderWidth = screenWidth;
// const itemWidth = screenWidth - 40; // You can adjust the padding as needed


// export default class App extends React.Component {
//     _renderItem = ({ item, index }) => {
//         return (
//             <View style={styles.item}>
//                 <Text style={styles.text}>{item.title}</Text>
//             </View>
//         );
//     }

//     render() {
//         const data = [
//             { title: 'Item 1' },
//             { title: 'Item 2' },
//             { title: 'Item 3' },
//         ];

//         return (
//             <Carousel
//                 data={data}
//                 renderItem={this._renderItem}
//                 sliderWidth={sliderWidth}
//                 itemWidth={itemWidth}
//             />
//         );
//     }
// }