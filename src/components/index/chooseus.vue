<template>
  <div class="m-chooseus">
    <my-title :title="'选择我们'" :titleus="'CHOOSE US'" />
    <el-row class="m-content" type="flex" justify="center">
      <el-col :span="20">
        <el-row :gutter="50">
          <el-col :lg="8" :sm="12" v-for="(item, index) in cardList" :key="index">
            <el-card shadow="hover">
              <div class="m-card">
                <i :class="item.icon"></i>
                <p class="title">{{ item.title }}</p>
                <p>{{ item.p1 }}</p>
                <p>{{ item.p2 }}</p>
                <p class="last-p">{{ item.p3 }}</p>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cardList: [
        {
          icon: "el-icon-mouse",
          title: "畅享互联网＋价值",
          p1: "助推政府执行力",
          p2: "增强企业运行力",
          p3: "专业·精准·便捷"
        },
        {
          icon: "el-icon-suitcase-1",
          title: "管理更高效",
          p1: "协同应用定制 ",
          p2: "云化应用开发",
          p3: "自动·智能·智慧"
        },
        {
          icon: "el-icon-connection",
          title: "协同更便捷",
          p1: "促使上下游协同",
          p2: "完善好运行机制",
          p3: "独立·自主·优化"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.m-chooseus {
  padding-bottom: 50px;
  background-color: #fff;
  .m-content {
    .m-card {
      width: 80%;
      padding: 30px 15px;
      .last-p {
        border-bottom: 1px solid #777777;
        padding-bottom: 30px;
      }
      i {
        color: #409eff;
        font-size: 40px;
        margin-bottom: 20px;
      }
      .title {
        margin-top: 10px;
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
        color: #000;
      }
      p {
        font-size: 13px;
        color: rgb(119, 119, 119);
        line-height: 30px;
        letter-spacing: 1px;
      }
    }
  }
}
</style>

<style lang="scss">
.m-chooseus {
  .m-content {
    :nth-child(1) .el-card {
      background-image: url("../../assets/public/it.png");
    }
    :nth-child(2) .el-card {
      background-image: url("../../assets/public/pm.png");
    }
    :nth-child(3) .el-card {
      background-image: url("../../assets/public/ot.png");
    }
    .el-card {
      background-position: 70% 50%;
      background-size: cover;
      background-repeat: no-repeat;
      transition: all 0.3s ease-in-out;
      @media screen and (max-width: 1200px) {
        margin-bottom: 25px;
      }
      &:hover .el-card__body {
        background-color: #223851;
        transition: all 0.3s ease-in-out;
        opacity: 0.85;
      }
      &:hover .last-p {
        border-bottom: 1px solid #ffd15a !important;
        transition: all 0.5s ease-in-out;
      }
      &:hover i {
        color: #ffd15a !important;
        transition: all 0.3s ease-in-out;
      }
      &:hover p {
        color: #fff !important;
      }
    }
  }
}
</style>
