import viewControllerReducer from "./viewController";
import avatarReducer from "./avatar";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  viewController: viewControllerReducer,
  avatar: avatarReducer
});

export default allReducers;
