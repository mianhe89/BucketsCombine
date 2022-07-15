import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: '',
  tag: [],
  writer: '',
  memberCount: 0,
  background: '',
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getAllProducts(state, action) {
      state.productList = action.payload.data;
    },
    getSingleProduct(state, action) {
      state.selectedItem = action.payload.data;
    },
  },
});

console.log("test", productSlice);

export const productActions = productSlice.actions;
export default productSlice.reducer;