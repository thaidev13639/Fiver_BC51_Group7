import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { countRedu } from "./reducer/count";
import { userReduc } from "./reducer/userReducer";

const rootReducer = combineReducers({
  countReducer: countRedu,
  userReducer: userReduc,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
