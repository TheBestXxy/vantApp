import Vue from 'vue'
import App from './App.vue'
import router from './router'
import http from './http'
import Cookies from 'js-cookie'

import '@/styles/global.css' // global css

import common from '@/api/common.js'
import '@/api/screen.js'

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.prototype.$axios = http;
Vue.prototype.common = common;
Vue.prototype.Cookies = Cookies;

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')