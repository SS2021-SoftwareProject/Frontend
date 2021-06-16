<template>
<div>
  <div class="container">
    <div class="row">

      <div class="col-md-5">

        <br><br><br><br><br><br>

        <!-- Eycatcher -->
        <h1 class="font-monospace">Donate Money with Blockchain</h1>
        <h5>Simple to use Blockchain Donations</h5>

        <br><br>

        <button class="btn btn-primary ms-1 me-3" data-spy="scroll" data-bs-target="#projects">Explore</button>
        <button class="btn btn-primary ms-1 me-3" data-bs-toggle="modal" data-bs-target="#videoModal">Watch Video</button>

        <!-- Video Modal -->
        <div class="modal fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content ">
        <button class="btn btn-primary ms-1 me-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Watch Video</button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog PopupDialog">
            <div class="modal-content">
              <div class="modal-body">

                <div class="embed-responsive embed-responsive-16by9 Video">
                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/dQw4w9WgXcQ" id="video"  allowscriptaccess="always" allow="autoplay" allowfullscreen="always"
                          style="width:100%; height:100%; border:none;">></iframe>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-7">
        <img src="./../assets/homeWithout.png" class="img-fluid" alt="..." height="1280" width="1920">
      </div>
    </div>
  </div>

  <br><br><br><br>


    <div class="container" id="projects">
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

</style>