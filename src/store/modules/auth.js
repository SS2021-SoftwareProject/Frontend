import store from '../index'

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
    async login(commit, user){

        store.state.user = user
        localStorage.setItem(userKey, user)
        return true
    },

    // Registers the user
    async register(commit, user){

        store.state.user = user
        localStorage.setItem(userKey, user)
        return true
        /*
        await axios.post('register', form);
        let UserForm = new FormData();
        UserForm.append('username', form.username);
        UserForm.append('password', form.password);
        await dispatch("LogIn", UserForm);
        */
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