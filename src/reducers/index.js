import { combineReducers } from "redux";

import appReducer from "./app";
import authReducer from "./auth";

const appReducers = combineReducers({
  app: appReducer,
  auth: authReducer
})

export default appReducers;
