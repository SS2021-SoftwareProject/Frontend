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
          <button class="btn btn-primary ms-1 me-3" data-bs-toggle="modal" data-bs-target="#videoModal">Watch Video
          </button>

          <!-- Video Modal -->
          <div class="modal fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
              <div class="modal-content ">
                <div class="modal-body">

                  <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/dQw4w9WgXcQ" id="video"
                            allowscriptaccess="always" allow="autoplay"></iframe>
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
        <div class="col-md-4">
          <HomeCard
              id="0"
              title-text="Fresh Water for Children"
              desc-text="Provide water for up to 200 ChildVoice students living in Nigeria’s Malkohi Internally Displaced Persons (IDP) camp"
              status-text="Funding (42 Days Left)"
              progress-current="4.000"
              progress-max="7.000"
          >
          </HomeCard>
        </div>

        <div class="col-md-4">
          <HomeCard
              id="1"
              title-text="Dirty Water for Children"
              image-name="afrika2"
              desc-text="Lets Provide Children with Dirty Water!"
              status-text="Funding (442 Days Left)"
              progress-current="6.000"
              progress-max="7.000"
          >
          </HomeCard>
        </div>


        <div class="col-md-4">
          <HomeCard
              id="2"
              title-text="No Water for Children"
              desc-text="no Water :("
              status-text="Funding (2 Days Left)"
              progress-current="7.000"
              progress-max="7.000"
          >
          </HomeCard>
        </div>


      </div>

      <div class="row">
        <div class="col-md-4">
          <HomeCard></HomeCard>
        </div>
        <div class="col-md-4">
          <HomeCard></HomeCard>
        </div>
        <div class="col-md-4">
          <HomeCard></HomeCard>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <HomeCard></HomeCard>
        </div>
        <div class="col-md-4">
          <HomeCard></HomeCard>
        </div>
        <div class="col-md-4">
          <HomeCard></HomeCard>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
import HomeCard from "@/components/HomeCard";
import Vue from 'vue'

export default {
  components: {HomeCard},
  data() {
    return {
      projects: [],
      project: ''
    }
  },
  created: function () {
    const baseURI = 'projects'
    Vue.axios.get(baseURI, {

    }).then((response) => {
      console.log(response.data)
      this.projects = response.data;

    }).catch(err => {
      console.log(err.response);
    });
  },
}
</script>

<style scoped>
</style>