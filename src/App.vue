<template>
  <div>

  <Header></Header>

    <!-- Content will be here! -->

  <Footer></Footer>

  </div>
</template>

<script>

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default {
  name: 'App',
  components: {
    Header,
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
