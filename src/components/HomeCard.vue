<template>
  <div class="container">

    <div class="card" style="width: 23rem;">

      <img src="../assets/afrika2.jpg" class="card-img-top" alt="...">

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
        <button class="btn btn-primary ms-1 me-5" @click="$router.push('/project')">View</button>
        <button class="btn btn-primary me-1 ms-4" data-bs-toggle="modal" data-bs-target="#donatePopop">Donate</button>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="donatePopop" tabindex="-1" aria-labelledby="donatePopop" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Make Your Donation</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" data-bs-dismiss="modal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">


            <div class="input-group mb-3">
              <input type="number" min="0.00" step="0.50" value="1.00" class="form-control mb-2 w-75" v-model="donationAmount">
              <select class="form-select form-select-sm mb-2 btn-primary" aria-label=".form-select-sm example">
                <option selected value="Euro">€</option>
                <option value="Dollar">$</option>
                <option value="Pound">£</option>
                <option value="Yen">¥</option>
              </select>
            </div>

            <input type="text" v-bind:value="donationAmount / 2075.94 + ' Ξ'"  class="form-control mb-2 w-100 text-center " aria-label="Text input with dropdown button"  disabled>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <a class="btn btn-primary" href="/Checkout" role="button">Donate</a>
          </div>
        </div>
      </div>
    </div>


    <br><br><br><br>

  </div>
</template>



<script>
export default {
  props: ['id','titleText',"imageName", 'descText', 'statusText', 'progressCurrent', 'progressMax'],
  data(){
    return {
      percent : ((100 * this.progressCurrent)/this.progressMax).toFixed(2),
      path : '../assets/' + this.imageName + ".jpg",
      message: '',
      donationAmount: 0,
    }
  },
  created(){
      //window.alert(this.path)
    console.log(this.path)
    console.log(this.percent)
  }
}

</script>

<style scoped>

</style>