<template>
  <div class="m-title">
    <el-row type="flex" justify="center">
      <el-col tag="div" class="title-box" :span="20">
        <el-row type="flex" justify="space-between">
          <div>
            <div class="m-title">{{title}}</div>
            <div class="m-titleus">{{titleus}}</div>
          </div>
          <div class="infoBtn" v-if="button">
            <router-link :to="{ name: link }">
              <el-button>{{button}}</el-button>
            </router-link>
          </div>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "MyTitle",
  props: ["title", "titleus", "button", "link"]
};
</script>
<style lang="scss" scoped>
.title-box {
  padding-top: 50px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    padding-top: 30px;
  }
  .m-title {
    font-size: 28px;
    @media screen and (max-width: 768px) {
      font-size: 22px;
    }
  }
  .m-titleus {
    color: #c1c1c1;
    margin: 10px 0;
    @media screen and (max-width: 768px) {
      font-size: 12px;
    }
  }
  .infoBtn {
    .el-button {
      position: relative;
      top: 30px;
      border-radius: 0;
      border: 0px;
      background-color: #5ddffe;
      font-size: 13px;
      padding: 0 30px;
      height: 30px;
      border: 1px solid #5ddffe;
      @media screen and (max-width: 768px) {
        top: 16px;
      }
      &:hover {
        background-color: #fff;
      }
      &:hover span {
        color: #5ddffe;
      }
      span {
        font-size: 13px;
        line-height: 30px;
        height: 30px;
        color: #fff;
        &:hover {
          color: #5ddffe;
        }
      }
    }
  }
}
</style>