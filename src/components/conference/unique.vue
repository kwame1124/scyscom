<template>
  <div class="m-apply">
    <div class="m-content">
      <el-row type="flex" justify="center">
        <el-col>
          <div class="module-title">特色价值</div>
          <div class="bottom-line"></div>
        </el-col>
      </el-row>
    </div>
    <el-row type="flex" justify="center" style="background-color:#fff">
      <el-col :span="20">
        <el-row :gutter="20">
          <el-col
            class="article-box"
            :md="8" :sm="24"
            v-for="(item, index) in dataList"
            :key="index"
          >
            <div>
              <el-col :span="4">
                <div class="icon-box">
                  <i :class="item.icon"></i>
                </div>
              </el-col>
              <el-col :span="20">
                <p class="article-title">{{ item.title }}</p>
                <p class="article-content">{{ item.content }}</p>
              </el-col>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  mounted(){
    this.$api.getUnique().then(res=>{
      this.dataList = res.data.data;
    })
  },
  data() {
    return {
      dataList: [
        {
          icon: "el-icon-s-help",
          title: "无会不能",
          content:
            "可以在平台上组织召开包罗万象的各种会议：内部常规会议；对外开放会议；线上线下结合模式；纯网络会议；紧凑型限时集中会议；松散型自由随意型会议；传统型规范会议；网络创新型会议等。"
        },
        {
          icon: "el-icon-s-order",
          title: "无会不专",
          content:
            "从会议方案策划、办会组织、到参会细节，力争做到全面专业精准，通过知识呈现、流程引导、模板示范可以使用平台的人新手不陌生、老手更专业。"
        },
        {
          icon: "el-icon-s-operation",
          title: "无网不会",
          content:
            "从会议计划，到方案审批，到会议筹备，到现场开会，到会后落实，充分利用通信、采集、存贮、反馈、终端、设备等各种信息技术，通过计算机网络有机联接，使会议在网的支撑和控制下，更有效率，更有效果。"
        },
        {
          icon: "el-icon-s-grid",
          title: "有关必联",
          content:
            "做到用户协同、数据协同、应用协同，保证组织之间、人会之间、会文之间、会事之间全面互联互通。"
        },
        {
          icon: "el-icon-s-cooperation",
          title: "有事必便",
          content:
            "从会议方案策划、办会组织、到参会细节，力争做到全面专业精准，通过知识呈现、流程引导、模板示范可以使用平台的人新手不陌生、老手更专业。"
        },
        {
          icon: "el-icon-upload",
          title: "有网必通",
          content:
            "从会议计划，到方案审批，到会议筹备，到现场开会，到会后落实，充分利用通信、采集、存贮、反馈、终端、设备等各种信息技术，通过计算机网络有机联接，使会议在网的支撑和控制下，更有效率，更有效果。"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.m-apply {
  padding-bottom: 50px;
  background-color: #fff;
  .m-content {
    background-color: #fff;
    padding: 30px 0;
    text-align: center;
    .module-title {
      font-size: 32px;
      font-weight: bold;
    }
    .bottom-line {
      height: 4px;
      width: 70px;
      background-color: #000;
      border-radius: 10px;
      margin: 0 auto;
      margin-top: 10px;
    }
  }
  .article-box {
    margin-bottom: 20px;
   
    .icon-box {
      border-radius: 50%;
      background-color: #3a6ee8;
      width: 50px;
      height: 50px;
      font-size: 26px;
      text-align: center;
      line-height: 50px;
      color: #fff;
      margin-right: 20px;
      &:hover {
        background-color: #1b4f9b;
      }
    }
    .article-title {
      margin-top: 15px;
      font-size: 16px;
      font-weight: bold;
      color: #474747;
      @media screen and (max-width: 768px) {
      margin-left: 10px;
    }
    }

    .article-content {
      line-height: 1.7em;
      margin-top: 15px;
      color: #808080;
      font-size: 13px;
      letter-spacing: 1px;
      @media screen and (max-width: 768px) {
      margin-left: 10px;
    }
    }
  }
}
</style>
