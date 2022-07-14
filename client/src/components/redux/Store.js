import { configureStore } from '@reduxjs/toolkit'
import modalReducer from'../modals/ModalSlice';

export const store = configureStore({
    reducer: {
        modal: modalReducer,
    },
});
