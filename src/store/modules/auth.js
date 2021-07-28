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
            store.state.user = localStorage.getItem(userKey)
            return true
        }

        return false
    },

    // Logs in the user
    async login(commit, {mail, password}){

        // If login is possible, login otherwhise return false
        try {

            let res = await Vue.axios.post('https://f1853f87-28ef-4c6a-8923-41e04f56c8a7.mock.pstmn.io/login', null, { params: { mail, password}, headers: {'Acess-Control-Allow-Origin': 'http://localhost:8080'}})
            console.log('res : '+res)
            if (res.status == 200) {

                // Construct user from response
                let user = {
                    id: res.response.User_ID,
                    fname: res.response.User_Vorname,
                    lname: res.response.User_Nachname,
                    email: res.response.User_Email,
                    password: res.response.Password
                }

                store.state.user = user
                localStorage.setItem(userKey, user)
                return true
            } else return false;

        } catch(error){ return false }
    },

    // Registers the user
    async register(commit, {mail, password}){

        // If login is possible, login otherwhise return false
        try {

            let res = await Vue.axios.post('register', {mail, password})
            if (res.status == 200) {
                store.state.user = mail
                localStorage.setItem(userKey, mail)
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