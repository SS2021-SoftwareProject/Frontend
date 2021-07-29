<template>
  <div class="container">
    <br><br>

    <div class="row">
      <div class="col-md-5">
        <img class="thumbnail img-responsive" src="../assets/afrika2.jpg" alt=""/>
      </div>

      <div class="col-md-1"></div>

      <div class="col-md-6">
        <h2 class="text-start">{{this.title}}</h2>
        <h5 class="text-start">{{desc}}</h5>

        <br>

        <p class="fs-6 text-start text-primary">Funds Raised</p>
        <div class="progress" style="height: 20px;">
          <div class="progress-bar" role="progressbar" :style="{width: percent+'%'}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{percent}}%</div>
        </div>

        <br><br>

        <h6 class="text-start">Status</h6>
        <h6 class="text-start text-primary">{{status}}</h6>

        <br>

        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <a href="#milestones">
            <button class="btn btn-primary me-md-2" type="button">
                Milestones
            </button>
          </a>
          <a class="btn btn-primary" href="/Checkout" role="button">Donate</a>

          <!-- <button class="btn btn-primary ms-4 me-1" @click="$router.push({ name: 'Checkout', params: {id : id }})">Donate</button> -->

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
        <h5 class="text-start">The Malkohi internally displaced persons (IDP) camp in Adamawa State, Nigeria,
          currently has just one hand-pump water borehole (well and hand pump). <br><br>

          It serves a population of 2,000-plus IDPs, most of whom are children and adolescents.
          ChildVoice is building a new Youth Empowerment Center to
          provide rehabilitative and skills training services for up to 200 ChildVoice students living in the camp.<br><br>


          <b>But this one existing well is simply not sufficient to meet the needs a skills training facility.</b>
          To meet those needs, <b>ChildVoice seeks to raise $5,600 to drill a
          new water well for its new Youth Empowerment Center.</b></h5>
        <br><br>
      </div>

      <div class="col-md-2"></div>

      <div class="col-md-3">
        <br>
        <img class="thumbnail img-responsive" src="../assets/africa.jpg" alt=""/>
      </div>
    </div>

    <br><br><br><br><br><br><br><br>


    <div class="row" >
      <div class="col-md-7">
        <br>
        <h2 class="font-monospace">Problems to Address</h2>
        <br>
        <h5 class="text-start">ChildVoice has been providing counseling, skills training,
          and related services to traumatized adolescent girls and their children in Nigeria for three years now.
          The organization is now on the verge of solidifying their presence in the Malkohi IDP camp with a new
          Youth Empowerment Center, making their students’ dreams of having expanded agricultural and other
          vocational training programs a reality.<br><br>

          While this is an amazing development, the fact is <b>without a reliable water source to supply the new center,
            these enhanced programs will simply remain dreams.</b><br><br>

          A reliable water well is a critical part of the new Youth Empowerment Center. Last year, the camp’s only
          borehole pump failed -- a life-threatening problem in a country where the temperatures can exceed 100 degrees
          Fahrenheit during the dry season. The NGO responsible for its installation was unable to effect repairs due
          to the COVID-19 pandemic. Residents became increasingly desperate for this single source of fresh water
          to be restored. Because ChildVoice continued to maintain a presence in the camp during the pandemic,
          it handled the repairs.<br><br>

          But as ChildVoice began planning the construction of a new training center,
          a stark reality quickly became clear: <b>the camp’s single hand-pump well simply can’t
          produce enough water to meet the needs of their expanded agriculture program and
            other vocational programs that require water.</b><br><br>

          The agriculture program is especially important given ongoing hunger issues in the camp and beyond.
          One of the most important features of the program that requires a reliable water source will be drip
          irrigation, which will allow ChildVoice to teach dry season farming. Demonstration plots
          will also rely heavily on water. Because water is essential for these agriculture programs to
          be successful, it’s no understatement that for ChildVoice's students living in the IDP camp,
          <b>water is life.</b><br><br>

        </h5>
        <br><br>
      </div>

      <div class="col-md-2"></div>

      <div class="col-md-3">
        <br><br><br><br><br><br>
        <img class="thumbnail img-responsive" src="../assets/afrika3.jpg" alt=""/>
      </div>
    </div>

    <br><br><br><br><br><br><br><br>

    <div class="row" >
      <div class="col-md-7">
        <br>
        <h2 class="font-monospace">Solution</h2>
        <br>
        <h5 class="text-start">ChildVoice has solidified plans to expand its presence in the camp, and recently
          received a grant to build a new Youth Empowerment Center.
          For ChildVoice's students living in the Malkohi IDP camp – many of whom are victims of Boko Haram
          and other violent insurgent groups – <b>water is a vital component of the programs they have developed
          to help war-affected youth recover from trauma and overwhelming loss. Without reliable access to water,
          ChildVoice simply will not be able to run their agriculture, culinary, and other water-dependent
            skills training programs.</b><br><br>

          As a crucial part of their new Youth Empowerment Center in the IDP camp, a new water well -- consisting of a
          borehole, solar-powered pump, storage tank, and taps -- will address a fundamental rehabilitative and economic
          development need that will otherwise go unmet. <b>Water is essential for ChildVoice to provide life-changing
            agricultural and other vocational training programs for hundreds of their students.</b><br><br>

        </h5>
        <br><br>
      </div>

      <div class="col-md-2"></div>

      <div class="col-md-3">
        <br><br><br><br>
        <img class="thumbnail img-responsive" src="../assets/africa.jpg" alt=""/>
      </div>
    </div>

    <br><br><br><br><br><br><br><br>
    <br><br><br><br>

  <section id="milestones"></section>
    <br><br><br><br>

    <h1 class="font-monospace" >The Milestones</h1>
    <br><br><br><br><br><br>

    <div class="row">
      <div class="col-md-4">
        <MilestoneCard
          milestoneNumber="1"
          title="Water for the people"
          desc="Poor access to improved water and sanitation in Nigeria remains a major
                contributing factor to high morbidity and mortality rates among children under five.
                 Only 26.5 per cent of the population"
          >
        </MilestoneCard>
      </div>

      <div class="col-md-4">
        <MilestoneCard
            milestoneNumber="2"
            title="Nigeria crisis briefing"
            desc="Nigeria, the most populous country in Africa, has endured decades of political instability
            and economic inequality. Ongoing violence continues to force people to flee their homes in the
            northeast and other conflict zones to seek safety in other parts of the country"
        >
        </MilestoneCard>
      </div>


      <div class="col-md-4">
        <MilestoneCard
            milestoneNumber="3"
            title="Women in Nigeria"
            desc="Their motivations are personal. “I looked at the little opportunity I had compared to the men around
            me,” 29-year-old Catherine explains. “I had limited time to study, because I was responsible for all the
            chores as a woman. I always had high expectations on my shoulders — but looking at where I am now,
            I’ve been able to overcome all of this."
        >
        </MilestoneCard>
      </div>
    </div>

    <br>

    <div class="row">
      <div class="col-md-4">
        <MilestoneCard
            milestoneNumber="4"
            title="Hunger in Nigeria"
            desc="n Nigeria's Borno state, 300,000 children are expected to suffer from severe acute malnutrition
             over the coming year. ... Long-term conflict is the common factor linking the hunger crises in Yemen,
              South Sudan, Somalia and Nigeria; the emergency is man-made"
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

  props: ['id'],

  components: {MilestoneCard},
  data() {
    return {
      project: '',
      title: '',
      desc: '',
      status: '',
      percent: '',

    }
  },
  created() {

    let projectID = this.$route.params.id-1;

    //window.alert(this.$route.params.id)

    const baseURI = 'projects'

    Vue.axios.get(baseURI, {}).then((response) => {

      this.project = response.data.projects[projectID];

      this.title = this.project.name
      this.desc = this.project.beschreibung;
      this.status = this.project.status;

      this.percent = ((100 * this.project.istBetrag)/this.project.sollBetrag).toFixed(2)

      //window.alert(this.project) Provide water for up to 200 ChildVoice students living in Nigeria
      console.log(this.project)

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