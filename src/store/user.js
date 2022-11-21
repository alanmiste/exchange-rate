const initialState = {
  fullName: "Alan Miste",
  logedIn: false,
};

export function userReducer(state = initialState, action) {
  return state;
}

// selector
export const getName = (state) => {
  return state.user.fullName.split(" ")[0].toLowerCase();
};
