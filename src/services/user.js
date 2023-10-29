import { requestApi } from "../configs/configApi";

class UserService {
  
  fetLoginApi = (data) => {
    return requestApi({
      url: "/auth/signin",
      method: "POST",
      data,
    });
  };

}

export const userSvervice = new UserService();
