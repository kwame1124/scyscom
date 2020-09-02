import Vue from "vue";
import VueRouter from "vue-router";
import defaulPage from "@/layout/default.vue";
import Index from "@/page/index.vue";
import Conference from "@/page/conference.vue";
import Article from "@/page/article.vue";
import ArticleInfo from "@/page/articleInfo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "defaulPage",
    component: defaulPage,
    redirect: "/index",
    children: [
      {
        path: "/index",
        name: "index",
        component: Index
      },
      {
        path: "/conference",
        name: "conference",
        component: Conference
      },
      {
        path: "/article",
        name: "article",
        component: Article
      },
      {
        path: "/articleinfo/:id",
        name: "articleinfo",
        component: ArticleInfo
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  // console.log(next)
  next();
});

export default router;
