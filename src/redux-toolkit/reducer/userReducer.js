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
  initialState,//lay phia tren 
  reducers: {
    SET_INFO_USER: (state, action) => {
      // ở đây là hàm xử lý store, state là từ initailState
      state.userInfo = action.payload;
    },

  },
});

export const userReduc = userReducers.reducer; // đặt tên khác với chỗ createSlice, cái này dùng để import bên combineReducer để sử dụng state
export const loginAction = userReducers.actions; // cái này dùng để gọi khi dispatch (dispatch(countAction.increNumber())), chỗ này em có thể bóc tách tên nó ra cho ngắn gọn cũng được
// export const { increNumber, decreNumber } = countReducers.actions; bóc tách kiểu này thì lúc dispatch chỉ cần dispatch(increNumber())