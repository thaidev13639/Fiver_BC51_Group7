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
    } else {
      return requestApi({
        url: `/users`,
        method: "GET",
      });
    }
  };

  fetchAddUser() {
    return requestApi({
      url: `/users`,
      method: "POST",
    });
  }

  fetchUserDeleteApi(id) {
    return requestApi({
      url: `/users?id=${id}`,
      method: "DELETE",
    });
  }
  fetchUserDetailApi(id) {
    return requestApi({
      url: `/users/${id}`,
      method: "GET",
    });
  }
  fetchUserUpdateApi(id, data) {
    return requestApi({
      url: `/users/${id}`,
      method: "PUT",
      data,
    });
  }

}

export const userService = new UserService();
