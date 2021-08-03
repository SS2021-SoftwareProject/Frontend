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
    async login(commit, {email, password}){

        // If login is possible, login otherwhise return false
        try {

            let res = await Vue.axios.post('/users/login', null, { params: { email, password}})
            if (res.status == 200) {

                console.log("res: ");
                console.log(res);
                // Construct user from response
                let user = {
                    id: res.data.user.id,
                    firstname: res.data.user.firstname,
                    lastname: res.data.user.lastname,
                    email: res.data.user.email,
                    // registered_since : res.data.RegisterDate, TODO: CHANGE
                }

                store.state.user = user
                localStorage.setItem(userKey, JSON.stringify (user))
                return true;
            } else return false;

        } catch(error){ return false }
    },

    // Registers the user
    async register(commit, {firstname, lastname, email, password}){

        // If login is possible, login otherwhise return false
        try {

            let res = await Vue.axios.post('/users/signup', null, { params: { firstname, lastname, email, password}})
            if (res.status == 200) {

                // Construct user from response
                let user = {
                    id: res.data.id,
                    firstname: res.data.firstname,
                    lastname: res.data.lastname,
                    email: res.data.email,
                    registered_since : res.data.RegisterDate,
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