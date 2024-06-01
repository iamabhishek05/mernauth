import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


// creating a store and exporting it

const rootreducer = combineReducers({ user: userReducer });

const persistConfig = {

    key: 'root',
    version: 1,
    storage

}

const persistedReducer = persistReducer(persistConfig, rootreducer)

export const store = configureStore({

    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({

        serializableCheck: false,

    }),

});


export const persistor = persistStore(store); 