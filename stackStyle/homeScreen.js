import * as React from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';

import CarouselFahad from './carouselfahad';
import CategorizedComponent from './categorizedComponent';

export default function HomeScreen({ navigation }) {

    const [products, setProducts] = React.useState([])


    React.useEffect(() => {
        const fetchProducts = async () => {
            let res = await fetch('https://hackathon-seven-sandy.vercel.app/api/products', {
                method: 'GET',
            });
            res = await res.json()
            setProducts(res)
            console.log('res proudcts', res)
        }
        fetchProducts()
    }, [])


    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
        }}>

            <CarouselFahad products={products} />

            <View
                style={{
                    flex: 1,
                    backgroundColor: 'orange',
                    height: 10,
                    width: '95%',
                    marginVertical: 5,
                }}
            >
                <CategorizedComponent
                    // categorized={products && [products]?.filter(v => v.category === 'sweet')}
                    categorized={products}
                    filterBy='sweet'
                />
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
