<template>
  <div class="modal fade" id="userModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-body">

          <!-- The profile form itself -->
          <div class="container">
            <div class="row mb-5">
              <div class="col-auto align-self-end">
                <div class="text-start">
                  <img id="avatar" src="../assets/logo_592x557.png" alt="user avatar" class="p-3">
                </div>
              </div>
              <div class="col-auto align-self-end">
                <h1 class="font-monospace fw-bolder display-4" v-if="this.global.state.user">{{this.global.state.user.fname}} {{this.global.state.user.lname}}</h1>
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
                        <td id="firstName" v-if="this.global.state.user">{{this.global.state.user.fname}}</td>
                      </tr>
                      <tr class="table-secondary">
                        <th scope="row"><strong>Last Name</strong></th>
                        <td id="lastName" v-if="this.global.state.user">{{this.global.state.user.lname}}</td>
                      </tr>
                      <tr>
                        <th scope="row"><strong>Email</strong></th>
                        <td id="email" v-if="this.global.state.user">{{this.global.state.user.email}}</td>
                      </tr>
                      <tr class="table-secondary">
                        <th scope="row"><strong>Registered since</strong></th>
                        <td id="registrationDate" v-if="this.global.state.user">{{this.global.state.user.registered_since}}</td>
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
                    <tr v-for="contribution in contributions" :key="contribution.id">
                      <th scope="row">{{contribution.id}}</th>
                      <td>{{contribution.date}}</td>
                      <td>{{contribution.time}}</td>
                      <td>{{contribution.project}}</td>
                      <td>{{contribution.amount}}</td>
                    </tr>
                    </tbody>
                  </table>

                  <p class="text-start text-muted">You've made <span id="total"></span> donation(s).</p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: "UserProfile",
  data(){
    return {
      global: this.$store,
      contributions: [],
      contribution: ''
    }
  },
  created: function () {
    const baseURI = 'contributions'
    Vue.axios.get(baseURI, {

    }).then((response) => {
      this.contributions = response.data.contributions;
    }).catch(err => {
      console.log(err.response);
    });
  },
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