import { combineReducers } from "redux";

import appReducer from "./app";
import authReducer from "./auth";
import userReducer from "./user";

const appReducers = combineReducers({
  app: appReducer,
  auth: authReducer,
  user: userReducer
})

export default appReducers;
