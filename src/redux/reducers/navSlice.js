import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
    name: 'nav',
    initialState: {
        toggle: true
    },
    reducers: {
        toggleNav: (state, {payload}) => {
            console.log(payload);
            state.toggle = payload;
        }
    }

})

export const { toggleNav } = navSlice.actions;
export default navSlice.reducer;