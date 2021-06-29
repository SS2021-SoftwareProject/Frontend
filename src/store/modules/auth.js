import axios from 'axios';

// data
const state = {
    user: null
};
// calculate data based on store state
const getters = {
    isAuthenticated: state => !!state.user,
    StateUser: state => state.user,
};

//function to commit or dispatch a mutation
const actions = {

    async LogIn({commit}, User){
        await axios.post('login', User);
        await commit('setUser', User.get('username'));
    },

    async LogOut({commit}){
        let user = null;
        commit('logout', user);
    }
};

//event that changes the state
const mutations = {

    setUser(state, username){
        state.user = username;
    },

    LogOut(state){
        state.user = null;
    }
};


export default {
    state,
    getters,
    actions,
    mutations
};