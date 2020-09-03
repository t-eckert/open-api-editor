import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import "./assets/normalize.css";
import "./assets/styles.css";
import Unicon from "vue-unicons";
import {
  uniCopy,
  uniClipboard,
  uniFileImport,
  uniFileExport,
  uniUsdSquare,
  uniAngleDown,
  uniAngleLeft,
  uniAngleLeftB,
  uniAngleRight,
  uniAngleRightB,
  uniAngleUp,
  uniCheckCircle,
  uniInfoCircle,
  uniLinkAlt,
  uniMultiply,
  uniMinus,
  uniPlus,
  uniTimes
  // @ts-ignore
} from "vue-unicons/src/icons";

// Add the Unicons to the app.
// Unicons: https://antonreshetov.github.io/vue-unicons/
Unicon.add([
  uniCopy,
  uniClipboard,
  uniFileImport,
  uniFileExport,
  uniUsdSquare,
  uniAngleDown,
  uniAngleLeft,
  uniAngleLeftB,
  uniAngleRight,
  uniAngleRightB,
  uniAngleUp,
  uniCheckCircle,
  uniInfoCircle,
  uniLinkAlt,
  uniMultiply,
  uniMinus,
  uniPlus,
  uniTimes
]);
Vue.use(Unicon);

Vue.config.productionTip = false;

export const version = "0.1.0";

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
