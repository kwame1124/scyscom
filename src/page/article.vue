<template>
  <div class="m-special">
    <el-row>
      <m-breadcrumb :navList="navList" />
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="20" style="borde:101px solid red">
        <el-row :gutter="50">
          <el-col :span="6" class="hidden-md-and-down">
            <el-menu default-active class="el-menu-vertical-demo" :unique-opened="true">
              <div class="menutitle-box">
                <div class="menu-title">专题专栏</div>
                <div class="menu-us">SPECIAL COLUMN</div>
              </div>
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
            <div style="margin-top:20px">
              <el-pagination
                background
                layout="prev, pager, next"
                :total="total"
                @current-change="handleCurrentChange"
                :hide-on-single-page="true"
              ></el-pagination>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MBreadcrumb from "@/components/public/Breadcrumb.vue";
export default {
  mounted() {
    this.getSpecialnav();
    this.getArticleList();
  },
  data() {
    return {
      page: {
        pageNum: 1,
        pageSize: 10
      },
      total: 0,
      dataList: [],
      articleList: [],
      navList: [{ name: "首页", path: "/" }, { name: "专题专栏" }]
    };
  },
  methods: {
    getSpecialnav() {
      this.$api.getSpecialnav().then(res => {
        this.dataList = res.data.data;
      });
    },
    getArticleList() {
      this.$api.getArticleList(this.page).then(res => {
        res.data.rows.forEach(ele => {
          ele.content = this.changeHtml(ele.content);
        });
        this.total = res.data.total;
        this.articleList = res.data.rows;
      });
    },
    changeArticle(item) {
      this.$api.getArticleList({ aboutId: item.id }).then(res => {
        this.articleList = res.data.rows;
        res.data.rows.forEach(ele => {
          ele.content = this.changeHtml(ele.content);
        });
        this.total = res.data.total;
      });
    },
    handleCurrentChange(val) {
      this.page.pageNum = val;
      this.getArticleList();
    },
    changeHtml(html) {
      html = html.replace(/<\/?[^>]*>/g, ""); //去除HTML tag
      html = html.replace(/[ | ]*\n/g, "\n"); //去除行尾空白
      html = html.replace(/\n[\s| | ]*\r/g, "\n"); //去除多余空行
      html = html.replace(/ /gi, ""); //去掉
      return html;
    }
  },
  components: {
    MBreadcrumb
  }
};
</script>
<style lang="scss" scoped>
.m-special {
  background-color: #fff;
  padding: 85px 0 50px 0;
  @media screen and (max-width: 768px) {
    padding-top: 50px;
  }
  .article-box {
    border: 1px solid #ccc;
    background-color: #fff;
    @media screen and (max-width: 768px) {
      border: none;
    }
    .article-item {
      cursor: pointer;
      padding: 20px 35px;
      position: relative;
      @media screen and (max-width: 768px) {
        padding: 15px 0px;
        &:first-child {
          margin-top: -40px;
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
    background-image: url("../assets/public/empty.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 430px 0;
  }
}
.menutitle-box {
  margin: 30px 40px 0 40px;
  padding-bottom: 20px;
  border-bottom: 2px solid #bababa;
  .menu-title {
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .menu-us {
    font-size: 13px;
    color: #bababa;
  }
}
</style>

<style lang="scss">
.el-menu-vertical-demo {
  border: 1px solid #ccc;
  min-height: 345px;
  width: 270px;
}
.el-submenu__title {
  margin: 0 20px;
}

.el-submenu__title:focus,
.el-submenu__title:hover {
  background-color: #fff;
  color: #3f81c1;
}
.el-submenu__title {
  position: relative;
  &::after {
    position: absolute;
    top: 0;
    left: 17px;
    box-sizing: border-box;
    width: 170%;
    height: 200%;
    border-bottom: 1px solid #bababa;
    border-radius: inherit;
    content: " ";
    transform: scale(0.5);
    transform-origin: 0 0;
    pointer-events: none;
  }
}
</style>
