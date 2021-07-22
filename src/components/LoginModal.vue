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

// The logic for this template
export default {

  name: "LoginModal",

  // define methods under the `methods` object
  methods: {

    // Gets called upon login click to login and refresh the page
    login() {

      // `this` inside methods points to the Vue instance
      alert('Simulating login...')
      this.$root.$emit('LoginEvent', true);
    },
  },
}

</script>
