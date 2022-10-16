import { combineReducers } from "redux";

import { authReducer } from "./auth";
import { postReducer } from "./post";

const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer,
});

export default rootReducer;
