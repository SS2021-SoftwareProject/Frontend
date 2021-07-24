<template>

  <div>

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
export default {
  components: {HomeCard},
  name: "Explore"
}
</script>

<style scoped>

</style>