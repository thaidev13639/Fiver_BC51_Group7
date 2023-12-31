import { requestApi } from "../configs/configApi";

class UserService {
  fetLoginApi = (data) => {
    return requestApi({
      url: "/auth/signin",
      method: "POST",
      data,
    });
  };

  fetRegisterApi = (data) => {
    return requestApi({
      url: "/auth/signup",
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

  fetchAddUser(data) {
    return requestApi({
      url: `/users`,
      method: "POST",
      data,
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
  fetchGetInfoUserApi(id) {
    return requestApi({
      url: `/users/${id}`,
      method: "GET",
    });
  }
  fetchUploadAvtarUser(file) {
    return requestApi({
      url: `/users/upload-avatar`,
      method: "POST",
      data: file,
    });
  }
}

export const userService = new UserService();
