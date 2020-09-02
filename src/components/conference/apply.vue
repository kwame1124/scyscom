<template>
  <div class="m-apply">
    <div class="m-content">
      <el-row type="flex" justify="center">
        <el-col>
          <div class="module-title">应用功能</div>
          <div class="bottom-line"></div>
          <el-row type="flex" justify="center">
            <el-col :md="18" :sm="22" class="content-box">
              <el-col :md="12" :sm="24">
                <el-row type="flex" justify="center">
                  <el-col :md="20" :sm="24">
                    <el-carousel :autoplay="false" arrow="always" trigger="click" height="400px">
                      <el-carousel-item
                        v-for="(item,index) in phoneList"
                        :key="index"
                        style="display: flex;align-items:center"
                      >
                        <img class="phoneimg" :src="$api.baseURL + item.imgSrc" alt />
                      </el-carousel-item>
                    </el-carousel>
                  </el-col>
                </el-row>
              </el-col>
              <el-col class="article-box hidden-md-and-down" :md="12">
                <div class="article">
                  <p class="title">手机端</p>
                  <p class="content">{{phoneInfo}}</p>
                </div>
              </el-col>
            </el-col>
          </el-row>
          <!-- 电脑 -->
          <el-row type="flex" justify="center" align="middle">
            <el-col :md="18" :sm="22" class="content-box">
              <el-row type="flex" align="middle">
                <el-col class="article-box hidden-md-and-down" :md="12">
                  <div class="article">
                    <p class="title">电脑</p>
                    <p class="content">{{pcInfo}}</p>
                  </div>
                </el-col>
                <el-col :md="12" :sm="22">
                  <el-row type="flex" justify="center">
                    <el-col :md="20" :sm="24">
                      <el-carousel
                        :autoplay="false"
                        arrow="always"
                        trigger="click"
                        height="230px"
                      >
                        <el-carousel-item
                          v-for="(item,index) in pcList"
                          :key="index"
                          style="display: flex;align-items:center"
                        >
                          <img
                            class="pcimg"
                            :src="$api.baseURL + item.imgSrc"
                            alt
                          />
                        </el-carousel-item>
                      </el-carousel>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$api.getMeetingImg().then(res => {
      res.data.data.map(ele => {
        if (ele.type == "手机展示") {
          this.phoneList.push(ele);
        } else {
          this.pcList.push(ele);
        }
      });
    });
    this.$api.getMeetingInfo().then(res => {
      res.data.data.map(ele => {
        if (ele.type == "手机展示") {
          this.phoneInfo = ele.content;
        } else {
          this.pcInfo = ele.content;
        }
      });
    });
  },
  data() {
    return {
      phoneList: [],
      pcList: [],
      phoneInfo: "",
      pcInfo: ""
    };
  }
};
</script>
<style lang="scss" scoped>
.m-apply {
  .m-content {
    padding: 30px 0;
    text-align: center;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
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
    .phoneimg {
      margin: 0 auto;
      width: 42%;
    }
    .pcimg {
      margin: 0 auto;
      width: 80%;
    }
    .content-box {
      padding: 15px 0;
      .article-box {
        display: table;
        padding: 0 70px;
        height: 100%;
        .article {
          display: table-cell;
          vertical-align: middle;
          .title {
            font-size: 26px;
            font-weight: bold;
            color: #515151;
          }
          .content {
            text-align: left;
            margin: 30px;
            font-size: 16px;
            color: rgb(103, 114, 148);
            line-height: 1.769230769230769;
          }
        }
      }
    }
  }
}
</style>
<style lang="scss">
.m-apply {
  .el-carousel__arrow--left,
  .el-carousel__arrow--right {
    border-radius: 0;
    background-color: #000;
    opacity: 0.6;
  }
}
</style>