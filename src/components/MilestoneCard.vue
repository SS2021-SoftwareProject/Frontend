<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title text-primary">{{title}}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Milestone - {{this.milestoneNumber}}</h6>
      <br>
      <p class="card-text">{{desc}}</p>
    </div>
  </div>
</template>



<script>
export default {
  props: ['milestoneNumber','title','desc' ],
  data(){
    return {
    }
  },
  created(){
  }
}

</script>

<style scoped>

</style>