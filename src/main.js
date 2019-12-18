import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import http from "./sdk/http";

import "@/styles/global.css"; // global css
import "@/utils/screen.js";
import "@/utils/loading.js";

// 引入vant
import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);

Vue.prototype.$axios = http;

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");