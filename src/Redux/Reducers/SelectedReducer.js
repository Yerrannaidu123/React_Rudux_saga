import {
  SELECTED_PRODUCTS,
  REMOVE_PRODUCTS,
} from "../Action-Types/Action-types";

const InitialState = {
  product: {},
};

export const SelectedReducer = (state = InitialState, action) => {
  switch (action.type) {
    case SELECTED_PRODUCTS:
      return {
        ...state,
        product: action.payload.product,
      };
    case REMOVE_PRODUCTS:
      return {};
    default:
      return state;
  }
};
