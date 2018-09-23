// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "vue-material-design-icons/styles.css";
import VueAxios from "vue-axios";
import axios from "axios";
import VueI18n from "vue-i18n";
import MainPage from "./components/MainPage.vue";

Vue.use(VueAxios, axios);
Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.use(VueI18n);

Vue.config.productionTip = false;

const messages = {
  en: {
    message: {
      hello: "Your Logo"
    }
  },
  fr: {
    message: {
      hello: "Votre Marque"
    }
  }
};
// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: "en", // set locale
  messages // set locale messages
});

const routes = [
  {
    name: "main",
    path: "/",
    component: MainPage
  }
];

const router = new VueRouter({
  routes: routes,
  mode: "history"
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App),
  router,
  i18n
}).$mount("#app");
