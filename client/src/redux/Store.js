import {configureStore} from "@reduxjs/toolkit"
import cardReducer from "./reducers/CardReducer.js"

export const store = configureStore({
  reducer: {
    card: cardReducer,
  },
});
