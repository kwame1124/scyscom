// import request from "@/utils/request";
import { service, baseURL } from "@/utils/request";
var api = {
  baseURL: baseURL,
  // 关于有生
  getAbout() {
    return service({
      url: "/findAbout",
      method: "get",
    });
  },
  // 专题专栏导航
  getSpecialnav() {
    return service({
      url: "/findColumn",
      method: "get",
    });
  },
  // 项目案例
  getProjectcase() {
    return service({
      url: "/findProject",
      method: "get",
    });
  },
  // 首页初始化文章
  getThreearticle() {
    return service({
      url: "/findTopic",
      method: "get",
    });
  },
  // 首页三条通过nav获取
  getArticleList(data) {
    return service({
      url: "/findTopic",
      method: "post",
      data
    });
  },
  getArticleInfo(data) {
    return service({
      url: "/front/topic/findById/" + data,
      method: "get",
    });
  },
  // 手机轮播图
  getMeetingImg() {
    return service({
      url: "/meeting/findCarousel",
      method: "get",
    });
  },
  // 会议手机电脑介绍
  getMeetingInfo() {
    return service({
      url: "/meeting/findCarouselDetails",
      method: "get",
    });
  },
  // 特色
  getUnique() {
    return service({
      url: "/meeting/findCharacteristic",
      method: "get",
    });
  },
  // 项目概述
  getSummary() {
    return service({
      url: "/meeting/findProject",
      method: "get",
    });
  },

};

export default api;
