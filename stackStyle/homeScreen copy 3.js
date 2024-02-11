import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import CarouselFahad from './carouselfahad';
import CategorizedComponent from './categorizedComponent';

export default function HomeScreen({ navigation }) {
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        const fetchProducts = async () => {
            try {
                let res = await fetch('https://hackathon-seven-sandy.vercel.app/api/products', {
                    method: 'GET',
                });
                res = await res.json();
                setProducts(res);
                // console.log('res products', res);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent} style={styles.scrollView}>
            <View style={styles.container}>
                <CarouselFahad products={products} />

                <View style={styles.categorizedContainer}>
                    <CategorizedComponent categorized={products} filterBy='sweet' />
                    <CategorizedComponent categorized={products} filterBy='vegetable' />
                    <CategorizedComponent categorized={products} filterBy='fruit' />
                </View>

            </View>
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,  // Allow the ScrollView to take up the full available height
        height: 100,
    },
    scrollViewContent: {
        flexGrow: 1,
        alignItems: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    categorizedContainer: {
        flex: 1,
        backgroundColor: 'orange',
        width: '95%',
        marginVertical: 5,
    },
});










// import * as React from 'react';
// import { View, Text, TouchableOpacity, Button, StyleSheet, ScrollView } from 'react-native';

// import CarouselFahad from './carouselfahad';
// import CategorizedComponent from './categorizedComponent';

// export default function HomeScreen({ navigation }) {

//     const [products, setProducts] = React.useState([])


//     React.useEffect(() => {
//         const fetchProducts = async () => {
//             let res = await fetch('https://hackathon-seven-sandy.vercel.app/api/products', {
//                 method: 'GET',
//             });
//             res = await res.json()
//             setProducts(res)
//             console.log('res proudcts', res)
//         }
//         fetchProducts()
//     }, [])


//     return (
//         <ScrollView>

//             <View style={{
//                 flex: 1,
//                 alignItems: 'center',
//             }}>
//                 <CarouselFahad products={products} />
//                 <ScrollView>
//                     <View
//                         style={{
//                             flex: 1,
//                             backgroundColor: 'orange',
//                             height: 10,
//                             width: '95%',
//                             marginVertical: 5,
//                         }}
//                     >
//                         <CategorizedComponent
//                             style={{
//                                 flex: 1
//                             }}
//                             categorized={products}
//                             filterBy='sweet'
//                         />
//                         <CategorizedComponent
//                             style={{
//                                 flex: 1
//                             }}
//                             categorized={products}
//                             filterBy='vegetable'
//                         />
//                         <CategorizedComponent
//                             style={{
//                                 flex: 1
//                             }}
//                             categorized={products}
//                             filterBy='fruit'
//                         />
//                     </View>
//                 </ScrollView>
//             </View>
//         </ScrollView>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: 'black',
//     },
// });
