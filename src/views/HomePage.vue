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

          <button class="btn btn-primary ms-1 me-3" data-spy="scroll" @click="$router.push({name : 'Explore' })">Explore</button>
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
        <div class="col-md-4" v-for="project in projects" :key="project.id">
          <HomeCard
              :id=project.id
              :title-text=project.name
              :desc-text=project.beschreibung
              :status-text=project.status
              :progress-current=project.istBetrag
              :progress-max=project.sollBetrag
              :imageUrl=project.bild
          >
          </HomeCard>
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
      let MAX_PROJECT_COUNT = 9;
      for(let i = 0; i < MAX_PROJECT_COUNT; i++){
        if(i < response.data.projects.length)
        {
          this.projects.push(response.data.projects[i]);
        }
      }
      console.log(this.projects);

    }).catch(err => {
      console.log(err.response);
    });
  },
}
</script>

<style scoped>
</style>



