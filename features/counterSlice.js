import { createSlice } from '@reduxjs/toolkit';

import { getData, storeData } from './storage';
import { useNavigation } from '@react-navigation/native';

// const navigation = useNavigation()

export const saveUser = async () => {
    await storeData('user', action.payload)

}

const counterSlice = createSlice({
    name: 'counter',
    // initialState: { products: JSON.parse(sessionStorage.getItem('pd')) !== null ? JSON.parse(sessionStorage.getItem('pd')) : [] },
    initialState: { userInfo: {}, products: [], cart: [], total: 0 },

    reducers: {
        onLoad: (state, action) => {
            // const loadedProducts = JSON.parse(sessionStorage.getItem('pd')) || [];
            const loadedProducts = getData('pd') || [];
            return {
                ...state,
                products: loadedProducts,
            };
        },
        LoadUser: async (state) => {
            const loadedUser = await getData('user') || {}
            // const loadedUser = getData('user') || {}
            console.log('****', loadedUser);
            return loadedUser;
        },
        // addUser: async (state, action) => {
        addUser: (state, action) => {
            console.log('state uuser', state, action.payload)
            // try {
            storeData('user', action.payload)
            // await storeData('user', action.payload)

            const newState = {
                ...state,
                userInfo: action.payload,
            };
            return newState

            // } catch(err) {
            //     return state;
            // }
        },

        increment: (state, action) => {
            // (state.products.length > 0 && !(state.products.filter(v => v._id === action.payload._id).length === 0)) ? state.products.find(v => v._id === action.payload._id).quantity += 1 : state.products.push(action.payload)
            // // sessionStorage.setItem('pd', JSON.stringify(state.products))
            // storeData(state.products)

            const doesExist = state.cart.filter(v => v._id === action.payload._id)
            // const doesExist = state.cart.filter(v => console.log('&&&&', v._id === action.payload._id, v._id, action.payload._id))
            console.log('doesExist', doesExist.length)
            if (doesExist.length > 0) {
                let updatedArr = state.cart.map(v => {
                    console.log('&&&&||', v._id === action.payload._id, v._id, action.payload._id)
                    if (v._id === action.payload._id) {
                        console.log('***||||****')
                        return { ...v, quantity: v.quantity + 1 }
                    }
                    return { ...v }
                })
                state.cart.push(...updatedArr)
                // return state.cart.push(...updatedArr)
            }
            else {
                state.cart.push(action.payload)
                console.log('state.carttt', state.cart)
            }

            // state.cart.push(action.payload)
            console.log('**********', action, "::::", state.cart)
            // console.log('||TOTAL||', state.cart.reduce((a, b) => b + a.productPrice), 0)
        },
        decrement: (state, action) => {
            (state.products.length > 0 && !(state.products.filter(v => v._id === action.payload._id).length === 0)) ? state.products.find(v => v._id === action.payload._id).quantity -= 1 : state.products.push(action.payload)
            // sessionStorage.setItem('pd', JSON.stringify(state.products))
            storeData(state.products)
        },
        removeProduct: (state, action) => {
            console.log('action||', action)
            state.products = state.products.filter(v => v._id !== action.payload._id)
            console.log('state.products.filter(v => v._id !== action.payload._id)||', state.products.filter(v => v._id !== action.payload._id))
            console.log('state.products||', state.products)
            // sessionStorage.setItem('pd', JSON.stringify(state.products))
            storeData(state.products)
        }
    },
});

export const { onLoad, LoadUser, verify, increment, decrement, removeProduct, addUser } = counterSlice.actions;
export default counterSlice.reducer;
