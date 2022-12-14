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




// 时间过滤器
Vue.filter('dataFormate', function (time) {
  let dt = new Date(time);
  let y = dt.getFullYear();
  let m = (dt.getMonth() + 1 + '').padStart(2, '0');
  let d = (dt.getDate() + '').padStart(2, '0');
  return `${y}-${m}-${d}`
})

// 毫秒过滤器
Vue.filter('secondFormate', function (s) {
  let time = parseFloat(s) / 1000;
  if (s === 0 || isNaN(s)) { return '00:00' }
  if (time != null && time != '') {
    if (time < 60) { return `00:${(parseInt(time) + '').padStart(2, '0')}` }
    else if (time >= 60 && time <= 60 * 60) { return `${(parseInt(parseFloat(time / 60)) + '').padStart(2, '0')}:${(parseInt(parseFloat(time % 60)) + '').padStart(2, '0')}` }
  } else {
    return `${(parseInt(parseFloat(time / 60 / 60)) + '').padStart(2, '0')}:${((parseInt(parseFloat(time / 60 % 60)) + '') + '').padStart(2, '0')}:${(parseInt(parseFloat(time / 60 % 60 * 60 % 60)) + '').padStart(2, '0')}`
  }

})

// 播放数超万过滤器
Vue.filter('counFormate', function (count) {
  if (count < 10000) {
    return `${(count / 10000).toFixed(2)}万`
  }
  return `${Math.ceil(count / 10000)}万`
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
