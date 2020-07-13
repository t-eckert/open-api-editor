import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import "./assets/styles.css";

Vue.config.productionTip = false;

// todo 2020-06-14 t-eckert set these from package.json using Bable at build time.
export const version = "0.1.0";
export const released = "14 June 2020";

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
