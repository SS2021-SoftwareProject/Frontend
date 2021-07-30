import store from '../index'
import Vue from 'vue'

// User-Key for the localStorage
const userKey = 'user'

// calculate data based on store state
const getters = {
    isAuthenticated: () => true
};

//function to commit or dispatch a mutation
const actions = {

    // Checks if user is still loged in and relogs him in
    async relog(commit){

        if(localStorage.getItem(userKey) !== null) {
            store.state.user = JSON.parse(localStorage.getItem(userKey))
            return true
        }

        return false
    },

    // Logs in the user
    async login(commit, {mail, password}){

        // If login is possible, login otherwhise return false
        try {

            let res = await Vue.axios.post('login', null, { params: { mail, password}})
            if (res.status == 200) {

                // Construct user from response
                let user = {
                    id: res.data.users[0].id,
                    fname: res.data.users[0].firstname,
                    lname: res.data.users[0].lastname,
                    email: res.data.users[0].email,
                }

                store.state.user = user
                localStorage.setItem(userKey, JSON.stringify(user))
                return true;
            } else return false;

        } catch(error){ return false }
    },

    // Registers the user
    async register(commit, {fname, lname, mail, password}){

        // If login is possible, login otherwhise return false
        try {

            let res = await Vue.axios.post('register', null, { params: { fname, lname, mail, password}})
            if (res.status == 200) {

                // Construct user from response
                let user = {
                    id: res.data.users[0].id,
                    fname: res.data.users[0].firstname,
                    lname: res.data.users[0].lastname,
                    email: res.data.users[0].email,
                }

                store.state.user = user
                localStorage.setItem(userKey, JSON.stringify(user))
                return true
            } else return false;

        } catch(error){ return false }
    },

    // Logs the user out
    async logout(){

        store.state.user = null
        return localStorage.removeItem('user')
    }
};

export default {
    userKey,
    getters,
    actions,
};