import { ADD_TO_CART, REMOVE_FROM_CART } from "../Action-Types/Action-types";

const initialState = {
  cartProduct: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartProduct: [...state.cartProduct, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartProduct: state.cartProduct.filter(
          (item) => item.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
