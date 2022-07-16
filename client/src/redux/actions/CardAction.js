import {productActions} from "../reducers/productReducer"

function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    let url = ``
    let response = await fetch(url);
    let data = await response.json();
    dispatch(productActions.getAllProducts({ data }));
  };
}

function getProductsDetail(id) {
  return async (dispatch) => {
    let url = ``
    let response = await fetch(url);
    let data = await response.json();
    dispatch(productActions.getSingleProduct({ data }));
  };
}

export const productAction = { getProducts, getProductsDetail };