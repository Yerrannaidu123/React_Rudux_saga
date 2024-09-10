import { call, put } from "redux-saga/effects";
import { ProductData, ProductDetails } from "../API/Api";
import { setProducts, selectedProducts } from "../Redux/Actions/Action";

export function* HandleGetProducts() {
  try {
    const response = yield call(ProductData);
    const { data } = response;
    yield put(setProducts(data));
  } catch (error) {
    console.log(error);
  }
}

export function* HandleSelectedProduct(args) {
    console.log("###->",args)
  try {
    const productId= args.payload
    const response = yield call(ProductDetails,productId);
    const { data } = response;
    yield put(selectedProducts({productId, product: data }));
  } catch (error) {
    console.log(error);
  }
}
