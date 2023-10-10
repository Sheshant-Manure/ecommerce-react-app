import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../redux/reducers/productsSlice'


const store = configureStore({
  reducer: {
    productsReducer,
  },
});

export default store;