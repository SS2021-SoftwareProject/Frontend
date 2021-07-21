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
import About from "@/views/About";
import ProjectView from "@/views/ProjectView";
import Faq from "@/views/Faq";
import RequestData from "@/views/RequestData";

// requests & auth
import axios from 'axios';
import VueAxios from "vue-axios";
import store from './store';
Vue.use(VueAxios, axios);

// cookies = on (default in axios is off)
axios.defaults.withCredentials = true;
axios.defaults.baseURL = ''

Vue.use(VueRouter, mdb, Input);

const routes = [
  { path: "/", component: HomePage },
  { path: "/about", component: About },
  { path: "/project/:id",name : "project", component: ProjectView },
  { path: "/faq", component: Faq },
  { path: "/dataTest", component: RequestData }
];

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior(){
    return{
      x :0,
      y:0,
      behavior : 'smooth',
    };
  }
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
  store
}).$mount('#app')
