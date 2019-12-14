import loggedReducer from "./isLogged";
import signupVisibleReducer from "./singupVisible";
import resetVisbleReducer from "./resetVisible";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  isLogged: loggedReducer,
  signupVisible: signupVisibleReducer,
  resetVisble: resetVisbleReducer
});

export default allReducers;
