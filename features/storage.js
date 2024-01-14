import AsyncStorage from '@react-native-async-storage/async-storage';

// export const storeData = async (value) => {
//     try {
//         await AsyncStorage.setItem('my-key', value);
//     } catch (e) {
//         // saving error
//     }
// };

export const storeData = async (key, value) => {
    try {
        console.log('storeData key', key, 'storeData value', value);
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        // saving error
    }
};


export const getData = async (key) => {
    try {
        console.log('getData key', key);
        const jsonValue = await AsyncStorage.getItem(key);
        // console.log('jsonValue---', jsonValue)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
        // return jsonValue
        // return jsonValue != null ? jsonValue : null;
    } catch (e) {
        // error reading value
    }
};

export const removeData = async (key) => {
    try {

        await AsyncStorage.removeItem(key);
    } catch (e) {
        // error reading value
    }
};

