import { combineReducers } from "redux";
import { ProductReducer } from "./Reducers/ProductReducer";
import { cartReducer } from "./Reducers/CartReducer";
import { SelectedReducer } from "./Reducers/SelectedReducer";
export const reducers = combineReducers({
  allProducts: ProductReducer,
  selectedProducts: SelectedReducer,
  cart: cartReducer,
});
