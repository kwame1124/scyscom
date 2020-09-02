<template>
  <div class="m-swiperIndex">
    <el-carousel>
      <el-carousel-item v-for="(item, index) in swiperList" :key="index">
        <el-row
          tag="div"
          class="m-image"
          type="flex"
          justify="center"
          align="center"
          :style="{ backgroundImage: 'url(' + item.url + ')' }"
        >
          <div class="m-content">
            <p class="m-title">{{ item.text }}</p>
            <p class="m-subtitle" v-if="item.text2">{{ item.text2 }}</p>
            <p class="m-us" v-if="item.text3">{{ item.text3 }}</p>
            <div class="freeBtn" v-if="item.btn">
              <el-button type="primary">免费体验</el-button>
            </div>
          </div>
        </el-row>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["swiperList"]
};
</script>
<style lang="scss" scoped>
</style>
<style lang="scss">
.m-swiperIndex {
  .el-carousel__container {
    height: 650px;
    @media screen and (max-width: 992px) {
      height: 450px;
    }
    @media screen and (max-width: 768px) {
      height: 350px;
    }
    .m-image {
      width: 100%;
      height: 100%;
      background-size: cover;
      .m-content {
        padding-top: 230px;
        text-align: center;
        color: #fff;
        text-shadow: 7px 7px 9px #000;
        @media screen and (max-width: 992px) {
          padding-top: 150px;
        }
        @media screen and (max-width: 768px) {
          padding-top: 120px;
        }
        .m-title {
          font-size: 46px;
          font-weight: bold;
          @media screen and (max-width: 992px) {
            font-size: 40px;
          }
          @media screen and (max-width: 768px) {
            font-size: 16px;
          }
        }
        .m-subtitle {
          margin-top: 20px;
          font-weight: bold;
          font-size: 34px;
          @media screen and (max-width: 992px) {
            font-size: 28px;
          }
          @media screen and (max-width: 768px) {
            font-size: 14px;
          }
        }
        .m-us {
          font-weight: bold;
          margin: 20px 0 30px 0;
          font-size: 18px;
          @media screen and (max-width: 992px) {
            font-size: 16px;
          }
          @media screen and (max-width: 768px) {
            font-size: 10px;
          }
        }
        .freeBtn {
          .el-button {
            border-radius: 0;
            border: 0px;
            font-size: 14px;
            border-color: rgb(93, 223, 254);
            background-color: transparent;
            color: rgb(93, 223, 254);
            font-size: 13px;
            line-height: 30px;
            padding: 5px 40px;
            border: 2px solid #1195db;
            transition: all 0.5s ease-in-out;
            &:hover {
              transition: all 0.5s ease-in-out;
              background-color: #fff;
              border: 2px solid #fff;
            }
            &:hover span {
              color: #000;
            }
            span {
              font-size: 14px;
              line-height: 0px;
              height: 30px;
              color: #fff;
              font-size: 14px;
              transition: all 0.5s ease-in-out;
              &:hover {
                transition: all 0.5s ease-in-out;
                color: #000;
              }
            }
          }
        }
      }
    }
  }
}
</style>
