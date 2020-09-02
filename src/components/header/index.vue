<template>
  <div class="m-header">
    <el-row class="hidden-sm-and-down">
      <el-col :span="4">
        <div class="m-logo">
          <img style="padding-top:5px" src="@/assets/qr_logo/logo.png" alt />
        </div>
      </el-col>
      <el-col :span="18">
        <el-row tag="nav" class="m-nav" type="flex" justify="center" align="center">
          <el-row tag="ul" class="nav" type="flex" justify="center">
            <li v-for="(item, index) in navList" :key="index">
              <router-link
                :class="$store.state.curpage == index ? 'active' : ''"
                to="/"
                @click.native="changePage(index,item.title)"
              >{{ item.title }}</router-link>
              <i class="underline"></i>
            </li>
          </el-row>
        </el-row>
      </el-col>
    </el-row>
    <!-- md以下显示 -->
    <div class="md-nav hidden-md-and-up">
      <div class="nav-title" @click="navShow()">
        {{title}}
        <i :class="navFlag ? 'el-icon-arrow-up': 'el-icon-arrow-down'"></i>
      </div>
      <transition name="el-fade-in-linear">
        <ul v-show="navFlag">
          <li
            v-for="(item,index) in navList"
            :key="item.url"
            @click="navChange(item.title,index)"
          >{{item.title}}</li>
        </ul>
      </transition>
    </div>
  </div>
</template>
<script>
const delay = (function() {
  let timer = 0;
  return function(callback, ms) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
})();
export default {
  data() {
    return {
      title: "网站首页",
      navFlag: false,
      navList: [
        {
          title: "网站首页",
          url: "home"
        },
        {
          title: "智能会议",
          url: "mainproject"
        },
        {
          title: "项目案例",
          url: "case"
        },
        {
          title: "专题专栏",
          url: "specialcolumn"
        },
        {
          title: "关于有生",
          url: "chooseus"
        },
        {
          title: "开发服务",
          url: "development"
        },
        {
          title: "联系我们",
          url: "contactus"
        }
      ]
    };
  },
  mounted() {
    // 监听滚动事件
    window.addEventListener("scroll", this.lisenScroll);
  },
  destroy() {
    // 必须移除监听器，不然当该vue组件被销毁了，监听器还在就会出错
    window.removeEventListener("scroll", this.lisenScroll);
  },
  methods: {
    lisenScroll() {
      if (this.$route.name !== "index") {
        return false;
      }
      delay(() => {
        //执行部分
        this.onScroll();
      }, 300);
    },
    onScroll() {
      // 滚动监听器
      // 获取所有锚点元素
      const navContents = document.querySelectorAll(
        ".page-index .anchor-point"
      );
      // 所有锚点元素的 offsetTop
      const offsetTopArr = [];
      navContents.forEach(item => {
        offsetTopArr.push(item.offsetTop);
      });
      // 获取当前文档流的 scrollTop
      const scrollTop =
        document.documentElement.scrollTop + 150 ||
        document.body.scrollTop + 150;
      // console.log(scrollTop,offsetTopArr)
      // 定义当前点亮的导航下标
      let navIndex = 0;
      for (let n = 0; n < offsetTopArr.length; n++) {
        // 如果 scrollTop 大于等于第 n 个元素的 offsetTop 则说明 n-1 的内容已经完全不可见
        // 那么此时导航索引就应该是 n 了
        if (scrollTop >= offsetTopArr[n]) {
          navIndex = n;
        }
      }
      // console.log(navIndex)
      // 把下标赋值给 vue 的 data
      this.$store.commit("setCurpage", navIndex);
    },
    changePage(index, title) {
      this.title = title;
      this.$store.commit("setCurpage", index);
      // 获取目标的 offsetTop
      const targetOffsetTop = document.querySelectorAll(
        ".page-index .anchor-point"
      )[index].offsetTop;
      // 获取当前 offsetTop
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      // 定义一次跳 50 个像素，数字越大跳得越快，但是会有掉帧得感觉，步子迈大了会扯到蛋
      const STEP = 50;
      // 判断是往下滑还是往上滑
      if (scrollTop > targetOffsetTop) {
        // 往上滑
        smoothUp();
      } else {
        // 往下滑
        smoothDown();
      }
      // 定义往下滑函数
      function smoothDown() {
        // 如果当前 scrollTop 小于 targetOffsetTop 说明视口还没滑到指定位置
        if (scrollTop < targetOffsetTop) {
          // 如果和目标相差距离大于等于 STEP 就跳 STEP
          // 否则直接跳到目标点，目标是为了防止跳过了。
          if (targetOffsetTop - scrollTop >= STEP) {
            scrollTop += STEP;
          } else {
            scrollTop = targetOffsetTop;
          }
          document.body.scrollTop = scrollTop - 83;
          document.documentElement.scrollTop = scrollTop - 83;
          // 屏幕在绘制下一帧时会回调传给 requestAnimationFrame 的函数
          // 关于 requestAnimationFrame 可以自己查一下，在这种场景下，相比 setInterval 性价比更高
          requestAnimationFrame(smoothDown);
        }
      }
      // 定义往上滑函数
      function smoothUp() {
        if (scrollTop > targetOffsetTop) {
          if (scrollTop - targetOffsetTop >= STEP) {
            scrollTop -= STEP;
          } else {
            scrollTop = targetOffsetTop;
          }
          document.body.scrollTop = scrollTop - 83;
          document.documentElement.scrollTop = scrollTop - 83;
          requestAnimationFrame(smoothUp);
        }
      }
    },
    navShow() {
      this.navFlag = !this.navFlag;
    },
    navChange(title, index) {
      this.$router.push({ path: "/" });
      this.navFlag = !this.navFlag;
      this.title = title;
      this.changePage(index, title);
    }
  }
};
</script>
<style lang="scss" scoped>
.m-header {
  // padding: 0 100px;
  // width: 300px;
  width: 100%;
  // display: table;
  .m-logo {
    padding: 15px 0px;
    margin-left: 70%;
    img {
      // width: 125px;
      height: 50px;
    }
  }
  .m-nav {
    margin: 0;
    padding: 0;
    z-index: 999;
    font-size: 16px;
    font-weight: bold;
    .nav {
      list-style: none;
      height: 85px;
      > li {
        height: 85px;
        line-height: 85px;
        display: inline-block;
        position: relative;
        z-index: auto;
        vertical-align: middle;
        width: 4em;
        text-align: center;
        margin-right: 30px;
        &:hover .underline {
          transform: scaleX(1);
          width: 100%;
          opacity: 1;
        }
        &:hover a {
          color: #5ddffe;
        }
        a {
          color: #999;
          // padding: 31px 0 31px 0;
        }
        a.active {
          color: #5ddffe;
        }
        a.active + i {
          opacity: 1;
          width: 100%;
          transform: none;
        }
        .underline {
          background-color: #5ddffe;
          position: absolute;
          display: block;
          overflow: hidden;
          // bottom: -34px;
          bottom: -4px;
          width: 0;
          height: 3px;
          opacity: 0;
          transition: all 0.35s ease-in-out;
          transform: scale(0);
        }
      }
    }
  }
  .md-nav {
    text-align: center;
    font-size: 14px;
    color: #fff;
    .nav-title {
      padding: 15px 0;
      position: relative;
      cursor: pointer;
      &::after {
        position: absolute;
        top: 0;
        left: 0px;
        box-sizing: border-box;
        width: 200%;
        height: 200%;
        border-bottom: 1px solid #bababa;
        border-radius: inherit;
        content: " ";
        transform: scale(0.5);
        transform-origin: 0 0;
        pointer-events: none;
      }
      i {
        position: absolute;
        right: 15px;
      }
    }
    ul {
      li {
        cursor: pointer;
        padding: 15px 0;
        position: relative;
        &::after {
          position: absolute;
          top: 0;
          left: 0px;
          box-sizing: border-box;
          width: 200%;
          height: 200%;
          border-bottom: 1px solid #2c2c2c;
          border-radius: inherit;
          content: " ";
          transform: scale(0.5);
          transform-origin: 0 0;
          pointer-events: none;
        }
      }
    }
  }
}
</style>
