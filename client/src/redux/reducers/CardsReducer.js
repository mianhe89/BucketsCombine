import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
  stampeds: [],
  bucket: [],
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setCards(state, action) {
      state.cards = action.payload.cards;
    },
    
  },
});

export const { setCards } = cardSlice.actions;
export default cardSlice.reducer;