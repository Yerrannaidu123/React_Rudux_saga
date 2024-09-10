import { createStore, applyMiddleware } from "redux";
import { reducers } from "./combineReducers";
import logger from "redux-logger";
import { composeWithDevTools } from "@redux-devtools/extension";
import createSagaMiddleware from "redux-saga";
import MySaga from "../Sagas/Mysaga";

const SagaMiddleware = createSagaMiddleware();
const middleware = [logger, SagaMiddleware];
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
SagaMiddleware.run(MySaga);
