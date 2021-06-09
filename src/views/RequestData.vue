<template>
  <div id="example-2">
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      users: []
    }
  },
  methods: {
    fetchUsers: function () {
      const baseURI = 'https://jsonplaceholder.typicode.com/users'
      this.$http.get(baseURI)
          .then((result) => {
            this.users = result.data
          })
    }
  }
}
</script>
<style scoped>

</style>