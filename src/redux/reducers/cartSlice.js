import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        count: 0,
    },
    reducers: {
        addToCart: (state, { payload }) => {
            state.items = [ ...state.items, payload ];
            state.count = state.count + 1;
        },
        removeFromCart: (state, payload) => {
            const { id: itemId } = payload.id;
            state.items = state.items.filter((item)=>(item.id !== itemId));
            state.count = state.count - 1;
        }
    }
});

export default cartSlice.reducer;