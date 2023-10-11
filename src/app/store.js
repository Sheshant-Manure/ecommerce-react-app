import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../redux/reducers/productsSlice'
import cartReducer from '../redux/reducers/cartSlice';


const store = configureStore({
  reducer: {
    productsReducer,
    cartReducer,
  },
});

export default store;