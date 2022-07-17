import { configureStore } from '@reduxjs/toolkit'
import modalReducer from'./reducers/ModalReducer.js';
import cardsReducer from'./reducers/CardsReducer';
import stampedsReducer from'./reducers/StampedsReducer';
import bucketReducer from'./reducers/BucketReducer';

 export const store = configureStore({
    reducer: {
        modal: modalReducer,
        cards: cardsReducer,
        stampeds: stampedsReducer,
        bucket: bucketReducer,
    },
});
