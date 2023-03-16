import { configureStore } from '@reduxjs/toolkit';
import toggleReducer from './toggleSlice';

const store = configureStore({
    reducer: {
        toggle: toggleReducer,
    },
});

export default store;

export const state = store.getState();
export const toggleState = store.getState().toggle;

export const dispatch = store.dispatch;
export const subscribe = store.subscribe;
