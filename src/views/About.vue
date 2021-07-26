<template>
  <div class="container d-flex flex-column">
    <div id="intro" class="container mb-5">
      <h1 class="font-monospace mb-5">About Us</h1>

      <div class="container-lg d-flex flex-row justify-content-evenly">
        <div class="embed-responsive embed-responsive-16by9 me-5">
          <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/dQw4w9WgXcQ" id="video" allowscriptaccess="always" allow="autoplay"></iframe>
        </div>
        <p class="text-center align-self-center ms-5">
          <strong>CharitAble</strong> is a company that aims to make donating to charity easier and more transparent to restore trust and confidence in giving money for a good cause.<br><br>
          Our teams works tirelessly to implement and improve newest Blockchain technology on our website to ensure that every dollar gets where it's supposed to.<br><br>
          Watch this video on the left to see an example of our company's work.
        </p>
      </div>
    </div>

    <div id="team" class="container my-5">
      <h2 class="font-monospace text-start text-primary mb-4">Our Employees</h2>

      <div class="container-lg d-flex flex-row justify-content-evenly">
        <p class="text-center align-self-center me-5">
          <strong>CharitAble</strong> consists of several teams of skilled developers, programmers and designers, among other professions, who strive to improve and keep the technology behind our website up-to-date.<br><br>
          Encouraging them to always keep up with the latest state of knowledge in their respective fields, we offer plenty of resources to our employees for acquiring new while also refreshing their already existing knowledge.
        </p>
        <img src="../assets/team_2.jpg" class="rounded-pill ms-5" height="auto" width="500">
      </div>
    </div>

    <div id="work" class="container my-5">
      <h2 class="font-monospace text-end text-primary mb-4">Our Work</h2>

      <div class="container d-flex flex-row justify-content-evenly">
        <img src="../assets/js_sample.jpg" class="rounded-pill me-5" height="auto" width="500">
        <p class="text-center align-self-center ms-5">
          With several years of experience and expertise and a diverse staff, <strong>CharitAble</strong> provides quality service influenced by unique points of view and with full transparency not only to a project's contributors but also the organisation behind it.<br><br>
          We work tirelessly to ensure it stays that way by continuously maintaining, updating and improving our website and the technology behind it.<br><br>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>

</style>