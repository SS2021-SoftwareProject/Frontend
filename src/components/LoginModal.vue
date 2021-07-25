<template>
  <div class="container">

    <h1 class="display-6" style="margin: 10%">Login</h1>
    <div class="row">

      <form>
        <div class="mb-4">
          <input type="email" class="form-control" id="loginInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email Adress...">
        </div>
        <div class="mb-4">
          <input type="password" class="form-control" id="registerInputPassword1" placeholder="Enter Password...">
        </div>
        <div class="mb-4">
          <button type="submit" class="btn btn-primary" style="width: 100%" v-on:click="login">Login</button>
        </div>
      </form>

    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

// The logic for this template
export default {

  name: "LoginModal",
  components:{},
  data(){
    return {
      form: {
        username: "",
        password: "",
      },
      showError:false
    };
  },

  // define methods under the `methods` object
  methods: {
  ...mapActions(["LogIn"]),

    // Gets called upon login click to login and refresh the page
    async login() {
      const User = new FormData();
      User.append("username", this.form.username);
      User.append("password", this.form.password);
      try {
        await this.LogIn(User);
        this.$router.push("Explore");
        this.showError = false;
      } catch(error){
        this.showError = true;
      }
      /**
      // `this` inside methods points to the Vue instance
      alert('Simulating login...')
      this.$root.$emit('LoginEvent', true); **/
    },
  },
}

</script>
