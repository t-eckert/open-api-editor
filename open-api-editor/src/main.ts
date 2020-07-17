import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import "./assets/tailwind.css";
import "./assets/styles.css";

Vue.config.productionTip = false;

export const version = "0.1.0";

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
