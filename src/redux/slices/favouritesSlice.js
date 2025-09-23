// src/store/slices/cuisinesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    setFavourites: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setFavourites } = favouritesSlice.actions;
export default favouritesSlice.reducer;
