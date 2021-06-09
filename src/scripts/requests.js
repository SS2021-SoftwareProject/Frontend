import VueAxios from "vue-axios";

const axios = require('axios');

import Vue from 'vue'
import App from './App.vue'


/**
 * Method for general data fetching.
 * @param url name of resource on server
 * @returns {data} as JSON
 */
function fetch_data() {
    const config = {
        url: 'https://api.coindesk.com/v1/bpi/currentprice.json',
        method: 'get'
        //baseURL: 'localhost:8080/'
    };

    Vue.axios.request(config).then((response) => {
        console.log(response.data);
        return response.data;
    });
}

function post_data(data) {

}

