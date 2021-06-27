<template>
  <div>
    <div id="app">
      <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light">
        <div class="container-fluid">

          <!-- The website icon -->
          <a class="navbar-brand" href="/">
            <!--<img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24">-->
            <img src="./assets/logo_541x500.png" alt="" width="39" height="36">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- Left area with home and about pages-->
          <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

              <li class="nav-item">
                <router-link class="nav-link active green" aria-current="page" to="/">
                  <a class="green">Home</a>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/About">
                  <a class="green">About</a>
                </router-link>
              </li>
            </ul>

            <!-- Right flex area with login and register links -->
            <div class="d-flex">

              <button class="btn btn-link green text-capitalize" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
              <button class="btn btn-link green text-capitalize" data-bs-toggle="modal" data-bs-target="#registerModal">Register</button>
              <button class="btn btn-link green text-capitalize" data-bs-toggle="modal" data-bs-target="#userModal">Profile</button>

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
                      <button type="submit" class="btn btn-primary" style="width: 100%">Login</button>
                    </div>
                  </form>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <!-- Regiser Modal -->
      <div class="modal fade" id="registerModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-login">
          <div class="modal-content">
            <div class="modal-body">

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
                    <button type="submit" class="btn btn-primary" style="width: 100%">Login</button>
                  </form>

                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

      <!-- User Modal -->
      <div class="modal fade" id="userModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-scrollable">
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
//import HelloWorld from './components/HelloWorld.vue'
import Footer from "@/components/Footer";
import UserProfile from "@/components/UserProfile";
export default {
  name: 'App',
  components: {
    UserProfile,
    Footer
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