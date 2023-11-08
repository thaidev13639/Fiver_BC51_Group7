import { requestApi } from "../configs/configApi";

class ManageService {
  

  fetchGetListJobS = (TenCongViec ) => { 
    if (TenCongViec !== "") {
      return requestApi({
        url: `/cong-viec/lay-danh-sach-cong-viec-theo-ten/${TenCongViec}`,
        method: "GET",
      });
    }else {
      return requestApi({
        url: `/cong-viec`,
        method: "GET",
      });
    }
  };

  fetchJobsDeleteApi(id) {
    return requestApi({
      url: `/cong-viec/${id}`,
      method: "DELETE",
    });
  }
  fetchJobsDetailApi(id) {
    return requestApi({
      url: `/cong-viec/${id}`,
      method: "GET",
    });
  }
  fetchJobsUpdateApi(id,data) {
    return requestApi({
      url: `/cong-viec/${id}`,
      method: "PUT",
      data,
    });
  }

  //loại
  fetchGetListJobsType = (keyword) => { 
    if (keyword!== "") {
      return requestApi({
        url: `/loai-cong-viec/phan-trang-tim-kiem?pageIndex=1&pageSize=10&keyword=${keyword}`,
        method: "GET",
      });
    }else{
      return requestApi({
        url: `/loai-cong-viec`,
        method: "GET",
      });
    }
  };

  fetchJobsTypeDeleteApi(id) {
    return requestApi({
      url: `/loai-cong-viec/${id}`,
      method: "DELETE",
    });
  }
  fetchJobsTypeDetailApi(id) {
    return requestApi({
      url: `/loai-cong-viec/${id}`,
      method: "GET",
    });
  }
  fetchJobsTypeUpdateApi(id,data) {
    return requestApi({
      url: `/loai-cong-viec/${id}`,
      method: "PUT",
      data,
    });
  }
  //thuecongviec


fetchGetListHireJobS = (keyword) => { 
  if (keyword!== "") {
    return requestApi({
      url: `/thue-cong-viec/phan-trang-tim-kiem?pageIndex=1&pageSize=10&keyword=${keyword}`,
      method: "GET",
    });
  }else{
    return requestApi({
      url: `/thue-cong-viec`,
      method: "GET",
    });
  }
     
    
  };

  fetchHireJobsDeleteApi(id) {
    return requestApi({
      url: `/thue-cong-viec/${id}`,
      method: "DELETE",
    });
  }
  fetchHireJobsDetailApi(id) {
    return requestApi({
      url: `/thue-cong-viec/${id}`,
      method: "GET",
    });
  }
  fetchHireJobsUpdateApi(id,data) {
    return requestApi({
      url: `/thue-cong-viec/${id}`,
      method: "PUT",
      data,
    });
  }
 

}

export const manageService= new ManageService();
