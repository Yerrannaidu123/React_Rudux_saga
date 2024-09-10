import { takeLatest } from "redux-saga/effects";
import {
  FETCHING_PRODUCTS,
  DETAILED_PRODUCT,
} from "../Redux/Action-Types/Action-types";
import { HandleGetProducts, HandleSelectedProduct } from "./Handler";

function* MySaga() {
  yield takeLatest(FETCHING_PRODUCTS, HandleGetProducts);
  yield takeLatest(DETAILED_PRODUCT, HandleSelectedProduct);
}
export default MySaga;
