import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import './assets/app.scss';
import VueRouter from 'vue-router';
//import * as VueGoogleMaps from 'vue2-google-maps'

import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module

//import Home from "./views/Home"
import HomePage from "./views/HomePage";
import Login from "./views/Login";
import Register from "./views/Register";
import ProjectView from "@/views/ProjectView";
import Faq from "./views/Faq";
import RequestData from "@/views/RequestData";

// requests
import axios from 'axios';
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

Vue.use(VueRouter, mdb, Input);

const routes = [
  { path: "/", component: HomePage},
  { path: "/login", component: Login},
  { path: "/register", component: Register},
  { path: "/project",component: ProjectView},
  { path: "/faq", component: Faq},
  { path: "/dataTest", component: RequestData}
];

const router = new VueRouter({
  routes,
  mode: "history"
});

Vue.config.productionTip = false

const title = "CharitAble";

//set title
router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title || title;
  });
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
