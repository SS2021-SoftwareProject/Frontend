<template>
<div>
  <div class="container">
    <div class="row">

      <div class="col-md-5">
        <br><br><br><br><br><br>
        <h1 class="font-monospace">Donate Money with Blockchain</h1>
        <h5>Simple to use Blockchain Donations</h5>
        <br><br>
        <button class="btn btn-primary ms-1 me-3" data-spy="scroll" data-bs-target="#projects">Explore</button>

        <button class="btn btn-primary ms-1 me-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Watch Video</button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
              </div>
              <div class="modal-body">

                <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/dQw4w9WgXcQ" id="video"  allowscriptaccess="always" allow="autoplay"></iframe>
                </div>

              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
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