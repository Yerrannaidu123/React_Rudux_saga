import { SET_PRODUCTS, ADD_NEW_PRODUCT } from "../Action-Types/Action-types";

const InitialState = {
  products: [],
};

export const ProductReducer = (state = InitialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_NEW_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};
