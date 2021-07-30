<template>
  <div class="container">
    <div class="row mb-5">
      <div class="col-auto align-self-end">
        <div class="text-start">
          <img id="avatar" src="../assets/logo_592x557.png" alt="user avatar" class="p-3">
        </div>
      </div>
      <div class="col-auto align-self-end">
        <h1 class="font-monospace fw-bolder display-4" v-if="this.global.state.user">{{this.global.state.user.firstname}} {{this.global.state.user.lastname}}</h1>
      </div>
    </div>

    <div class="d-flex align-items-start">
      <div class="nav flex-column nav-pills me-5" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <button class="nav-link active fs-6" id="v-pills-overview-tab" data-bs-toggle="pill" data-bs-target="#v-pills-overview" type="button" role="tab" aria-controls="v-pills-overview" aria-selected="true">Overview</button>
        <button class="nav-link fs-6" id="v-pills-contributions-tab" data-bs-toggle="pill" data-bs-target="#v-pills-contributions" type="button" role="tab" aria-controls="v-pills-contributions" aria-selected="false">Contributions</button>
      </div>

      <div class="tab-content" id="v-pills-tabContent">
        <div class="tab-pane fade show active" id="v-pills-overview" role="tabpanel" aria-labelledby="v-pills-overview-tab">
          <h3 class="mb-4 text-start">Profile Info</h3>
          <table class="table table-lg align-middle text-start">
            <tbody>
              <tr>
                <th scope="row"><strong>First Name</strong></th>
                <td id="firstName" v-if="this.global.state.user">{{this.global.state.user.firstname}}</td>
              </tr>
              <tr class="table-secondary">
                <th scope="row"><strong>Last Name</strong></th>
                <td id="lastName" v-if="this.global.state.user">{{this.global.state.user.lastname}}</td>
              </tr>
              <tr>
                <th scope="row"><strong>Email</strong></th>
                <td id="email" v-if="this.global.state.user">{{this.global.state.user.email}}</td>
              </tr>
              <tr class="table-secondary">
                <th scope="row"><strong>Registered since</strong></th>
                <td id="registrationDate" v-if="this.global.state.user">{{this.global.state.user.RegisterDate}}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="tab-pane fade" id="v-pills-contributions" role="tabpanel" aria-labelledby="v-pills-contributions-tab">
          <h3 class="mb-4 text-start">Your Donation History</h3>
          <table class="table table-responsive-sm align-middle" id="donations">
            <thead class="table-primary font-monospace h5">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Project</th>
              <th scope="col">Amount</th>
            </tr>
            </thead>
            <tbody class="text-center">
            <tr>
              <th scope="row">1</th>
              <td>01/01/2021</td>
              <td>10:03 am</td>
              <td>Sample Project 1</td>
              <td>0.0004817094906403846 Ξ</td>
            </tr>
            <tr class="table-secondary">
              <th scope="row">2</th>
              <td>01/01/2021</td>
              <td>10:03 am</td>
              <td>Sample Project 2</td>
              <td>0.002408547453201923 Ξ</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>01/01/2021</td>
              <td>10:03 am</td>
              <td>Sample Project 3</td>
              <td>0.0012042737266009615 Ξ</td>
            </tr>
            <tr class="table-secondary">
              <th scope="row">4</th>
              <td>01/01/2021</td>
              <td>10:03 am</td>
              <td>Sample Project 2</td>
              <td>0.002408547453201923 Ξ</td>
            </tr>
            </tbody>
          </table>

          <p class="text-start text-muted">You made <span id="total"></span> donations.</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "UserProfile",
  data(){
    return {
      global: this.$store
    }
  }
}


/* counts rows in the table, excluding the header */
window.onclick = function (){
  let table = document.getElementById("donations");
  document.getElementById('total').innerHTML = String(table.tBodies[0].rows.length);
};
</script>

<style scoped>
img#avatar {
  width: 150px;
  height: auto;
}

td, th {
  padding: 15px;
}

th {
  font-weight: bolder;
}
</style>