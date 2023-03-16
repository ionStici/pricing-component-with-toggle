import { createSlice } from '@reduxjs/toolkit';

const options = {
    name: 'toggle',
    initialState: {
        plan: 'Annually',
        basic: 19.99,
        pro: 24.99,
        master: 39.99,
    },

    reducers: {
        toggleAnnually: (state, action) => {
            return {
                plan: 'Annually',
                basic: 19.99,
                pro: 24.99,
                master: 39.99,
            };
        },

        toggleMonthly: (state, action) => {
            return {
                plan: 'Monthly',
                basic: 199.99,
                pro: 249.99,
                master: 399.99,
            };
        },
    },
};

const toggleSlice = createSlice(options);

export const { toggleAnnually, toggleMonthly } = toggleSlice.actions;

export default toggleSlice.reducer;
