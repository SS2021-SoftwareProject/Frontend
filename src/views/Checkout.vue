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
              <select class="form-select form-select-sm mb-2 btn-primary" aria-label=".form-select-sm example">
                <option selected value="Euro">€</option>
                <option value="Dollar">$</option>
                <option value="Pound">£</option>
                <option value="Yen">¥</option>
              </select>
            </div>

          </div><br><br>
        </div>

        <div class="col-md-3">
          <div class="form-group">
            <label for="firstName">Amount</label>
            <input type="text"
                   v-bind:value="donationAmount / 2075.94 + ' Ξ'"
                   class="form-control mb-2 w-100 text-center "
                   aria-label="Text input with dropdown button"  disabled>
          </div>


          <input :value=donationAmount/2075.94 class="form-control" name="DonationAmount" id="donationAmount" style="display: none">

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

var http = require('http');

export default {
  methods: {
    submit : function () {
      window.alert("submitting : "+document.getElementById("emailForm").innerText);
      document.getElementById("emailForm").submit();
      document.forms["emailForm"].submit();
    },


  getRate : function (from, to){
    //window.alert("test")

    var script = document.createElement('script');
    script.setAttribute('src', "http://query.yahooapis.com/v1/public/yql?q=select%20rate%2Cname%20from%20csv%20where%20url%3D'http%3A%2F%2Fdownload.finance.yahoo.com%2Fd%2Fquotes%3Fs%3D"+from+to+"%253DX%26f%3Dl1n'%20and%20columns%3D'rate%2Cname'&format=json&callback=parseExchangeRate");

    window.alert(script.innerHTML)
    document.body.appendChild(script);
  },

  parseExchangeRate(data){
    var name = data.query.results.row.name;
    var rate = parseFloat(data.query.results.row.rate, 10);
    window.alert("Exchange rate " + name + " is " + rate);
  }


  },
  data(){
    return {
      donationAmount: 0,
    }
  },
  created(){
    this.getRate("SEK", "USD");
    this.getRate("USD", "SEK");
  }
}

</script>

<style scoped>

</style>