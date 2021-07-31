<template>
  <div>
    <div id="app">
      <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light">
        <div class="container-fluid">

          <!-- The website icon -->
          <a class="navbar-brand" href="/">
            <!--<img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24">-->
            <img src="./assets/logo_592x557.png" alt="" width="39" height="36">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- Left area with home and about pages-->
          <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

              <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/Explore">
                  <a class="green">Explore</a>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/about">
                  <a class="green">About</a>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/faq">
                  <a class="green">FAQ</a>
                </router-link>
              </li>

            </ul>

            <!-- Right flex area with login and register links -->
            <div class="d-flex flex-row">

              <button class="btn btn-link green text-capitalize" v-if="!this.global.state.user" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
              <button class="btn btn-link green text-capitalize" v-if="!this.global.state.user" data-bs-toggle="modal" data-bs-target="#registerModal">Register</button>
              <button class="btn btn-link green text-capitalize" v-if="this.global.state.user" @click="this.logout">Logout</button>
              <button ref="profileButton" class="btn btn-link green text-capitalize" v-if="this.global.state.user" data-bs-toggle="modal" data-bs-target="#userModal">Profile</button>

            </div>
          </div>
        </div>
      </nav>

      <br>
      <router-view></router-view>

      <!-- Login Modal -->
      <LoginModal></LoginModal>

      <!-- Register Modal -->
      <RegisterModal></RegisterModal>

      <!-- User Modal -->
      <UserProfile></UserProfile>
    </div>

    <br><br><br><br> <br><br><br>

    <Footer></Footer>
  </div>
</template>

<script>

import Footer from "@/components/Footer";
import LoginModal from "@/components/LoginModal";
import RegisterModal from "@/components/RegisterModal";
import UserProfile from "@/components/UserProfile";
import { mapActions } from 'vuex'

// Logic
export default {

  name: 'App',
  components: {
    LoginModal,
    RegisterModal,
    UserProfile,
    Footer
  },

  data(){
    return {
      global: this.$store
    }
  },

  // Clone method from auth.js into app for being used in html
  methods:{
    ...mapActions(['logout']),
  },

  // Relog user if previous loged in and still valid
  async mounted(){
    this.global.dispatch('relog')
    //console.log(this.global.state.user);
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  #margin-top: 60px;
}
</style>