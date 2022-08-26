import { combineReducers } from "@reduxjs/toolkit";
import candidatesReducer from "./candidate/canditate.slice";
import userReducer from "./user/userSlice";
import questionsReducer from "./questions/questionsSlice";

const rootReducer = combineReducers({
  candidates: candidatesReducer,
  user: userReducer,
  questions: questionsReducer,
});

export default rootReducer;
