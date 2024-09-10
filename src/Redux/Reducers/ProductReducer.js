import { SET_PRODUCTS } from "../Action-Types/Action-types";

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
    default:
      return state;
  }
};
