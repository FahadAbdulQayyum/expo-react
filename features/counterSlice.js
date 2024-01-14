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
    initialState: { userInfo: {}, products: [] },

    reducers: {
        onLoad: (state, action) => {
            // const loadedProducts = JSON.parse(sessionStorage.getItem('pd')) || [];
            const loadedProducts = getData() || [];
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
            (state.products.length > 0 && !(state.products.filter(v => v._id === action.payload._id).length === 0)) ? state.products.find(v => v._id === action.payload._id).quantity += 1 : state.products.push(action.payload)
            // sessionStorage.setItem('pd', JSON.stringify(state.products))
            storeData(state.products)
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
