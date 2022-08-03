import { createSlice } from '@reduxjs/toolkit';
// import { getSubreddits } from '../api/reddit';
import { subreddits } from '../userFiles/subreddits';

const initialState = {
  subreddits,
  error: false,
  isLoading: false,
};

const subRedditSlice = createSlice({
  name: 'subreddits',
  initialState,
  reducers: {},
});

export default subRedditSlice.reducer;

export const selectSubreddits = (state) => state.subreddits.subreddits;
