<template>

  <!-- The modal -->
  <div class="modal fade" id="loginModal" ref="loginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-login">
      <div class="modal-content">
        <div class="modal-body">

          <!-- The login interface itself -->
          <div class="container">
            <h1 class="display-6" style="margin: 10%">Login</h1>
            <div class="row">

                <!-- The login fields-->
                <div class="mb-4">
                  <input type="email" class="form-control" id="loginInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email Adress..." v-model="email">
                </div>
                <div class="mb-4">
                  <input type="password" class="form-control" id="registerInputPassword1" placeholder="Enter Password..." v-model="password">
                </div>
                <div class="mb-4">
                  <button type="submit" class="btn btn-primary" style="width: 100%" v-on:click="login">Login</button>
                </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

// The logic for this template
export default {

  name: "LoginModal",
  components: {},
  data(){
    return {
      global: this.$store,
      email: "",
      password: "",
      showError:false
    };
  },

  // define methods under the `methods` object
  methods: {

    // Gets called upon login click to login and refresh the page
    async login() {

      // Assign valid user object and save it to the localstorage
      let result = await this.global.dispatch('login', {email: this.email, password: this.password})
      if(result === false) alert('Could not login... wrong username or password')
      else {
        this.$router.push("/Explore");
        $('#loginModal.modal').hide()
        $('.modal-backdrop').remove();
      }
    },
  },
}

</script>
