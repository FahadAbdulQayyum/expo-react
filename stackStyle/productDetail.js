import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductDetailScreen = ({ route }) => {
    // const { product } = route.params;
    const product = { image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nike.com%2Fin%2Ft%2Fin-season-tr-13-workout-shoes-BDTlPf&psig=AOvVaw3f63D3o8KCGqZvBoxDZetl&ust=1703192461419000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJDC6cL0noMDFQAAAAAdAAAAABAD', title: 'Fahad', price: 200, description: 'Hello Im fahads' }
    return (
        <View style={styles.container}>
            <Image source={{ uri: product.image }} style={styles.image} />
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

export default ProductDetailScreen;