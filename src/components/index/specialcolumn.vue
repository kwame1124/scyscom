<template>
  <div class="m-special">
    <!-- <el-row>
      <div class="title-box">
        <el-row type="flex" justify="space-between">
          <div>
            <div class="m-title">专栏专题</div>
            <div class="m-titleus">SPECIAL COLUMN</div>
          </div>
          <div class="infoBtn">
            <router-link :to="{ name: 'article' }">
              <el-button>查看详情</el-button>
            </router-link>
          </div>
        </el-row>
      </div>
    </el-row>-->
    <my-title :title="'专栏专题'" :titleus="'SPECIAL COLUMN'" :button="'查看更多'" :link="'article'" />
    <el-row type="flex" justify="center">
      <el-col :span="20">
        <el-col :span="6" class="hidden-md-and-down">
          <el-menu
            default-active
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :unique-opened="true"
          >
            <el-submenu :index="index.toString()" v-for="(item, index) in dataList" :key="index">
              <template slot="title">
                <span>{{ item.topicName }}</span>
              </template>
              <el-menu-item
                :index="index + '-' + cindex"
                v-for="(citem, cindex) in item.children"
                :key="cindex"
                @click="changeArticle(citem)"
              >{{ citem.columnName }}</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
        <el-col :md="18" :sm="24">
          <div class="article-box" v-show="articleList.length !== 0">
            <router-link
              tag="div"
              class="article-item"
              :to="{ name:'articleinfo',params: { id: item.id}}"
              v-for="(item, index) in articleList"
              :key="index"
            >
              <el-row type="flex" justify="space-between">
                <p class="article-title">{{ item.title }}</p>
                <p class="article-time">{{item.createTime}}</p>
              </el-row>
              <p class="article-content">{{ item.content }}</p>
            </router-link>
          </div>
          <!-- 空白 -->
          <div class="empty-box" v-show="articleList.length == 0"></div>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$api.getSpecialnav().then(res => {
      this.dataList = res.data.data;
    });
    this.$api.getThreearticle().then(res => {
      res.data.data.forEach(ele => {
        ele.content = this.changeHtml(ele.content);
      });
      this.articleList = res.data.data.slice(0, 3);
    });
  },
  data() {
    return {
      dataList: [],
      articleList: []
    };
  },
  methods: {
    changeArticle(item) {
      this.$api.getArticleList({ aboutId: item.id }).then(res => {
        this.articleList = res.data.rows;
        res.data.rows.forEach(ele => {
          ele.content = this.changeHtml(ele.content);
        });
        this.articleList = res.data.rows.slice(0, 3);
      });
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    changeHtml(html) {
      html = html.replace(/<\/?[^>]*>/g, ""); //去除HTML tag
      html = html.replace(/[ | ]*\n/g, "\n"); //去除行尾空白
      html = html.replace(/\n[\s| | ]*\r/g, "\n"); //去除多余空行
      html = html.replace(/ /gi, ""); //去掉
      return html;
    }
  }
};
</script>
<style lang="scss" scoped>
.m-special {
  padding-bottom: 50px;
  @media screen and (max-width: 768px) {
    padding-bottom: 30px;
  }
  .article-box {
    border: 1px solid #ccc;
    background-color: #fff;
    @media screen and (max-width: 768px) {
      border: none;
      background-color: #f7f7f7;
    }
    .article-item {
      padding: 30px 50px;
      position: relative;
      cursor: pointer;
      @media screen and (max-width: 768px) {
        padding: 15px 0px;
        &:first-child {
          margin-top: -30px;
        }
      }

      &:hover .article-title {
        color: #3f81c1;
      }
      &:hover .article-content {
        color: #bababa;
      }
      &:last-child {
        &::after {
          border-bottom: none;
        }
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
      .article-title {
        font-size: 18px;
        margin-bottom: 20px;
        @media screen and (max-width: 768px) {
          font-size: 16px;
          margin-bottom: 10px;
        }
      }
      .article-time {
        font-size: 13px;
        color: #999;
      }
      .article-content {
        font-size: 13px;
        color: #999;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
  .empty-box {
    height: 345px;
    background-image: url("../../assets/public/empty.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 430px 0;
  }
}
</style>
<style lang="scss">
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
</style>
