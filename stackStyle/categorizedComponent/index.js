import React from 'react'
import { View, Text, Image } from 'react-native'

const CategorizedComponent = ({ categorized, filterBy }) => {
    // const productCategorized = categorized && categorized[0]?.filter(v => v.productCategory === filterBy)
    const productCategorized = categorized && categorized?.products?.filter(v => v.productCategory === filterBy)
    return (
        <View>
            {productCategorized?.map((v, i) =>
                <View
                    // style={{ flex: 1, height: 100 }}
                    key={i}
                >
                    <Text>
                        {v?.productName}
                    </Text>
                    <Image
                        source={{ uri: v?.imgUrl }}
                        style={styles.image}
                    />
                </View>
            )
            }
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
        // width: '50%',
        height: '50%',
        resizeMode: 'cover',
        borderRadius: 50,
    },
};