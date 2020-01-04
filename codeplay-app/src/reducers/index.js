import viewControllerReducer from "./viewController";
import avatarReducer from "./avatar";
import loginStatusReducer from "./loginStatus";
import userReducer from "./user";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  viewController: viewControllerReducer,
  avatar: avatarReducer,
  loginStatus: loginStatusReducer,
  user: userReducer
});

export default allReducers;
