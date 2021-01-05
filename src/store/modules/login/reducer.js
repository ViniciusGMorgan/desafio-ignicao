const initialState = {};

export default (state = {}, action) => {
  switch (action.type) {
    case "CASE_REDUCER":
      return initialState;
    default:
      return state;
  }
};
