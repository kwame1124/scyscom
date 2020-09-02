<template>
  <div class="articleInfo">
    <el-row>
      <m-breadcrumb class="m-nav" :navList="navList" />
    </el-row>
    <el-row>
      <el-col :md="15" :sm="24" class="article-box">
        <p class="title">{{articleInfo.title}}</p>
        <p class="date">发布日期：{{articleInfo.createTime}}</p>
        <p class="content" v-html="articleInfo.content"></p>
      </el-col>
      <el-col :span="9" class="article-list hidden-md-and-down">
        <div class="article-item" v-for="(item, index) in articleList" :key="index">
          <router-link
            tag="p"
            class="title"
            :to="{ name:'articleinfo',params: { id: item.id}}"
          >{{ item.title }}</router-link>
          <p class="date">发布日期：{{item.createTime}}</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import MBreadcrumb from "@/components/public/Breadcrumb.vue";
export default {
  data() {
    return {
      articleInfo: {},
      articleList: [],
      navList: [
        { name: "首页", path: "/" },
        { name: "专题专栏", path: "/article" },
        { name: "文章详情" }
      ]
    };
  },
  mounted() {
    this.getArticleInfo(this.$route.params.id);
    this.getArticleList();
  },
  methods: {
    getArticleInfo(id) {
      this.$api.getArticleInfo(id).then(res => {
        this.articleInfo = res.data.data;
      });
    },
    getArticleList() {
      this.$api.getArticleList().then(res => {
        this.articleList = res.data.rows.slice(0, 5);
      });
    }
  },
  watch: {
    "$route.params.id": function(newVal, oldVal) {
      this.getArticleInfo(newVal);
    }
  },
  components: {
    MBreadcrumb
  }
};
</script>
<style lang="scss" scoped>
.articleInfo {
  background-color: #fff;
  padding-top: 85px;
  @media screen and (max-width: 768px) {
    padding-top: 50px;
  }
  .article-box {
    padding: 0px 90px 70px 130px;
    font-size: 16px;
    @media screen and (max-width: 768px) {
          padding: 0 30px;
        }
    p {
      padding-bottom: 25px;
    }
    .title {
      font-size: 26px;
    }
    .date {
      font-size: 13px;
      color: #adadad;
    }
    .content {
      word-wrap: break-word;
      word-break: break-all;
      color: rgb(102, 102, 102) !important;
    }
  }
  .article-list {
    padding: 0px 210px 70px 10px;
    .article-item {
      position: relative;
      .title {
        font-size: 15px;
        color: #373a41;
        padding: 15px 0 10px 0;
        &:hover {
          cursor: pointer;
          color: #3f81c1;
        }
      }
      .date {
        color: #bfbfbf;
        font-size: 12px;
        padding-bottom: 23px;
      }
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
    }
  }
}
</style>