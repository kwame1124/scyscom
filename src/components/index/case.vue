<template>
  <div id="anchor-case" class="m-case">
    <my-title :title="'项目案例'" :titleus="'PROJECT CASES'" />
    <el-row type="flex" justify="center">
      <el-col :span="20">
        <el-carousel height="350px">
          <el-carousel-item class="swiperItem" v-for="(item, index) in dataList" :key="index">
            <el-row class="content-box" type="flex" align="middle" style="height:100%">
              <el-col class="img-box" :span="24">
                <img
                  class="img"
                  :src="$api.baseURL + item.imgSrc"
                  alt
                />
              </el-col>
              <el-col class="m-article" :span="24">
                <div class="article-box">
                  <p class="title">{{item.title}}</p>
                  <p class="content">{{item.content}}</p>
                </div>
              </el-col>
            </el-row>
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$api.getProjectcase().then(res => {
      this.dataList = res.data.data;
    });
  },
  data() {
    return {
      dataList: [
        {
          title: "中国（绵阳）科技城国际科技博览会网络服务系统",
          content:
            "科博会是绵阳国家科技城开放合作的重要窗口和最佳平台，对助推中国科技城建设和西部地区开放发展具有重要作用。为加强信息便捷沟通和共享，实现办会参会高度协同，提高办会效率和质量，提升专业化、科学化水准，提升科技城会展形象，在有关领导的倡导下，由绵阳市博览局及科发会展公司，协同实施“中国（绵阳）科技城国际科技博览会网络服务系统”升级建设项目，并于第五届科博会上投入实际应用。"
        }
        // {title:"中国（绵阳）科技城国际科技博览会网络服务系统",content:"科博会是绵阳国家科技城开放合作的重要窗口和最佳平台，对助推中国科技城建设和西部地区开放发展具有重要作用。为加强信息便捷沟通和共享，实现办会参会高度协同，提高办会效率和质量，提升专业化、科学化水准，提升科技城会展形象，在有关领导的倡导下，由绵阳市博览局及科发会展公司，协同实施“中国（绵阳）科技城国际科技博览会网络服务系统”升级建设项目，并于第五届科博会上投入实际应用。"},
        // {title:"中国（绵阳）科技城国际科技博览会网络服务系统",content:"科博会是绵阳国家科技城开放合作的重要窗口和最佳平台，对助推中国科技城建设和西部地区开放发展具有重要作用。为加强信息便捷沟通和共享，实现办会参会高度协同，提高办会效率和质量，提升专业化、科学化水准，提升科技城会展形象，在有关领导的倡导下，由绵阳市博览局及科发会展公司，协同实施“中国（绵阳）科技城国际科技博览会网络服务系统”升级建设项目，并于第五届科博会上投入实际应用。"}
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.image-box {
  img {
    width: 500px;
  }
}
.m-case {
  padding-bottom: 50px;
  .content-box {
    padding: 0 50px;
    @media screen and (max-width: 768px) {
      display: inline;
      padding: 0;
    }
    .img-box {
      .img {
        width: 90%;
        margin: 0 auto;
      }
    }
    .m-article {
      text-align: center;
      // padding: 30px 0;
      .title {
        font-size: 24px;
        font-weight: bold;
        @media screen and (max-width: 768px) {
          margin-top: 10px;
          font-size: 18px;
        }
      }
      .content {
        text-align: left;
        margin: 20px 30px 0 30px;
        font-size: 16px;
        color: rgb(103, 114, 148);
        line-height: 1.769230769230769;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 9;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        // -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        @media screen and (max-width: 768px) {
          font-size: 14px;
          margin: 0;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
