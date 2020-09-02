<template>
  <div id="anchor-chooseus" class="m-choose">
    <div class="m-content">
      <el-row type="flex" justify="center">
        <el-col>
          <div class="module-title">项目概述</div>
          <div class="bottom-line"></div>
        </el-col>
      </el-row>
      <el-row class="article-content" type="flex" justify="center">
        <el-col :span="20">
          <el-col :md="12" :sm="24">
            <el-collapse v-model="activeName" accordion>
              <el-collapse-item :name="index"  v-for="(item,index) in dataList" :key="index">
                <template slot="title">
                  <i class="header-icon el-icon-info"></i>
                  {{item.title}}
                </template>
                <div v-html="item.content">
                  
                </div>
              </el-collapse-item>
            </el-collapse>
          </el-col>
          <el-col  :span="12" class="image-box hidden-md-and-down">
          </el-col>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  mounted(){
    this.$api.getSummary().then(res=>{
      this.dataList = res.data.data;
    })
  },
  data() {
    return {
      activeName: 0,
      dataList:[]
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.m-choose {
  background: #fff;
  padding-bottom: 30px;
}
.moudle-title {
  background-color: #fff;
}
.title-box {
  border-bottom: 1px solid #ccc;
  .m-title {
    font-size: 28px;
  }
  .m-titleus {
    color: #c1c1c1;
    margin: 10px 0;
  }
}

.m-content {
  text-align: center;
  .article-content {
    margin-top: 50px;
  }
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
  .image-box {
    height: 320px;
    // border: 1px solid red;
    text-align: center;
    background-image: url("https://ccdn.goodq.top/caches/a4e466277a25c095c62c095e6259acb4/aHR0cHM6Ly81ZDIzZTllNjYyNGUwLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDcvMDBhNTM5YjU1N2Y3MDFhMjE3NmE1YzY5MmMwMTgwNDAtNTAweDg4Ni05MC53ZWJw.webp");
    background-position: 60% 40%;
    background-repeat: no-repeat;
    background-size: 50%;
    .sub-image {
      display: inline-block;
      margin: 0 auto;
      border: 1px solid #000;
      height: 500px;
    }
  }
}
</style>

<style lang="scss">
.el-collapse {
  border: none;
  i {
    margin-right: 20px;
  }
}
.el-collapse-item__arrow {
  display: none;
}
.el-collapse-item__header {
  height: 55px;
  background-color: #deeefc;
  margin-bottom: 15px;
  padding-left: 20px;
  font-size: 16px;
}
.el-collapse-item__header.is-active {
  background-color: #4185f4;
  color: #fff;
}
.el-collapse-item__content {
  padding-left: 25px;
  padding-right: 25px;
  text-align: left;
  font-size: 16px;
  color: rgb(103, 114, 148);
}
.el-collapse-item__wrap {
  border: none;
}
</style>
