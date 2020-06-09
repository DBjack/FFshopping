import Vue from "vue";
import App from "./App.vue";
import router from "./router";
Vue.config.productionTip = false;
//移动端适配处理
import "./common/rem.js";
//引入 vant ui
import "./pluginunit/vant.js";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
