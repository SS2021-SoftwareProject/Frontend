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
                          @click="$router.push({ name: 'Home'})"
    -->

    <div class="container">
      <div class="py-5 text-center">
        <h2>Checkout</h2>
      </div>

      <form  method="get" action="">

      <div class="row">
        <div class="col-md-3"></div>

        <div class="col-md-6">
            <div class="form-group">
              <label for="email">Email address</label>
              <input class="form-control" type="text" value="max.mustermann@gmail.com" readonly id="email" name="email">
            </div><br><br>
        </div>

        <div class="col-md-3"></div>
      </div>

      <div class="row">
        <div class="col-md-3"></div>

        <div class="col-md-3">
          <div class="form-group">
            <label for="firstName">First Name</label>
            <input class="form-control" type="text" value="Max" readonly id="firstName" name="firstName">
          </div><br><br>
        </div>

        <div class="col-md-3">
          <div class="form-group">
            <label for="lastName">Last Name</label>
            <input class="form-control" type="text" value="Mustermann" readonly id="lastName" name="lastName">
          </div><br><br>
        </div>

        <div class="col-md-3"></div>
      </div>

      <div class="row">
        <div class="col-md-3"></div>

        <div class="col-md-3">
          <div class="form-group">
            <label for="lastName">Choose Amount</label>

            <div class="input-group mb-3">
              <input type="number" min="0.00" step="0.50" value="1.00" class="form-control mb-2 w-75" v-model="donationAmount">
              <select class="form-select form-select-sm mb-2 btn-primary" aria-label=".form-select-sm example" disabled>
                <option value="Dollar">$</option>
              </select>
            </div>

          </div><br><br>
        </div>

        <div class="col-md-3">
          <div class="form-group">
            <label for="firstName">Amount</label>
            <input type="text"
                   v-bind:value="donationAmount / ethPrice + ' Ξ'"
                   class="form-control mb-2 w-100 text-center "
                   aria-label="Text input with dropdown button"  disabled>
          </div>


          <input :value=donationAmount/ethPrice class="form-control" name="DonationAmount" id="donationAmount" style="display: none">

          <br><br>
        </div>

        <div class="col-md-3"></div>
      </div>


      <br><br>

      <div class="row">
        <div class="col-md-3"></div>

        <div class="col-md-3"></div>

        <div class="col-md-3">
            <div class="form-group">
              <button class="btn btn-primary btn-block"
                      type="submit"
                      @click="submit()">Donate
              </button>
            </div>
          <br><br>
        </div>

        <div class="col-md-3"></div>
      </div>
      </form>

    </div>

  </div>
</template>




<script>

import axios from 'axios'

export default {
  methods: {

  },
  data(){
    return {
      donationAmount: 0,
      ethPrice: 0,
    }
  },
  created(){

    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=USD')
        .then(response => {
          this.cryptos = response.data
          console.log(response.data['ETH']['USD'])
          window.alert(response.data['ETH']['USD']) // This will give you access to the full object
          this.ethPrice = response.data['ETH']['USD']
        })
        .catch(e => {
          this.errors.push(e)
        })

  }
}

</script>

<style scoped>

</style>