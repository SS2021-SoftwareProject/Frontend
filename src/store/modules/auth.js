import store from '../index'

// calculate data based on store state
const getters = {
    isAuthenticated: () => true
};

//function to commit or dispatch a mutation
const actions = {

    // Returns true or false if theres an object saved with that name
    async saved(store, name){
        return localStorage.getItem(name) !== null
    },

    // Logs in the user
    async login(store, {name, item}){

        console.log('test : '+name+" "+item)
        store.state.user = item
        localStorage.setItem(name, item)
        return true
    },

    async logout(store){

        console.log('Outlog : ')
        store.state.user = null
        return localStorage.removeItem('user')
    },

    async register(store, {name, item}){

        store.state.user = item
        localStorage.setItem(name, item)
        return true
        /*
        await axios.post('register', form);
        let UserForm = new FormData();
        UserForm.append('username', form.username);
        UserForm.append('password', form.password);
        await dispatch("LogIn", UserForm);
        */
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