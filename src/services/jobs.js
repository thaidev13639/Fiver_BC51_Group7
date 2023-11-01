import { requestApi } from "../configs/configApi";

class JobsService {
  fetchListJobsNavbar() {
    return requestApi({
      url: "/cong-viec/lay-menu-loai-cong-viec",
      method: "GET",
    });
  }
  fetchListJobsTitle(id) {
    return requestApi({
      url: `/cong-viec/lay-chi-tiet-loai-cong-viec/${id}`,
      method: "GET",
    });
  }
}
export const jobsService = new JobsService();
