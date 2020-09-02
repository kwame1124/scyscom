<template>
  <div class="page-index">
    <!-- 轮播图 -->
    <el-row class="anchor-point">
      <el-col :span="24">
        <m-swiper :swiperList="dataList" />
      </el-col>
    </el-row>
    <!-- 选择我们 -->
    <el-row style="background-color:#fff">
        <choose-us />
    </el-row>
    <!-- 智能会议 -->
    <el-row class="anchor-point" style="border-top:1px solid #ccc;border-bottom:1px solid #ccc;">
      <main-project />
    </el-row>
    <!-- 项目案例 -->
    <el-row class="anchor-point" style="background-color:#fff">
          <m-case />
    </el-row>
    <!-- 专题专栏 -->
    <el-row class="anchor-point" style="border-top:1px solid #ccc;border-bottom:1px solid #ccc;">
          <special-column />
    </el-row>
    <!-- 关于我们 -->
    <el-row class="anchor-point" style="background-color:#fff">
      <about-us />
    </el-row>
    <!-- 开发服务 -->
    <el-row class="anchor-point">
      <m-development />
    </el-row>
    <!-- 联系我们 -->
    <el-row class="anchor-point">
      <contact-us />
    </el-row>
  </div>
</template>

<script>
import MSwiper from "@/components/index/swiper.vue";
import ChooseUs from "@/components/index/chooseus.vue";
import MainProject from "@/components/index/mainproject.vue";
import MDevelopment from "@/components/index/development.vue";
import MCase from "@/components/index/case.vue";
import SpecialColumn from "@/components/index/specialcolumn.vue";
import AboutUs from "@/components/index/aboutus.vue";
import ContactUs from "@/components/index/contactus.vue";

// import MLife from "@/components/index/life.vue";
// import Container from "@/components/index/container.vue";
export default {
  data() {
    return {
      dataList: [
        {
          url: require("../assets/swiper/swiper1.jpg"),
          text: "奉智献技 · 创新卓越 · 互利多赢 · 共谋发展",
          text2: "让科技提升您的价值",
          text3: "Let technology enhance your value"
        },
        {
          url:
            "https://54cb542a2a656.t73.qifeiye.com/qfy-content/uploads/2014/06/bg1.jpg",
          text: "“易公务”智能会议平台",
          text3: "EOB Intelligent conference platform ",
          btn: true
        },
        {
          url:
            "https://ccdn.goodq.top/caches/628d236aceaa012698bd7fe4b8dc188c/aHR0cHM6Ly81ODc0NWExOTcyYzZmLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDYvZmM2Yjg0ZTExMzk3MDU0Yzg2NTMxMTJhOWVjMTkyMmUtOTAud2VicA_p_p100_p_3D_p_p100_p_3D.webp",
          text: "随时随地让工作更高效",
          text3: "Make work more efficient anytime anywhere"
        }
      ]
    };
  },
  components: {
    MSwiper,
    ChooseUs,
    MainProject,
    MDevelopment,
    MCase,
    SpecialColumn,
    AboutUs,
    ContactUs
  }
};
</script>
