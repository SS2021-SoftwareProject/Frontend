<template>
  <div class="modal fade" id="registerModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-login">
      <div class="modal-content">
        <div class="modal-body">

          <!-- The register form itself -->
          <div class="container">

            <h1 class="display-6" style="margin: 10%">Register</h1>
            <div class="row">

              <!-- The fields -->
              <div class="mb-3">
                <input type="text" class="form-control" id="firstName" placeholder="First Name" v-model="fname">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control" id="lastName" placeholder="Last Name" v-model="lname">
              </div>
              <div class="mb-3">
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" v-model="email">
              </div>
              <div class="mb-3">
                <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
              </div>

              <button type="submit" class="btn btn-primary" style="width: 100%" v-on:click="register">Register</button>

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

  name: "RegisterModal",
  data(){
    return {
      global: this.$store,
      fname: "",
      lname: "",
      email: "",
      password: ""
    };
  },
  // define methods under the `methods` object
  methods: {

    // Gets called upon register click to register and refresh the page
    async register() {

      // Assign valid user object and save it to the localstorage
      let result = await this.global.dispatch('register', {fname: this.fname, lname: this.lname, email: this.email, password: this.password})
      if(result === false) alert('Could not login... wrong username or password')
      else {
        this.$router.push("/Explore");
        $('#registerModal.modal').hide()
        $('.modal-backdrop').remove();
      }
    },
  },
}

</script>
