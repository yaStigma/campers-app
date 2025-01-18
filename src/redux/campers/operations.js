import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/';

export const fetchCampers = createAsyncThunk(
  '/campers/fetch',
  async ({ location, vehicleType, equipment }, thunkAPI) => {
    try {
      const params = {};
      if (location) params.location = location;
      if (vehicleType) {
        if (vehicleType === 'Van') {
          params.form = 'panelTruck';
        } else {
          params.form = vehicleType.replace(' ', '');
        }
      }
      if (equipment && equipment.length > 0) {
        equipment.forEach(item => {
          if (item === 'AC') params.AC = true;
          if (item === 'Bathroom') params.bathroom = true;
          if (item === 'TV') params.TV = true;
          if (item === 'Kitchen') params.kitchen = true;
          if (item === 'Automatic') params.transmission = 'automatic';
        });
      }

      const { data } = await axios.get('/campers', { params });
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperID = createAsyncThunk('/campers/fetchID', async (id, thunkAPI) => {
  try {
    const { data } = await axios.get(`/campers/${id}`);
    console.log(data);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
