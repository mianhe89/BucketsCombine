import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
  stampeds: [],
  bucket: [],
};

export const stampedsSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    stampedsReducer(state, action) {
      state.stampeds = action.payload.stampeds;
    }
  },
});

export const { stampedsActions } = stampedsSlice.actions;
export default stampedsSlice.reducer;