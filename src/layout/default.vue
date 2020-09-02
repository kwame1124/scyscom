<template>
  <div class="layout-default">
    <el-container>
      <el-header height>
        <my-header />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer height>
        <my-footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import MyHeader from "@/components/header/index.vue";
import MyFooter from "@/components/footer/index.vue";
export default {
  created() {
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(sessionStorage.getItem("store"))
        )
      );
    }
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    });
  },
  components: {
    MyHeader,
    MyFooter
  }
};
</script>

<style lang="scss" scoped>
.layout-default {
  position: relative;
  .el-header,
  .el-main,
  .el-footer {
    width: 100%;
    margin: 0 auto;
    padding: 0;
    overflow: unset;
  }
  .el-header {
    position: fixed;
    top: 0;
    background: #000;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    opacity: 0.75;
    color: #999;
    width: 100%;
    font-size: 13px;
    z-index: 99999;
    .m-header {
      margin: 0 auto;
    }
  }
}
</style>
