import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css

Vue.use(Element)

// 导入字体图标库
import 'font-awesome/less/font-awesome.less';

import "./theme/light.scss";
import "./theme/dark.scss";

import App from './App'
import router from './router'
import store from './store'

import './mock' // simulation data generator

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
