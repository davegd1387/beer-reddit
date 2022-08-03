import { createSlice } from '@reduxjs/toolkit';
import {defaultTopic}  from '../userFiles/myDefaults';
import { setSelectedSubreddit } from "./redditSlice"

export const changeTopicThunk =  (topic) => {
  return (dispatch) => {
      dispatch(setSelectedTopic(topic.id))
      dispatch(setSelectedSubreddit(topic.url))
  }
}
const initialState = {
   selectedTopic: defaultTopic.id,
};

const topicSlice = createSlice({
  name: 'topic',
  initialState,
  reducers: {
    setSelectedTopic(state, action) {
      state.selectedTopic = action.payload;
    },
  },
  
});

export const { setSelectedTopic } = topicSlice.actions;
export default topicSlice.reducer;
export const selectSelectedTopic = (state) => state.topic.selectedTopic;

