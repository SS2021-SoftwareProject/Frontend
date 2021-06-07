<template>

  <div class="container-md">
    <div class="accordion" id="accordionExample">

      <!--- item start --->
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            What is CharitAble?
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div class="accordion-body text-start">
            CharitAble is a company that provides an online platform for NGOs (Non Profit Organisations) to host various charity projects
            while also trying to make the donation process as transparent as possible using newest <a href="https://en.wikipedia.org/wiki/Blockchain">Blockchain</a> technology.
          </div>
        </div>
      </div>
      <!--- item end --->

      <!--- item start --->
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            How does donating with CharitAble work?
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div class="accordion-body text-start">
            Although the specifics are confidential information, we use Blockchain technology together with Etherum to make the donation process more transparent for everyone involved, including the recipients and our users, and thus, rebuild trust on both sides.
          </div>
        </div>
      </div>
      <!--- item end --->

      <!--- item start --->
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            What is Etherum?
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div class="accordion-body text-start">
            Etherum is, like Bitcoin, an open source Blockchain network. However, Etherum uses a different approach than Bitcoin: it offers a decentralized platform for Smart Contracts.
            Etherum's crypto currency is called Ether (ETH).
          </div>
        </div>
      </div>
      <!--- item end --->

    </div>
  </div>

</template>

<script>
export default {

  created() {

  }

}
</script>

<style scoped>

/* sets colour of the accordion button when it is active, aka clicked on */
[class="accordion-button"] {
  background-color: rgba(149, 211, 135, 0.2);
  color: darkgreen;
}

/* changes arrow color */
.accordion-button::after {
  background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='darkgreen'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>");
}

a {
  text-decoration: none;
}

</style>