import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    curpage: 0
  },
  mutations: {
    setCurpage(state, val) {
      state.curpage = val;
    }
  },
  actions: {
    setCurpage({ commit }, val) {
      // 异步请求数据
      commit("setCurpage", val);
    }
  },
  modules: {}
});
