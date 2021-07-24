<template>
  <div>


    <!--
    <p>Donating to Project : {{$route.params.id}}</p>


    <button class="btn btn-primary me-1 ms-4" data-bs-toggle="modal" data-bs-target="#donatePopop">Choose Amount</button>
    <div class="modal fade" id="donatePopop" tabindex="-1" aria-labelledby="donatePopop" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">How much would you like to Donate?</h5>
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
    -->

    <div class="container">
      <div class="py-5 text-center">
        <h2>Checkout</h2>
      </div>

      <div class="row">
        <div class="col-md-3"></div>

        <div class="col-md-6">
          <form>
            <div class="form-group">
              <label for="email">Email address</label>
              <input class="form-control" type="text" placeholder="max.mustermann@gmail.com" readonly id="email">
            </div><br><br>
          </form>
        </div>

        <div class="col-md-3"></div>
      </div>

      <div class="row">
        <div class="col-md-3"></div>

        <div class="col-md-3">
          <form>
            <div class="form-group">
              <label for="firstName">First Name</label>
              <input class="form-control" type="text" placeholder="Max" readonly id="firstName">
            </div><br><br>
          </form>
        </div>

        <div class="col-md-3">
          <form>
            <div class="form-group">
              <label for="lastName">Last Name</label>
              <input class="form-control" type="text" placeholder="Mustermann" readonly id="lastName">
            </div><br><br>
          </form>
        </div>

        <div class="col-md-3"></div>
      </div>

      <div class="row">
        <div class="col-md-3"></div>

        <div class="col-md-3">
          <form>
            <div class="form-group">
              <label for="lastName">Choose Amount</label>

              <div class="input-group mb-3">
                <input type="number" min="0.00" step="0.50" value="1.00" class="form-control mb-2 w-75" v-model="donationAmount">
                <select class="form-select form-select-sm mb-2 btn-primary" aria-label=".form-select-sm example">
                  <option selected value="Euro">€</option>
                  <option value="Dollar">$</option>
                  <option value="Pound">£</option>
                  <option value="Yen">¥</option>
                </select>
              </div>

            </div><br><br>
          </form>
        </div>

        <div class="col-md-3">
          <form>
            <div class="form-group">
              <label for="firstName">Amount</label>
              <input type="text" v-bind:value="donationAmount / 2075.94 + ' Ξ'"  class="form-control mb-2 w-100 text-center " aria-label="Text input with dropdown button"  disabled>

            </div><br><br>
          </form>
        </div>

        <div class="col-md-3"></div>
      </div>


      <br><br>

      <div class="row">
        <div class="col-md-3"></div>

        <div class="col-md-3"></div>

        <div class="col-md-3">
          <form>
            <div class="form-group">

              <button class="btn btn-primary btn-block"
                      @click="$router.push({ name: 'Home'})"
                      type="submit">
                Donate
              </button>

            </div><br><br>
          </form>
        </div>

        <div class="col-md-3"></div>
      </div>

    </div>

  </div>
</template>



<script>
export default {
  data(){
    return {
      donationAmount: 0,
    }
  },
  created(){
  }
}

</script>

<style scoped>

</style>