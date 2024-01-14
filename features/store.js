import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        // Add other reducers here if needed
    },
    middleware: getDefaultMiddleware => {
        if (process.env.NODE_ENV !== 'production') {
            return getDefaultMiddleware({
                serializableCheck: false,
            });
        }
        return getDefaultMiddleware();
    },
});

export default store;



//=================


// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

// import { configureStore } from '@reduxjs/toolkit';
// // import counterReducer from './features/counterSlice';
// import counterReducer from './counterSlice';

// const store = configureStore({
//     reducer: {
//         counter: counterReducer,
//         // Add other reducers here if needed
//     },
// });

// export default store;




//======================


// import { configureStore } from '@reduxjs/toolkit';

// // import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

// import counterReducer from './counterSlice';

// const store = configureStore({
//     reducer: {
//         counter: counterReducer
//         // Add other reducers here if needed
//     },
// });

// export default store;