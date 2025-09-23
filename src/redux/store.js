import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import authReducer from './slices/authSlice';
import favouritesReducer from './slices/favouritesSlice';
import offersReducer from './slices/offersSlice';
import searchesReducer from './slices/searchesSlice';
import ordersReducer from './slices/ordersSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    searches: searchesReducer,
    favourites: favouritesReducer,
    offers: offersReducer,
    orders: ordersReducer,
  },
});
