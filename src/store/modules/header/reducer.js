export default (state = {}, action) => {
  console.log(state);
  switch (action.type) {
    case "TABS_HEADER":
      return {
        ...state,
        tabs: action.tabs,
      };

    default:
      return state;
  }
};
