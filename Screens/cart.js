import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { onLoad, increment } from '../features/counterSlice'

const Cart = () => {

    const cart = useSelector((state) => state.counter.cart)
    const productTotal = useSelector((state) => state.counter.total)

    return (
        <View style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
            <View style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                {cart.length > 0 ? cart?.map((v, i) => <Text key={i}>{v.productName}{' -- '}{v.quantity}{' -- '}{v.productPrice}{' -- '}{v.quantity * v.productPrice}</Text>) : <Text>No Products Selected</Text>}
            </View>
            <View style={{ flex: .5, display: 'flex', justifyContent: 'center', alignItems: 'center', }}><Text>{'Total: ' + productTotal + '/='}</Text></View>
            <View style={{ flex: .3, display: 'flex', justifyContent: 'center', alignItems: 'center', }}><TouchableOpacity style={{ backgroundColor: 'blue', color: 'white', borderRadius: 5, paddingHorizontal: 50, paddingVertical: 10, }}><Text style={{ color: 'white' }}>Checkout</Text></TouchableOpacity></View>
        </View>
    )
}

export default Cart