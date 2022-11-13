import { combineReducers } from "redux";

import { authReducer } from "./auth";
import { postReducer } from "./post";
import { adminReducer } from "./admin";
import { supportReducer } from "./support";

const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer,
  admin: adminReducer,
  support: supportReducer,
});

export default rootReducer;
