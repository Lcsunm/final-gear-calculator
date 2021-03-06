import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import axios from 'axios'
import {AxiosInstance} from 'axios'

Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

declare module 'vue/types/vue' {
  interface Vue {
    $http: AxiosInstance
  }
}
