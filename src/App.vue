<template>
  <div>
  <div id="app">
    <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
            <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
            </li>
            <!--
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/Donate">Donate</router-link>
            </li>
            -->
          </ul>
          <form class="d-flex">
            <router-link class="nav-link active" aria-current="page" to="/Login">Login</router-link>
            <router-link class="nav-link active" aria-current="page" to="/Register">Register</router-link>

          </form>
        </div>
      </div>
    </nav>
    <br>

    <router-view></router-view>
  </div>


    <br><br><br><br> <br><br><br><br> <br><br><br><br> <br><br><br><br> <br><br><br><br>



  <Footer></Footer>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

import Footer from "@/components/Footer";
export default {
  name: 'App',
  components: {
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
