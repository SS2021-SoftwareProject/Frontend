<template>

  <div style="  overflow-x: scroll;">

    <div class="container">
      <div class="row">

        <div class="col-md-12">

          <br><br>

          <h1 class="font-monospace">Explore All Projects</h1>
        </div>
      </div>
      </div>
    <br><br><br><br>


    <div class="container" id="projects">

      <div class="row">
        <div class="col-md-4" v-for="project in projects" :key="project.id">
          <HomeCard
              :id="project.id"
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
  name: "Explore",
  data() {
    return {
      projects: [],
      project: ''
    }
  },
  created: function () {

    document.body.className = '';

    const baseURI = 'projects'
    Vue.axios.get(baseURI, {

    }).then((response) => {
      this.projects = response.data.projects;
    }).catch(err => {
      console.log(err.response);
    });
  },
}
</script>

<style scoped>
</style>