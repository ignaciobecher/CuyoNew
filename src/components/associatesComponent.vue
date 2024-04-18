<template>
  <div class="associates-container">
    <h5>Trabajan con nosotros:</h5>
    <a href="">
      <img src="../assets/laPedrera.png" alt="" />
    </a>
    <a href="https://lapedreranoticias.com.ar/">
      <img src="../assets/nuevoSol.png" alt="" />
    </a>
    <a href="https://adminiad.com/">
      <img style="margin-bottom: 25px" src="../assets/adminia.png" alt="" />
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.associates-container {
  text-align: center;
  padding-top: 50px;
  background-color: #0cc39b ;
}

.associates-container img {
  width: 10%;
  transition: all 0.3s ease-in-out;
}

.associates-container img:hover {
  transform: scale(1.2);
}
</style>
