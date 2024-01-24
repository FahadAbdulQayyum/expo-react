import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductDetail = ({ route }) => {
    const { product } = route.params;
    // const product = { image: 'https://www.freepnglogos.com/uploads/shoes-png/shoes-shoe-png-transparent-shoe-images-pluspng-17.png', title: 'Louis Vuitton', price: 200, description: 'Great and Pride to wear this shoes. Great and Pride to wear this shoes.' }
    console.log('handlee', product)

    return (
        <View style={styles.container}>
            <View
                style={styles.image}
            >
                <Image source={{ uri: product.imgUrl }} style={styles.image} />
            </View>

            <View style={styles.details}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>Price: ${product.price}</Text>
                <Text style={styles.description}>{product.description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
        resizeMode: 'cover',
        borderWidth: 5,
        borderRadius: 100,
    },
    details: {
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    price: {
        fontSize: 18,
        color: 'green',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
    },
});

export default ProductDetail;