import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
  stampeds: [],
  bucket: [],
};

export const bucketSlice = createSlice({
  name: "bucket",
  initialState,
  reducers: {
    bucketReducer(state, action) {
      state.bucket = action.payload.bucket;
    },
  },
});

export const { bucketActions } = bucketSlice.actions;
export default bucketSlice.reducer;