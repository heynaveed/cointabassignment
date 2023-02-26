import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import Reducer from "./Reducer";

export const Store = legacy_createStore(Reducer,applyMiddleware(thunk));