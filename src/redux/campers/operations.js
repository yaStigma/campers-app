import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/';

export const fetchCampers = createAsyncThunk('/campers/fetch', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get('/campers');
    console.log(data);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchCamperID = createAsyncThunk('/campers/fetchID', async (id, thunkAPI) => {
  try {
    const { data } = await axios.get(`/campers/${id}`);
    console.log(data);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
