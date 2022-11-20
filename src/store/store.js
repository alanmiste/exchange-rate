import { createStore, combineReducers } from "redux";
import { userReducer } from "./user";
import { rateReducer } from "./rates";

export const store = createStore(
  combineReducers({
    user: userReducer,
    rates: rateReducer,
  })
);
