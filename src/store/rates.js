const initialState = {
  amount: "12.00",
  currencyCode: "USD",
};
export function rateReducer(state = initialState, action) {
  switch (action.type) {
    case "rates/amountChanged":
      return { ...state, amount: action.payload };
    case "rates/currencyCodeChanged":
      return { ...state, currencyCode: action.payload };
    default:
      return state;
  }
}

// selector
export const getAmount = (state) => state.rates.amount;
export const getCurrencyCode = (state) => state.rates.currencyCode;
