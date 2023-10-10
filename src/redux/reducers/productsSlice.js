import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;  // The payload will be the data fetched from the API
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
