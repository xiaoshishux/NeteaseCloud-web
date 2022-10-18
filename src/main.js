import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import './assets/css/global.css'
import './assets/css/normalize.css'
import './assets/css/reset.css'
import './assets/font/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css';
import md5 from 'js-md5'
Vue.prototype.$md5 = md5


Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
