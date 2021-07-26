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
                <router-link class="nav-link active" aria-current="page" to="/about">
                  <a class="green">About</a>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/Explore">
                  <a class="green">Explore</a>
                </router-link>
              </li>

            </ul>

            <!-- Right flex area with login and register links -->
            <div class="d-flex flex-row">

              <button class="btn btn-link green text-capitalize" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
              <button class="btn btn-link green text-capitalize" data-bs-toggle="modal" data-bs-target="#registerModal">Register</button>
              <button ref="profileButton" class="btn btn-link green text-capitalize" data-bs-toggle="modal" data-bs-target="#userModal">Profile</button>

            </div>
          </div>
        </div>
      </nav>

      <br>

      <router-view></router-view>

      <!-- Login Modal -->
      <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-login">
          <div class="modal-content">
            <div class="modal-body">
              <LoginModal></LoginModal>
            </div>
          </div>
        </div>
      </div>

      <!-- Register Modal -->
      <div class="modal fade" id="registerModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-login">
          <div class="modal-content">
            <div class="modal-body">
              <RegisterModal></RegisterModal>
            </div>
          </div>
        </div>
      </div>

      <!-- User Modal -->
      <div class="modal fade" id="userModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-body">
              <UserProfile></UserProfile>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br><br><br><br> <br><br><br><br> <br><br><br><br> <br><br><br><br> <br><br><br><br>

    <Footer></Footer>
  </div>
</template>

<script>

import Footer from "@/components/Footer";
import LoginModal from "@/components/LoginModal";
import RegisterModal from "@/components/RegisterModal";
import UserProfile from "@/components/UserProfile";


// Logic
export default {

  name: 'App',
  components: {
    LoginModal,
    RegisterModal,
    UserProfile,
    Footer
  },

  // define methods under the `methods` object
  methods: {

    // Toggles an element by modifying its style
    show(el, state){
      el.style.display = state === true ? "inline" : "none";
    }
  },
  mounted(){

    // Disable the profile button for viewing the profile
    let el = this.$refs['profileButton']
    el.style.display = 'none'

    // Register event to show up the profile button once the user loged in or registered
    this.$root.$on('LoginEvent', (event) => this.show(el, event))
    this.$root.$on('RegisterEvent', (event) => this.show(el, event))
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