import axios from 'axios';
import store from '../index'

// calculate data based on store state
const getters = {
    isAuthenticated: () => true
};

//function to commit or dispatch a mutation
const actions = {

    // Save to localstorage
    async save(store, {name, item}){
        localStorage.setItem(name, item)
        return true
    },

    // Returns true or false if theres an object saved with that name
    async saved(store, name){
        return localStorage.getItem(name) !== null
    },

    // Loads an object from the localstorage by its name
    async load(store, name){
        return localStorage.getItem(name)
    },

    // Removes an object from the localstorage by its name
    async unsave(store, name){
        return localStorage.removeItem(name)
    },

    async LogIn({commit}, User){
        await axios.post('login', User);
        await commit('setUser', User.get('username'));
    },

    async LogOut({commit}){
        let user = null;
        commit('logout', user);
    },

    async Register({dispatch}, form){
        await axios.post('register', form);
        let UserForm = new FormData();
        UserForm.append('username', form.username);
        UserForm.append('password', form.password);
        await dispatch("LogIn", UserForm);
    }
};

//event that changes the state
const mutations = {

    setUser(username){
        store.state.user = username;
    },

    LogOut(){
        store.state.user = null;
    }
};

export default {
    getters,
    actions,
    mutations
};