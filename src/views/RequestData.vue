<template>
  <!-- listing users from API -->
  <div class="user-list">
    <ul>
    <li v-for="user in users" :key="user.name"> {{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'

/**
 * Example fetch from json placeholder (users)
 */
export default {
  name: 'user-list',
  data () {
    return {
      users: [],
      user: ''}},
  created: function () {
      const baseURI = 'https://jsonplaceholder.typicode.com/users'
      Vue.axios.get(baseURI).then((response) =>{
          console.log(response.data)
          this.users = response.data;
      });},
}
</script>
<style scoped>
</style>