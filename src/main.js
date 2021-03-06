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
import Checkout from "@/views/Checkout";
import Explore from "@/views/Explore"
import ProjectView from "@/views/ProjectView";
import Faq from "@/views/Faq";

// requests & auth
import axios from 'axios';
import VueAxios from "vue-axios";
import store from './store';
Vue.use(VueAxios, axios);

// cookies = on (default in axios is off)
//axios.defaults.withCredentials = true;

// base url to be used for every http request
axios.defaults.baseURL = 'http://localhost:8081/';

//Allow all Methods and Origins during POST
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Access-Control-Allow-Methods'] = '*';


Vue.use(VueRouter, mdb, Input);

const routes = [
  { path: "/",name: "Home", component: HomePage },
  { path: "/about", component: About },
  { path: "/Explore", name: "Explore", component: Explore },
  { path: "/project/:id", name : "project", component: ProjectView },
  { path: "/faq", component: Faq },
  { path: "/Checkout/:id", name: "Checkout", component: Checkout }
];

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior(){
    document.getElementById('app').scrollIntoView();
    return{
      x:0,
      y:0,
      behavior: 'smooth',

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
