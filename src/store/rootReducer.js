import { combineReducers } from "@reduxjs/toolkit";
import candidatesReducer from "./candidate/canditate.slice";
const rootReducer = combineReducers({
  candidate: candidatesReducer,
});

export default rootReducer;
