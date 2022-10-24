import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    resSongs: [],// 新碟数据 数组
    albumId: '',// 专辑 id
  },
  getters: {
  },
  mutations: {
    // 新碟 id 处理函数
    albumIdMutations(state, id) {
      state.albumId = id
      // 将 新碟 id 保存至本地
      window.sessionStorage.setItem("albumId", JSON.stringify(id));
    }
  },
  actions: {

  },
  modules: {
  }
})
