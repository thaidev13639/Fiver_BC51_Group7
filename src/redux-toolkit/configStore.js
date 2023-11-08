import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReduc } from "./reducer/userReducer";

const rootReducer = combineReducers({
  userReducer: userReduc,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
