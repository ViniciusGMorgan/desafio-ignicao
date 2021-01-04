import { combineReducers } from "redux";
import Sidebar from "./sidebar/reducer";
import Login from "./login/reducer";
import Header from "./header/reducer";

const reducers = combineReducers({
  Sidebar,
  Header,
  Login,
});

export default (state, action) => {
  if (action.type === "LOGOUT") {
    state = undefined;
  }

  return reducers(state, action);
};
