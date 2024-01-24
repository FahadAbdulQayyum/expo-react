import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProductCard = ({ product }) => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('ProductDetail', { product });
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.item}>
                <Text style={styles.text}>{product.productName}</Text>
                <View style={styles.image}>
                    <Image source={{ uri: product?.imgUrl }} style={{ height: '100%' }} />
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = {
    item: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#2196F3',
        height: 100,
        width: '100%',
        //         flex: 1,
        //         height: 100,
        //         display: 'flex',
        //         flexDirection: 'column',
        //         // justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 18,
    },
    image: {
        // flex: 1,
        // height: '100%',
        height: 100,
        borderRadius: 50,
    },
};

export default ProductCard;