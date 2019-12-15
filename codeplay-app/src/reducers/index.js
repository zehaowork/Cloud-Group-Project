import viewControllerReducer from "./viewController";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  viewController: viewControllerReducer
});

export default allReducers;
