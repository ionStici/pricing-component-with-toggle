import { createSlice } from '@reduxjs/toolkit';

const options = {
    name: 'toggle',
    initialState: {
        plan: 'Annually',

        basic: {
            price: 19.99,
            title: 'Basic',
            list: ['500 GB Storage', '2 Users Allowed', 'Send up to 3 GB'],
        },

        pro: {
            price: 24.99,
            title: 'Professional',
            list: ['1 TB Storage', '5 Users Allowed', 'Send up to 10 GB'],
        },

        master: {
            price: 39.99,
            title: 'Master',
            list: ['2 TB Storage', '10 Users Allowed', 'Send up to 20 GB'],
        },
    },

    reducers: {
        toggleAnnually: (state, action) => {
            state.plan = 'Annually';
            state.basic.price = 19.99;
            state.pro.price = 24.99;
            state.master.price = 39.99;
        },

        toggleMonthly: (state, action) => {
            state.plan = 'Monthly';
            state.basic.price = 199.99;
            state.pro.price = 249.99;
            state.master.price = 399.99;
        },
    },
};

const toggleSlice = createSlice(options);

export const { toggleAnnually, toggleMonthly } = toggleSlice.actions;

export default toggleSlice.reducer;
