<template>
  <div class="breadcrumb" style="padding-bottom:50px">
    <el-row class="bread-box" type="flex" justify="center">
      <el-col :span="20">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>当前位置：</el-breadcrumb-item>
          <el-breadcrumb-item v-for="(item,index) in navList" :key="index" :to="{path:item.path || null}">{{item.name}}</el-breadcrumb-item>
          <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>专题专栏</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item> -->
        </el-breadcrumb>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props:["navList"]
};
</script>
<style lang="scss">
.breadcrumb {
  // margin-bottom: 50px;
  .bread-box {
    background-color: #f7f7f7;
  }
  .el-breadcrumb {
    padding: 35px 0 35px 0px;
    .el-breadcrumb__item {
      &:nth-child(1) .el-breadcrumb__separator {
        display: none;
      }
      .el-breadcrumb__inner a,
      .el-breadcrumb__inner.is-link {
        font-weight: normal;
      }
    }
  }
}
</style>
