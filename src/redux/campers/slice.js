import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers, fetchCamperID } from './operations';

const initialState = {
  items: [],
  camper: null,
  loading: false,
  error: null,
};

const campersSlise = createSlice({
  name: 'campers',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCamperID.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCamperID.fulfilled, (state, action) => {
        state.loading = false;
        state.camper = action.payload;
      })
      .addCase(fetchCamperID.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default campersSlise.reducer;
