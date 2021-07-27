<template>
  <div class="container">

    <h1 class="display-6" style="margin: 10%">Login</h1>
    <div class="row">


        <div class="mb-4">
          <input type="email" class="form-control" id="loginInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email Adress...">
        </div>
        <div class="mb-4">
          <input type="password" class="form-control" id="registerInputPassword1" placeholder="Enter Password...">
        </div>
        <div class="mb-4">
          <button type="submit" class="btn btn-primary" style="width: 100%" v-on:click="login">Login</button>
        </div>


    </div>
  </div>
</template>

<script>

// The logic for this template
export default {

  name: "LoginModal",

  data(){
    return {
      global: this.$store,
      username: "",
      password: "",
      showError:false
    };
  },

  // define methods under the `methods` object
  methods: {

    // Gets called upon login click to login and refresh the page
    async login() {

    /*
      const User = new FormData();
      User.append("username", this.form.username);
      User.append("password", this.form.password);*/

      // Assign valid user object and save it to the localstorage
      this.global.dispatch('login', {name: 'user', item: 'WUHU'})

      /*
      try {

        await this.LogIn(User);
        this.$router.push("Explore");
        this.showError = false;
      } catch(error){
        this.showError = true;
      }*/
    },
  },
}

</script>
