<template>
  <div class="m-about">
    <my-title :title="'关于我们'" :titleus="'ABOUT US'" />
    <el-row class="article-content" type="flex" justify="center">
      <el-col :span="20">
        <el-col :lg="12" :md="24">
          <el-col>
            <!-- <div class="article-box" v-html="dataInfo.content"> -->
            <div class="article-box">
              <p>四川有生软件科技有限公司位于中国科技城——四川省绵阳市，创立于2015年6月，注册资金300万，系绵阳市优秀科技人才创办的科技中小型企业，获得了国家高新技术企业证书。创办人具有丰富的信息化推进领导、信息工程实施管理、应用软件系统开发等行业经验。公司定位于智慧城市、智慧政府、智慧企业及大数据云支撑平台的专注研究和推广，发挥科技城政策与品牌优势，服务中国西部广阔市场和应用需求。公司现有高效、专业的技术开发团队，以质量求生存，以信誉谋发展，秉承创新务实的态度和坚定不移的信念不断创新研发新产品，为客户量身定制产品并提供优质的服务。</p>
              <p>公司的经营范围主要包括：信息技术开发、技术转让、技术服务，信息系统工程设计、安装及系统集成、技术服务，信息系统工程监理；数据处理及存储服务，基础软件服务，应用软件开发与服务，互联网信息平台开发与推广，计算机及网络系统技术服务，计算机、软件及辅助设备、电子产品、网络设备、通讯设备的销售。</p>
            </div>
          </el-col>
        </el-col>
        <el-col :lg="12" :md="24" class="image-box hidden-md-and-down">
          <div class="img"></div>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$api.getAbout().then(res => {
      this.dataInfo = res.data.data;
    });
  },
  data() {
    return {
      dataInfo: {},
      imgList: [
        {
          url: require("../../assets/public/show1.png")
        },
        {
          url: require("../../assets/public/show2.png")
        },
        {
          url: require("../../assets/public/show3.png")
        },
        {
          url: require("../../assets/public/show4.png")
        },
        {
          url: require("../../assets/public/show5.png")
        },
        {
          url: require("../../assets/public/show6.png")
        },
        {
          url: require("../../assets/public/show7.png")
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.m-about {
  border-bottom: 1px solid #ccc;
  padding-bottom: 50px;
  .article-box {
    font-size: 16px;
    color: rgb(103, 114, 148);
    line-height: 1.769230769230769;
    :first-child {
      margin-bottom: 20px;
    }
  }
  .image-box {
    // border:1px solid red;
    .img {
      height: 315px;
      margin: 0 auto;
      background-image: url("../../assets/public/aboutus.png");
      background-repeat: no-repeat;
      background-size: 65%;
      background-position: 130px -40px;
    }
  }
}
</style>
