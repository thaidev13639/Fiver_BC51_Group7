import { requestApi } from "../configs/configApi";

class JobsService {
  fetchListJobsNavbarApi() {
    return requestApi({
      url: "/cong-viec/lay-menu-loai-cong-viec",
      method: "GET",
    });
  }
  fetchListJobsTitleApi(id) {
    return requestApi({
      url: `/cong-viec/lay-chi-tiet-loai-cong-viec/${id}`,
      method: "GET",
    });
  }
  fetchListJobsDetailApi(id) {
    return requestApi({
      url: `/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${id}`,
      method: "GET",
    });
  }
  fetchJobsDetailApi(id) {
    return requestApi({
      url: `/cong-viec/lay-cong-viec-chi-tiet/${id}`,
      method: "GET",
    });
  }
  fetchListComentApi(id) {
    return requestApi({
      url: `/binh-luan/lay-binh-luan-theo-cong-viec/${id}`,
      method: "GET",
    });
  }
  fetchRentJobApi(data) {
    return requestApi({
      url: "/thue-cong-viec",
      method: "POST",
      data,
    });
  }
  fetchRentJobListUserApi() {
    return requestApi({
      url: "/thue-cong-viec/lay-danh-sach-da-thue",
      method: "GET",
    });
  }
  fetchCommentApi(data) {
    return requestApi({
      url: "/binh-luan",
      method: "POST",
      data,
    });
  }
  fetchResearchJobApi(keyword) {
    return requestApi({
      url: `/cong-viec/lay-danh-sach-cong-viec-theo-ten/${keyword}`,
      method: "GET",
    });
  }
}
export const jobsService = new JobsService();
