<template>
<div>
  <div class="container">
    <div class="row">

      <div class="col-md-5">
        <br><br><br><br><br><br>
        <h1 class="font-monospace">Donate Money with Blockchain</h1>
        <h5>Simple to use Blockchain Donations</h5>
        <br><br>
        <button class="btn btn-primary ms-1 me-3" @click="$router.push('page001')">Explore</button>
        <button class="btn btn-primary ms-1 me-3" @click="$router.push('page001')">Watch Video</button>
      </div>

      <div class="col-md-7">
        <img src="./../assets/homeWithout.png" class="img-fluid" alt="..." height="1280" width="1920">
      </div>
    </div>
  </div>

  <br><br><br><br>


  <!--
<div class="container">
  <div class="row">
    <img class='img-responsive' src="./../assets/donate.jpeg" alt="" />
  </div>
</div> -->



    <div class="container">
    <div class="row">
      <div class="col-md-4"> <HomeCard></HomeCard> </div>
      <div class="col-md-4"> <HomeCard></HomeCard> </div>
      <div class="col-md-4"> <HomeCard></HomeCard> </div>
    </div>

    <div class="row">
      <div class="col-md-4"> <HomeCard></HomeCard> </div>
      <div class="col-md-4"> <HomeCard></HomeCard> </div>
      <div class="col-md-4"> <HomeCard></HomeCard> </div>
    </div>

    <div class="row">
      <div class="col-md-4"> <HomeCard></HomeCard> </div>
      <div class="col-md-4"> <HomeCard></HomeCard> </div>
      <div class="col-md-4"> <HomeCard></HomeCard> </div>
    </div>
  </div>

  </div>
</template>



<script>
import HomeCard from "@/components/HomeCard";
export default {
  components: {HomeCard},
  created(){

  }

}

</script>

<style scoped>

.img {
  display: block;
  max-width: 100%;
  height: auto;
}
</style>