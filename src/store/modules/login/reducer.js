export default (state = {}, action) => {
  switch (action.type) {
    case "LOGOUT":
      sessionStorage.clear();
      history.replace("/login");
    default:
      return state;
  }
};
