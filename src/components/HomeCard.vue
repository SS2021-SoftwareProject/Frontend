<template>
  <div class="container">

    <div class="card" style="width: 23rem;">
      <img src="../assets/afrika2.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Save the Children</h5>
        <p class="card-text">Hier könnte ihre Werbung stehen! Hier könnte ihre Werbung stehen!Hier könnte ihre Werbung stehen!</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><b>Status : </b> Funding (42 Days Left)</li>
        <li class="list-group-item"><b>Progress : </b> $5.000 / $10.000</li>
        <li class="list-group-item">

          <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
          </div>

        </li>
      </ul>
      <div class="card-body">
        <button class="btn btn-primary ms-1 me-5" @click="$router.push('page001')">View</button>
        <button class="btn btn-primary me-1 ms-4" @click="$router.push('Donate')">Donate</button>
      </div>
    </div>


    <br><br><br><br>

  </div>
</template>



<script>
export default {

  created(){

  }

}

</script>

<style scoped>

.img {
  display: block;
  max-width: 100%;
  height: auto;
}
</style>