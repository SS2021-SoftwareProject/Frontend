<template>
  <div class="container">
    <br><br>

    <div class="row">
      <div class="col-md-5">
        <!-- <img class="thumbnail img-responsive" src="../assets/afrika2.jpg" alt=""/> -->
        <img class="thumbnail img-responsive" :src=bild alt=""/>
      </div>

      <div class="col-md-1"></div>

      <div class="col-md-6">
        <h2 class="text-start">{{this.title}}</h2>
        <h5 class="text-start">{{desc}}</h5>

        <br>

        <p class="fs-6 text-start ">Funds Raised : {{this.istBetrag}}$ / {{this.sollBetrag}} $</p>
        <div class="progress" style="height: 20px;">
          <div class="progress-bar" role="progressbar" :style="{width: percent+'%'}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{percent}}%</div>
        </div>

        <br><br>

        <h6 class="text-start">Status</h6>
        <h6 class="text-start text-primary">{{status}}</h6>

        <br>

        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <a @click="scrollMeTo('milestones')">
            <button class="btn btn-primary me-md-2" type="button" value="Milestones">Milestones
            </button>
          </a>

          <!--
          <a class="btn btn-primary" href="/Checkout" role="button">Donate</a>

          <button class="btn btn-primary ms-4 me-1"
                  @click="$router.push({ name: 'Checkout', params: {id : this.id  }})">Donate</button>
          -->
          <button class="btn btn-primary ms-4 me-1"
                  v-if="this.global.state.user"
                  @click="$router.push({ name: 'Checkout', params: {id : id }})">Donate</button>

          <button class="btn btn-primary ms-4 me-1"
                  v-if="!this.global.state.user"
                  data-bs-toggle="modal" data-bs-target="#loginModal">Donate</button>

        </div>

      </div>
    </div>
    <br><br><br><br><br><br><br><br>
    <br><br><br>

    <h1 class="font-monospace">Project Overview</h1>
    <br><br><br>


    <div class="row" >
      <div class="col-md-7">
        <br>
        <h2 class="font-monospace">Summary</h2>
        <br>
        <h5 class="text-start">{{this.summary}}
        </h5>
      </div>

      <div class="col-md-2"></div>

      <div class="col-md-3">
        <br>
        <img class="thumbnail img-responsive" :src=this.image1 alt=""/>
      </div>
    </div>

    <br><br><br><br><br><br><br><br>


    <div class="row" >
      <div class="col-md-7">
        <br>
        <h2 class="font-monospace">Problems to Address</h2>
        <br>
        <h5 class="text-start"> {{this.problems}}

        </h5>
        <br><br>
      </div>

      <div class="col-md-2"></div>

      <div class="col-md-3">
        <br><br><br><br><br><br>
        <img class="thumbnail img-responsive" :src=this.image2 alt=""/>
      </div>
    </div>

    <br><br><br><br><br><br><br><br>

    <div class="row" >
      <div class="col-md-7">
        <br>
        <h2 class="font-monospace">Solution</h2>
        <br>
        <h5 class="text-start">{{this.solution}}

        </h5>
        <br><br>
      </div>

      <div class="col-md-2"></div>

      <div class="col-md-3">
        <br><br><br><br>
        <img class="thumbnail img-responsive" :src=this.image3 alt=""/>
      </div>
    </div>

    <br><br><br><br><br><br><br><br>
    <br><br><br><br>

  <section id="milestones" ref="milestones"></section>
    <br><br><br><br>

    <h1 class="font-monospace" >The Milestones</h1>
    <br><br><br><br><br><br>

    <div class="row">
      <div class="col-md-4" v-for="milestone in milestones" :key="milestone.betrag">
        <MilestoneCard
            :amount=milestone.betrag
            :title=milestone.titel
            :desc= milestone.beschreibung
        >
        </MilestoneCard>
      </div>

    </div>


  </div>
</template>


<script>
import Vue from 'vue'
import MilestoneCard from "../components/MilestoneCard";

import { useRouter, useRoute } from 'vue-router'

export default {

 // props: ['id'],

  components: {MilestoneCard},
  data() {
    return {
      global: this.$store,
      id: '',
      bild: '',
      project: '',
      title: '',
      desc: '',
      status: '',
      percent: '',
      istBetrag: '',
      sollBetrag: '',
      summary: '',
      problems: '',
      solution: '',
      image1: '',
      image2: '',
      image3: '',
      milestones: [],
    }
  },

  //scrolls to the refName Element (in our case used by an reference to milestones)
  methods: {
    scrollMeTo(refName) {
      const element = this.$refs[refName];
      const top = element.offsetTop;

      window.scrollTo(0, top);
    }
  },

  created() {

    let projectID = this.$route.params.id-1;

    this.id = this.$route.params.id;

    const baseURI = 'projects'

    Vue.axios.get(baseURI, {}).then((response) => {

      this.project = response.data[projectID];

      this.title = this.project.name
      this.desc = this.project.beschreibung
      this.status = this.project.status
      this.istBetrag = this.project.istBetrag
      this.sollBetrag = this.project.sollBetrag
      this.bild = this.project.bild
      this.summary = this.project.descSummary
      this.solution = this.project.descSolution
      this.problems = this.project.descProblem

      this.percent = ((100 * this.project.istBetrag)/this.project.sollBetrag).toFixed(2)

    }).catch(err => {
      console.log(err.response);
    });


    //Get Overview data

    Vue.axios.get('projects/descriptions/'+projectID+1, {}).then((response) => {

      this.image1 = response.data.imageSum
      this.image2 = response.data.imageSol
      this.image3 = response.data.imageProb

    }).catch(err => {
      console.log(err.response);
    });




    //Get Milestones
    const milestones = 'milestone'

    Vue.axios.get(milestones, {}).then((response) => {

      this.milestones = response.data

    }).catch(err => {
      console.log(err.response);
    });


  },
}

</script>

<style scoped>
img {
  display: block;
  max-width: 100%;
  height: auto;
}
</style>