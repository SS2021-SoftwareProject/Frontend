<template>
  <div class="container">
    <h1 class="display-6">Login</h1>
    <br/>
    <br/>


    <div class="row">

      <div class="col-md-4"></div>

      <div class="col-md-4">
        <form>
          <div class="mb-3">
            <input type="password" class="form-control" id="firstName" placeholder="First Name">
          </div>

          <div class="mb-3">
            <input type="password" class="form-control" id="lastName" placeholder="Last Name">
          </div>

          <div class="mb-3">
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email">
          </div>
          <div class="mb-3">
            <input type="password" class="form-control" id="password" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
        </form>
      </div>

      <div class="col-md-3"></div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>


</style>