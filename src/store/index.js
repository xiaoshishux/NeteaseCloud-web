import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    resSongs: [],// 新碟数据 数组
    albumId: '',// 专辑 id
    singerId: '', // 歌手 id
    songId: '',// 歌曲 id
    mvId: '', // mv id
  },
  getters: {
  },
  mutations: {
    // 新碟 id 处理函数
    albumIdMutations(state, id) {
      state.albumId = id
      // 将 新碟 id 保存至本地
      window.sessionStorage.setItem("albumId", JSON.stringify(id));
    },
    // 歌手 id 处理函数
    singerIdMutations(state, id) {
      state.singerId = id
      window.sessionStorage.setItem('singerId', JSON.stringify(id))
    },
    // 歌曲 id 处理函数
    SongIdMutations(state, id) {
      state.songId = id;
      window.sessionStorage.setItem('songId', JSON.stringify(id))
    },
    // mv id 处理函数
    mvIdIdMutations(state, id) {
      state.mvId = id;
      window.sessionStorage.setItem('mvId', JSON.stringify(id))
    }
  },
  actions: {

  },
  modules: {
  }
})
