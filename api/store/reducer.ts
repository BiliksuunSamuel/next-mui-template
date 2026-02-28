import { combineReducers } from "@reduxjs/toolkit";
import { AppReducer, ResponseReducer } from "../features";
export default combineReducers({
  AppReducer,
  ResponseReducer,
});
