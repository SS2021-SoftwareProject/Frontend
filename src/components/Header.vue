<template>
  <div>
    <div id="app">
      <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <!--<img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24">-->
            <img src="../assets/logo_541x500.png" alt="" width="39" height="36">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link active " aria-current="page" to="/">
                  <a class="green">Home</a>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/About">
                  <a class="green">About</a>
                </router-link>
              </li>
            </ul>
            <span v-if="isLoggedIn">
              <a @click="logout">Logout</a>
            </span>
            <span v-else>
              <form class="d-flex">
                <router-link class="nav-link active" aria-current="page" to="/Login">
                  <a class="green">Login</a>
                </router-link>
                <router-link class="nav-link active" aria-current="page" to="/Register">
                  <a class="green">Register</a>
                </router-link>
              </form>
            </span>
          </div>
        </div>
      </nav>
      <br>

      <router-view></router-view>
    </div>
    <br><br><br><br> <br><br><br><br> <br><br><br><br> <br><br><br><br>  <br><br><br><br>
  </div>
</template>

<script>
export default {
  name: "Header",
  computed: {
    isLoggedIn: function() { return this.$store.getters.isAuthenticated}
  },
  methods: {
    async logout(){
      await this.$store.dispatch('LogOut');
      this.$router.push('/login');
    }
  },
}
</script>

<style scoped>
.green{
  color: #95d387;
  text-decoration: none;
  outline: none;
}

.green:hover{
  color: #5b8053;
}
</style>