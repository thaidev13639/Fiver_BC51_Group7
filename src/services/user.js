import { requestApi } from "../configs/configApi";

class UserService {
  
  fetLoginApi = (data) => {
    return requestApi({
      url: "/auth/signin",
      method: "POST",
      data,
    });
  };

  fetchGetListUserApi = (TenNguoiDung) => { 
    if (TenNguoiDung !== "") {
      return requestApi({
        url: `/users/search/${TenNguoiDung}`,
        method: "GET",
      });
    }else {
      return requestApi({
        url: `/users`,
        method: "GET",
      });
    }
  };

  fetchUserDeleteApi(id) {
    return requestApi({
      url: `/users?id=${id}`,
      method: "DELETE",
    });
  }

}

export const userService = new UserService();
