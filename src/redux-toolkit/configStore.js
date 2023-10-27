import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { countRedu } from "./reducer/count";
import { userReduc } from "./reducer/userReducer";


const rootReducer = combineReducers({
  countReducer: countRedu,
  userReducer: userReduc,
});

export const store = configureStore({
  // cái này chỉ setup thành cái store để mình chuyển bằng Provider
  reducer: rootReducer,
  devTools: true,
});
