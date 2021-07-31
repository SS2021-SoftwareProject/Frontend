<template>
  <div class="container">

    <div class="card" style="width: 23rem;">

      <img :src=imageUrl class="card-img-top" alt="...">

      <div class="card-body">
        <h5 class="card-title">{{titleText}}</h5>
        <p class="card-text">{{descText}}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><b>Status : </b> {{statusText}}</li>
        <li class="list-group-item"><b>Progress : </b> ${{progressCurrent}} / $ {{progressMax}}</li>
        <li class="list-group-item">

          <div class="progress">
            <div class="progress-bar bg-primary" role="progressbar" :style="{width: percent+'%'}" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">{{percent}}%</div>
          </div>
        </li>
      </ul>
      <div class="card-body">

        <button class="btn btn-primary ms-1 me-5"
                @click="$router.push({ name: 'project', params: {id :  id }})">View</button>


        <button class="btn btn-primary ms-4 me-1"
                v-if="this.global.state.user"
                @click="$router.push({ name: 'Checkout', params: {id : id }})">Donate</button>

        <button class="btn btn-primary ms-4 me-1"
                v-if="!this.global.state.user"
                data-bs-toggle="modal" data-bs-target="#loginModal">Donate</button>

        <!--<button class="btn btn-primary me-1 ms-4" data-bs-toggle="modal" data-bs-target="#donatePopop">Donate</button> -->
      </div>
    </div>
    <br><br><br><br>

  </div>
</template>



<script>
export default {
  props: ['id','titleText', 'descText', 'statusText', 'progressCurrent', 'progressMax', "imageUrl"],
  data(){
    return {
      global: this.$store,
      percent : ((100 * this.progressCurrent)/this.progressMax).toFixed(2),
      //path : '../assets/' + this.imageName + ".jpg",
      message: '',
      donationAmount: 0,
    }
  },
  created(){
    //window.alert(this.id)
    //console.log(this.percent)
  }
}

</script>

<style scoped>

</style>