<template>
  <div class="container">

    <h1 class="display-6" style="margin: 10%">Register</h1>
    <div class="row">

      <form>
        <div class="mb-3">
          <input type="text" class="form-control" id="firstName" placeholder="First Name">
        </div>

        <div class="mb-3">
          <input type="text" class="form-control" id="lastName" placeholder="Last Name">
        </div>

        <div class="mb-3">
          <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email">
        </div>
        <div class="mb-3">
          <input type="password" class="form-control" id="password" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-primary" style="width: 100%" v-on:click="register">Register</button>
      </form>

    </div>
  </div>
</template>

<script>

// The logic for this template
export default {

  name: "RegisterModal",

  // define methods under the `methods` object
  methods: {

    // Gets called upon register click to register and refresh the page
    register() {

      // `this` inside methods points to the Vue instance
      alert('Simulating registration...')
      this.$root.$emit('RegisterEvent', true);
    },
  },
}

</script>
