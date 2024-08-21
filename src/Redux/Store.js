import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import logger from 'redux-logger';
import { Reducer } from './Reducer';

const Store = configureStore({
    reducer: {
        item: Reducer 
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(thunk, logger)
});

export default Store;
