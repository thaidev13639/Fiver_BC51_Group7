import { createSlice } from "@reduxjs/toolkit";

export const countReducers = createSlice({
  name: "Count",
  initialState: {
    // chỗ này tạo state
    value: 0,
  },
  reducers: {
    increNumber: (state) => {
      // ở đây là hàm xử lý store, state là từ initailState
      state.value += 1;
    },
    decreNumber: (state) => {
      state.value -= 1;
    },
  },
});

export const countRedu = countReducers.reducer; // đặt tên khác với chỗ createSlice, cái này dùng để import bên combineReducer để sử dụng state
export const countAction = countReducers.actions; // cái này dùng để gọi khi dispatch (dispatch(countAction.increNumber())), chỗ này em có thể bóc tách tên nó ra cho ngắn gọn cũng được
// export const { increNumber, decreNumber } = countReducers.actions; bóc tách kiểu này thì lúc dispatch chỉ cần dispatch(increNumber())
