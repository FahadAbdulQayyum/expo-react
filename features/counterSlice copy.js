import { createSlice } from '@reduxjs/toolkit';

import { getData, storeData } from './storage';
import { useNavigation } from '@react-navigation/native';

// const navigation = useNavigation()

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
            // LoadUser: (state) => {
            console.log("--- loadedUserr ---");
            try {
                const loadedUser = await getData('user') || {}
                // const loadedUser = getData('user') || {}
                console.log("loadedUserr", loadedUser);

                // verify(loadedUser)
                let res = await fetch('https://hackathon-seven-sandy.vercel.app/api/auth/middleware', {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        // 'Content-Type': 'application/json',
                        'x-auth-token': loadedUser
                        // 'x-auth-token': tokenExist
                    },
                });
                res = await res.json()
                console.log('verifyy res', res)

                // if (res.success) {
                //     // navigation.navigate('Home')
                // }
                // if (!res.success) {
                //     await storeData('user', '')
                // }

                if (res.success) {
                    // navigation.navigate('Home')
                    return {
                        ...state,
                        userInfo: res,
                        success: true, // Add success status to the returned object
                    };
                } else {
                    // If verification fails, you might want to clear the user data
                    await storeData('user', '');
                    return {
                        ...state,
                        userInfo: null,
                        success: false, // Add success status to the returned object
                    };
                }

                // return {
                //     ...state,
                //     // userInfo: loadedUser,
                //     userInfo: res,
                // };
            } catch (err) {
                // Handle errors if needed
                console.error('Error in LoadUser:', err);
                return {
                    ...state,
                    userInfo: null,
                    success: false, // Add success status to the returned object
                };
            }
        },
        // verify: async (tokenExist) => {
        verify: async (state, action) => {

            // console.log('tokenExist', tokenExist);
            console.log('tokenExist', action.payload);

            // const tokenExist = localStorage.getItem('token');
            let res = await fetch('https://hackathon-seven-sandy.vercel.app/api/auth/middleware', {
                method: 'GET',
                headers: {
                    // Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'x-auth-token': tokenExist
                },
            });
            // const res = await axios.get('/api/auth/middleware', {
            //     headers: {
            //         'x-auth-token': tokenExist
            //     }
            // })

            res = await res.json()

            const admin = res.data.isAdmin
            // email = res.data.email
            // console.log('adminn', admin, email)
            console.log('adminn', admin)
            // if (!admin) {
            //     router.replace('/')
            //     // router.replace('/auth/login')
            // }
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
            // return newState

            // return await storeData('user', action.payload)

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
