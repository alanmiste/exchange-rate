import { getExchangeRates } from "../api";

export const supportedCurrencies = ["USD", "EUR", "JPY", "CAD", "GBP", "MXN"];

const initialState = {
  amount: "12.00",
  currencyCode: "USD",
  currencyData: { USD: 1.0 },
};
export function rateReducer(state = initialState, action) {
  switch (action.type) {
    case AMOUNT_CHANGED:
      return { ...state, amount: action.payload };
    case CURRENCY_CODE_CHANGED:
      return { ...state, currencyCode: action.payload };
    case "rates/ratesReceived":
      return { ...state, currencyData: action.payload };
    default:
      return state;
  }
}

// selector
export const getAmount = (state) => state.rates.amount;
export const getCurrencyCode = (state) => state.rates.currencyCode;
export const getCurrencyData = (state) => state.rates.currencyData;

// action type
export const AMOUNT_CHANGED = "rates/amountChanged";
export const CURRENCY_CODE_CHANGED = "rates/currencyCodeChanged";

// action creators
export const changeAmount = (amount) => ({
  type: AMOUNT_CHANGED,
  payload: amount,
});
export function changeCurrencyCode(currencyCode) {
  return function changeCurrencyCodeThunk(dispatch) {
    dispatch({
      type: CURRENCY_CODE_CHANGED,
      payload: currencyCode,
    });
    getExchangeRates(currencyCode, supportedCurrencies).then((rates) => {
      dispatch({
        type: "rates/ratesReceived",
        payload: rates,
      });
    });
  };
}
