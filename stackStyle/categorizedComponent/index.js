import React from 'react'
import { View, Text, Image } from 'react-native'
import ProductCard from '../../productCard'

const CategorizedComponent = ({ categorized, filterBy }) => {
    // const productCategorized = categorized && categorized[0]?.filter(v => v.productCategory === filterBy)
    const productCategorized = categorized && categorized?.products?.filter(v => v.productCategory === filterBy)
    return (
        <View
            style={{
                display: 'flex',
                justifyContent: 'center',
                // justifyContent: 'space-between',
                // alignItems: 'center',
                flexDirection: 'row',
                width: '100%',
                // backgroundColor: 'purple',
                height: 70,
            }}
        >
            {productCategorized?.map((v, i) =>
            // <View
            //     style={{
            //         flex: 1,
            //         height: 100,
            //         display: 'flex',
            //         flexDirection: 'column',
            //         // justifyContent: 'center',
            //     }}
            //     key={i}
            // >
            //     <Text
            //         style={{ width: 100, fontSize: 8, textAlign: 'center', }}
            //     >
            //         {v?.productName}
            //     </Text>
            //     <View
            //         style={styles.image}
            //     >
            //         <Image
            //             source={{ uri: v?.imgUrl }}
            //             style={{ height: '100%' }}
            //         />
            //     </View>
            // </View>

            (
                <View
                    style={{
                        height: 100,
                        // backgroundColor: 'red',
                        // padding: 5,
                        display: 'flex', flexDirection: 'column', alignItems: 'center',
                        flex: 1,
                        marginVertical: 5,
                    }}
                    key={i}
                >
                    <ProductCard key={i} product={v} />
                </View>

            )
            )
            }
            {/* // onPress={() => navigation.navigate('Signup')} */}
        </View >

    )
}

export default CategorizedComponent


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
        // width: '105%',
        // width: '40%',
        height: '50%',
        // resizeMode: 'cover',
        borderRadius: 50,
        // borderWidth: 2,
        // borderColor: 'red',
    },
};