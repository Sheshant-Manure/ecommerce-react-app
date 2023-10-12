import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    count: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.items = [ ...state.items, action.payload ];
      console.log(state.items);
      state.count = state.count + 1;
    },
    removeFromCart: (state, { payload }) => {
      if(state.count > 0) {
      const itemId = payload.id;
      state.items = state.items.filter((item) => item.id !== itemId);
      state.count = state.count - 1;
      console.log(state.items);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
