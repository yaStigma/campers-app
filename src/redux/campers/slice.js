import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers, fetchCamperID } from './operations';

const initialState = {
  items: [],
  total: 0,
  page: 0,
  limit: 4,
  camper: null,
  loading: false,
  error: null,
};

const campersSlise = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    incrementPage: state => {
      state.page += 1;
    },
    resetCamperData: state => {
      state.camper = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
        state.total = action.payload.total;
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

export const { incrementPage } = campersSlise.actions;
export const { resetCamperData } = campersSlise.actions;

export default campersSlise.reducer;
