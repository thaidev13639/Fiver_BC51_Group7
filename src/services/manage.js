import { requestApi } from "../configs/configApi";

class ManageService {


  fetchGetListJobS = (TenCongViec) => {
    if (TenCongViec !== "") {
      return requestApi({
        url: `/cong-viec/lay-danh-sach-cong-viec-theo-ten/${TenCongViec}`,
        method: "GET",
      });
    } else {
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
  fetchJobsAddApi(data) {
    return requestApi({
      url: `/cong-viec`,
      method: "POST",
      data,
    });
  }
  fetchJobsDetailApi(id) {
    return requestApi({
      url: `/cong-viec/${id}`,
      method: "GET",
    });
  }

  fetchJobsAddImgApi(id, data) {
    return requestApi({
      url: `/cong-viec/upload-hinh-cong-viec/${id}`,
      method: "POST",
      data,
    });
  }

  fetchJobsUpdateApi(id, data) {
    return requestApi({
      url: `/cong-viec/${id}`,
      method: "PUT",
      data,
    });
  }

  //loại
  fetchGetListJobsType = (keyword) => {
    if (keyword !== "") {
      return requestApi({
        url: `/loai-cong-viec/phan-trang-tim-kiem?pageIndex=1&pageSize=10&keyword=${keyword}`,
        method: "GET",
      });
    } else {
      return requestApi({
        url: `/loai-cong-viec`,
        method: "GET",
      });
    }
  };

  fetchAddJobsTypeApi(data) {
    return requestApi({
      url: `/loai-cong-viec`,
      method: "POST",
      data
    });
  }

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
  fetchJobsTypeUpdateApi(id, data) {
    return requestApi({
      url: `/loai-cong-viec/${id}`,
      method: "PUT",
      data,
    });
  }
  //thuecongviec


  fetchGetListHireJobS = (keyword) => {
    if (keyword !== "") {
      return requestApi({
        url: `/thue-cong-viec/phan-trang-tim-kiem?pageIndex=1&pageSize=10&keyword=${keyword}`,
        method: "GET",
      });
    } else {
      return requestApi({
        url: `/thue-cong-viec`,
        method: "GET",
      });
    }


  };


  fetchAddHireJobsApi(data) {
    return requestApi({
      url: `/thue-cong-viec`,
      method: "POST",
      data,
    });
  }

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
  fetchHireJobsUpdateApi(id, data) {
    return requestApi({
      url: `/thue-cong-viec/${id}`,
      method: "PUT",
      data,
    });
  }
  //chitetloai
  fetchGetListDetailType = (keyword) => {
    if (keyword !== "") {
      return requestApi({
        url: `/chi-tiet-loai-cong-viec/phan-trang-tim-kiem?pageIndex=1&pageSize=9&keyword=${keyword}`,
        method: "GET",
      });
    } else {
      return requestApi({
        url: `/chi-tiet-loai-cong-viec`,
        method: "GET",
      });
    }
  }

  fetchAddDetailTypeApi() {
    return requestApi({
      url: `/chi-tiet-loai-cong-viec`,
      method: "POST",
    });
  }

  fetchAddGrpDetailTypeApi() {
    return requestApi({
      url: `/chi-tiet-loai-cong-viec/them-nhom-chi-tiet-loai`,
      method: "POST",
    });
  }


  fetchDelDetailTypeApi(id) {
    return requestApi({
      url: `/chi-tiet-loai-cong-viec/${id}`,
      method: "DELETE",
    });
  }

  fetchGetDetailTypeApi(id) {
    return requestApi({
      url: `/chi-tiet-loai-cong-viec/${id}`,
      method: "GET",
    });
  }
  fetchUpdateDetailTypeApi(id) {
    return requestApi({
      url: `/chi-tiet-loai-cong-viec/${id}`,
      method: "PUT"
    });
  }

  fetchUploadDetailTypeApi(MaNhomLoaiCongViec) {
    return requestApi({
      url: `/chi-tiet-loai-cong-viec/upload-hinh-nhom-loai-cong-viec/${MaNhomLoaiCongViec}`,
      method: "POST"
    });
  }

 

  //comment 
  fetchGetListComment = (MaCongViec) => {
    if (MaCongViec !== "") {
      return requestApi({
        url: `/binh-luan/lay-binh-luan-theo-cong-viec/${MaCongViec}`,
        method: "GET",
      });
    } else {
      return requestApi({
        url: `/binh-luan`,
        method: "GET",
      });
    }
  }

  fetchGetComment(id) {
    return requestApi({
      url: `/binh-luan/${id}`,
      method: "GET",
    });
  }

  fetchAddComment(data) {
    return requestApi({
      url: `/binh-luan`,
      method: "POST",
      data
    });
  }
  fetchDelComment(id) {
    return requestApi({
      url: `/binh-luan/${id}`,
      method: "DELETE",
    });
  }

  fetchUptComment(id,data) {
    return requestApi({
      url: `/binh-luan/${id}`,
      method: "PUT",
      data
    });
  }

}

export const manageService = new ManageService();
