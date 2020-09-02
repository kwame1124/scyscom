<template>
  <div class="m-meeting">
    <my-title
      :title="'智能会议'"
      :titleus="'INTELLIGENT CONFERENCE'"
      :button="'查看详情'"
      :link="'conference'"
    />
    <el-row class="m-content" type="flex" justify="center">
      <el-col :span="20">
        <el-col class="image-box" :md="12" :sm="24">
          <img
            src="https://ccdn.goodq.top/caches/e8c750c87f16bcba58f0d80d299d7485/aHR0cHM6Ly81NGNiNGUyY2UxNDI5LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDYvNWIwNTNmZjEyNDI1YzU3YzYyNThhYmU3OGVmMWE4ZDgucG5n.png"
            alt
          />
        </el-col>
        <el-col :md="12" :sm="24">
          <div class="article-box">
            <div class="sub-title hidden-sm-and-down">一体化智能会议平台 · 一站式管理您的会议</div>
            <div class="sub-title hidden-sm-and-down">适应时代需求 · 提升会议效率 · 降低会议成本 · 实现与会目标</div>
            <div class="sub-title hidden-md-and-up">适应时代需求 · 提升会议效率</div>
            <div class="sub-title hidden-md-and-up">降低会议成本 · 实现与会目标</div>
            <div class="content">
              <p>
                <i class="el-icon-success"></i>
                <span>全面化会议建设 标准化会议进程</span>
              </p>
              <p>
                <i class="el-icon-success"></i>
                <span>功能化会议模块 安全化会议管理</span>
              </p>
              <p>
                <i class="el-icon-success"></i>
                <span>针对化会议讨论 规范化会议统计</span>
              </p>
              <p class="remarks">PC/PAD/Phone 全设备支持</p>
            </div>
          </div>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.m-meeting {
  padding-bottom: 50px;
  .m-content {
    .image-box {
      img {
        width: 85%;
        margin: 0 auto;
      }
      @media screen and (max-width: 992px) {
        margin-bottom: 25px;
      }
    }
    .article-box {
      .sub-title {
        font-size: 22px;
        font-weight: bold;
        margin-bottom: 15px;
        @media screen and (max-width: 992px) {
          text-align: center;
        }
      }
      .content {
        @media screen and (max-width: 992px) {
          text-align: center;
        }
        margin-top: 25px;
        p {
          font-size: 16px;
          margin-top: 20px;
          i {
            font-size: 24px;
            color: green;
            margin-right: 20px;
          }
        }
        .remarks {
          margin-top: 25px;
          font-size: 22px;
          font-weight: bold;
        }
      }
    }
  }
}
</style>