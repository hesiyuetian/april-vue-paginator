import Vue from 'vue'
import App from './App.vue'
import aprilVuePaginator from './lib/index.js' // 导入组件
Vue.use(aprilVuePaginator)
new Vue({
  el: '#app',
  render: h => h(App)
})
