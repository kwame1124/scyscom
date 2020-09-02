import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import api from "./api/api.js";
import 'element-ui/lib/theme-chalk/display.css';
import MyTitle from '@/components/public/title.vue'

Vue.component("MyTitle", MyTitle);//全局自定义组件

router.afterEach(to => {
  if (to.name == "index") {
    store.state.curpage = 0;
  }
  window.scrollTo(0, 0);
});

Vue.prototype.$api = api;

Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
