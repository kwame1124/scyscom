<template>
  <div class="conference">
    <!-- 轮播图 -->
    <el-row class="anchor-point">
      <el-col :span="24">
        <m-swiper :swiperList="dataList" />
      </el-col>
    </el-row>
    <!-- 智能会议 -->
    <el-row class="moudle-title" type="flex" justify="center">
      <el-col :span="20">
        <div class="title-box">
          <div class="m-title">智能会议</div>
          <div class="m-titleus">INTELLIGENT CONFERENCE</div>
        </div>
      </el-col>
    </el-row>
    <!-- 项目概述 -->
    <el-row>
      <m-summary />
    </el-row>
    <!-- 应用功能 -->
    <el-row>
      <m-apply />
    </el-row>
    <!-- 特色价值 -->
    <el-row>
      <m-unique />
    </el-row>
  </div>
</template>

<script>
import MSwiper from "@/components/index/swiper.vue";
import MSummary from "@/components/conference/summary.vue";
import MApply from "@/components/conference/apply.vue";
import MUnique from "@/components/conference/unique.vue";
export default {
  mounted() {},
  data() {
    return {
      dataList: [
        {
          url:
            "https://54cb542a2a656.t73.qifeiye.com/qfy-content/uploads/2014/06/bg1.jpg",
          text: "“易公务”智能会议平台",
          text3: "EOB Intelligent conference platform ",
          btn: true
        }
      ]
    };
  },
  components: {
    MSwiper,
    MSummary,
    MApply,
    MUnique
  }
};
</script>
<style lang="scss" scoped>
.moudle-title {
  padding: 50px 0 0 0;
  background-color: #fff;
}
.title-box {
  border-bottom: 1px solid #ccc;
  margin-bottom: 30px;
  .m-title {
    font-size: 28px;
  }
  .m-titleus {
    color: #c1c1c1;
    margin: 10px 0;
  }
}
</style>
