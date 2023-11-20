import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
}

const string = localStorage.getItem("INFO_ACCOUNT");
if (string) {
  initialState.userInfo = JSON.parse(string);
}

export const userReducers = createSlice({
  name: "Login",
  initialState,
  reducers: {
    SET_INFO_USER: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const userReduc = userReducers.reducer; 
export const loginAction = userReducers.actions; 