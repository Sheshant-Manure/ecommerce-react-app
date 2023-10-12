import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../redux/reducers/productsSlice'
import cartReducer from '../redux/reducers/cartSlice';
import navReducer from '../redux/reducers/navSlice'


const store = configureStore({
  reducer: {
    navReducer,
    productsReducer,
    cartReducer,
  },
});

export default store;