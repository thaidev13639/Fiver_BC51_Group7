import axios from "axios";
import { BASE_URL, TOKEN_CYBERSOFT } from "../constants/apiContants";
import { store } from "../redux-toolkit/configStore";

const requestApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    TokenCybersoft: TOKEN_CYBERSOFT,
  },
});

// const state = store.getState();
// console.log(state);

requestApi.interceptors.request.use((config) => {
  let accessToken = null; //accesstoken
  const state = store.getState();
  if (state.userReducer.userInfo) {
    accessToken = state.userReducer.userInfo.token;

    config.headers.token = accessToken; // truyen them thuoctinh có ten token , và TokenCybersoft vào header:{}

  }

  return config;
});

export { requestApi };

