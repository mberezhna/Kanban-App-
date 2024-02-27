import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const initialState = {
  issues: [],
  repLick: '',
};

export const getIssues = createAsyncThunk(
  'issues/getIssues',
  async (_, thunkApi) => {
    try {
      const response = await axios('https://api.github.com/repos/facebook/react/issues');
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue({ error });
    }
  }
);

const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {},
});