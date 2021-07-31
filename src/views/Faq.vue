<template>

  <div class="container-md mt-5 pt-5">
    <div class="accordion align-middle" id="accordionExample">

      <!--- item start --->
      <div class="accordion-item p-1">
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
      <div class="accordion-item p-1">
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
      <div class="accordion-item p-1">
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

      <!--- item start --->
      <div class="accordion-item p-1">
        <h2 class="accordion-header" id="headingFour">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            What is Blockchain?
          </button>
        </h2>
        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
          <div class="accordion-body text-start">
            Blockchain is a specific type of database that differs from regular ones in the way it stores information.
            With Blockchain, information is stored in blocks that are chained together within the database. We use this techonology to keep track of every donation made through our website.
            New transactions are stored in a fresh block in the database. Once this block is full, it is linked to its predecessor which causes data to be stored and linked in chronological order.
          </div>
        </div>
      </div>
      <!--- item end --->

      <!--- item start --->
      <div class="accordion-item p-1">
        <h2 class="accordion-header" id="headingFive">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
            What happens if a project isn't fully funded?
          </button>
        </h2>
        <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
          <div class="accordion-body text-start">
            Even if a project isn't fully funded, the money will still be available to the respective organisation.
            It's up to them if they want to proceed and try to implement the project or use the money for a different one.
          </div>
        </div>
      </div>
      <!--- item end --->

      <!--- item start --->
      <div class="accordion-item p-1">
        <h2 class="accordion-header" id="headingSix">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
            How do I know the project I contributed to was completed?
          </button>
        </h2>
        <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
          <div class="accordion-body text-start">
            Each project will be updated as its status changes, and donors who contributed to that project will receive (email) notifications at key milestones, including project completion.
            Donors can log back on to our website to see photos, written updates, and sometimes videos of the completed project.
          </div>
        </div>
      </div>
      <!--- item end --->

      <!--- item start --->
      <div class="accordion-item p-1">
        <h2 class="accordion-header" id="headingSeven">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
            Is my donation tax deductible?
          </button>
        </h2>
        <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
          <div class="accordion-body text-start">
            Yes, if the nonprofit is a tax-exempt registered nonprofit in their country and you are a tax payer in that country.
            However, as the tax laws and regulations differ from country to country, we cannot provide information for each specific case.
            Donors are responsible to consult with their tax attorney for legal or financial advice.
          </div>
        </div>
      </div>
      <!--- item end --->

      <!--- item start --->
      <div class="accordion-item p-1">
        <h2 class="accordion-header" id="headingTen">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
            Further Questions?
          </button>
        </h2>
        <div id="collapseTen" class="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
          <div class="accordion-body text-start">
            For any further questions, inquiries and / or other concers, feel free to email or call us at <a href="mailto:contact@charitable.com">contact@charitable.com</a> and + 01 234 567 88, respectively.
          </div>
        </div>
      </div>
      <!--- item end --->

    </div>

  </div>

</template>

<script>
export default {
  name: 'Faq'
}
</script>

<style scoped>


</style>