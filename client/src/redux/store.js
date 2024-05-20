import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'


// creating a store and exporting it  

export const store = configureStore({

    reducer: { user: userReducer },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({

        serializableCheck: false,

    }),

});