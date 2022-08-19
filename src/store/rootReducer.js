import { combineReducers } from "@reduxjs/toolkit";
import candidatesReducer from "./candidate/canditate.slice";
import userReducer from "./user/userSlice";

const rootReducer = combineReducers({
  candidate: candidatesReducer,
  user: userReducer,
});

export default rootReducer;
