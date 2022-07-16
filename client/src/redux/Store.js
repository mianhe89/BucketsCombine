<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit'
import modalReducer from'./reducers/ModalReducer.js';

 export const store = configureStore({
    reducer: {
        modal: modalReducer,
    },
=======
import {configureStore} from "@reduxjs/toolkit"
import cardReducer from "./reducers/CardReducer.js"

export const store = configureStore({
  reducer: {
    card: cardReducer,
  },
>>>>>>> feature/linkCards
});
