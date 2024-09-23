import {
  DETAILED_PRODUCT,
  FETCHING_PRODUCTS,
  REMOVE_PRODUCTS,
  SELECTED_PRODUCTS,
  SET_PRODUCTS,
  ADD_NEW_PRODUCT,
} from "../Action-Types/Action-types";

export const FetchingProducts = () => ({
  type: FETCHING_PRODUCTS,
});
export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};
export const DetailedProduct = (productId) => {
  return {
    type: DETAILED_PRODUCT,
    payload: productId,
  };
};
export const selectedProducts = (product) => {
  return {
    type: SELECTED_PRODUCTS,
    payload: product,
  };
};
export const removeSelectedProducts = () => {
  return {
    type: REMOVE_PRODUCTS,
  };
};

export const addNewProduct = (product) => ({
  type: ADD_NEW_PRODUCT,
  payload: product,
});
