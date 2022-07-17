import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
    isOpen: false,
    mode:""
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.isOpen = true;
        },
        closeModal: (state, action) => {
            state.isOpen = false;
        },
        changeMode: (state, action) => {
            state.mode = action.payload;
        },
        
    }
});

export const { openModal, closeModal, changeMode } = modalSlice.actions;
export default modalSlice.reducer;