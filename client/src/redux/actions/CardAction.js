// import {productActions} from "../reducers/productReducer"

// function getProducts(searchQuery) {
//   return async (dispatch) => {
//     let url = ``
//     let response = await fetch(url);
//     let data = await response.json();
//     dispatch(productActions.getAllProducts({ data }));
//   };
// }

const fetchData = (api, action) => (dispatch) => {
  return fetch(api)
    .then((res) => res.json())
    .then((data) => {
      dispatch(action(data));
    })
    .catch((err) => console.log(err));
};

const setCards = (cards) => {
  return {
    payload: {
      cards
    }
  };
};

const addToBucket = (cardID) => {
  return {
    payload: {
      cardID
    }
  };
};

const testfunction = () => console.log('done')

// function getProductsDetail(id) {
//   return async (dispatch) => {
//     let url = ``
//     let response = await fetch(url);
//     let data = await response.json();
//     dispatch(productActions.getSingleProduct({ data }));
//   };
// }

export const cardsAction = { fetchData, setCards, addToBucket, testfunction };