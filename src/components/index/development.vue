<template>
  <div class="m-development">
    <my-title :title="'开发服务'" :titleus="'DEVELOPMENT SERVICES'" style="background-color:#f7f7f7;" />
    <el-row class="m-content" type="flex" justify="center">
      <el-col :span="20">
        <el-col class="item-card" v-for="(item, index) in List" :key="index">
          <i :class="'el-icon-' + item.icon"></i>
          <p class="title">{{ item.title }}</p>
          <p class="us">{{ item.us }}</p>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      List: [
        {
          title: "软件开发",
          us: "Software development",
          icon: "s-platform"
        },
        {
          title: "网站建设",
          us: "Website construction",
          icon: "upload"
        },
        {
          title: "应用APP",
          us: "Design and development",
          icon: "mobile-phone"
        },
        {
          title: "微信小程序",
          us: "Wechat applet",
          icon: "connection"
        },
        {
          title: "微信公众号",
          us: "WeChat official account",
          icon: "s-opportunity"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.m-development {
  background-image: url("https://ccdn.goodq.top/caches/a4e466277a25c095c62c095e6259acb4/aHR0cHM6Ly81ZDIzZTllNjYyNGUwLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDcvZjMzNzk5YmQ1MjJmMDZhNTY4YWRkNDdkOWIyZjc0YjgtOTAud2VicA_p_p100_p_3D_p_p100_p_3D.webp");
  background-attachment: fixed;
  border-bottom: 1px solid #ccc;
  .moudle-title {
    background-color: #f7f7f7;
  }
  .m-content {
    background-color: #000;
    opacity: 0.7;
    padding: 100px 0;
    text-align: center;
    margin: 0;
    color: #d3d3d3;
    @media screen and (max-width: 768px) {
      padding: 30px 0;
    }
    .item-card {
      @media screen and (min-width: 992px) {
        width: 20%;
      }
      @media screen and (max-width: 992px) {
        width: 33.3333333333333333333%;
        margin-bottom: 25px;
      }
      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
    i {
      font-size: 70px;
      margin-bottom: 20px;
    }
    .title {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .us {
      font-size: 13px;
    }
  }
}
</style>
