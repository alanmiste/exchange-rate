import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./user";
import { rateReducer } from "./rates";

export const store = createStore(
  combineReducers({
    user: userReducer,
    rates: rateReducer,
  }),
  applyMiddleware(thunk)
);
