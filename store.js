import { createSlice } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';

const toggleSlice = {
    name: 'toggle',
    initialState: {
        plan: 'annually',
        basic: 19.99,
        pro: 24.99,
        master: 39.99,
    },
};
