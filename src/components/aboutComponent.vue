<template>
  <div class="about-container">
    <div class="left">
      <h2>¿Quienes somos?</h2>
      <p>
        <span class="spanCuyo">CuyoCode</span> es una pyme fundada en San Luis,
        Argentina, especializada en el desarrollo de software para pymes,
        nacimos con la intención de brindarte soluciones tecnologicas y
        accesibles, para poder ayudar a todos los emprendedores del país a
        conseguir sus sueños.
      </p>
    </div>

    <div class="right">
      <img src="../assets/about.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.about-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: #243984;
  border-bottom: 1px solid white;
}

.about-container .left {
  margin-left: 30px;
  align-self: center;
  color: white;
}

.about-container .left h2 {
  font-size: 50px;
}

.about-container .left p {
  text-align: justify;
}

.about-container .right {
  margin-left: 30px;
  text-align: center;
}

.about-container .right img {
  width: 60%;
}

.spanCuyo {
  color: #0cc39b;
}

/* ---------------------------------------ESTILOS PARA CELULAR---------------------------------------- */
@media screen and (max-width: 768px) {
  .about-container {
    display: flex;
    flex-direction: column;
    padding-top: 100px;
    padding-bottom: 100px;
    background-color: #243984;
    border-bottom: 1px solid white;
  }

  .about-container .left {
    margin-left: 30px;
    margin-right: 30px;
    align-self: center;
    color: white;
  }

  .about-container .right {
    margin-left: 30px;
    margin-right: 30px;
    text-align: center;
  }
  .about-container .right img {
    width: 100%;
  }
}
</style>
