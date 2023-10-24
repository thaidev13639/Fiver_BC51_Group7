import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { countRedu } from "./reducer/count";

const rootReducer = combineReducers({
  countReducer: countRedu,
});

export const store = configureStore({
  // cái này chỉ setup thành cái store để mình chuyển bằng Provider
  reducer: rootReducer,
  devTools: true,
});
