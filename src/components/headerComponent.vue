<template>
  <div class="header-container" ref="header">
    <div class="img-div">
      <img src="../assets/letraBlanca.png" alt="" />
    </div>

    <div class="text-div">
      <h1>CREAMOS</h1>
      <h1>SOLUCIONES</h1>
      <button>
        <a
          style="text-decoration: none; color: #2a0878"
          target="_blank"
          href="https://wa.link/71b5v7"
          >AGENDA UNA LLAMADA</a
        >
      </button>
    </div>
  </div>
  <a href="https://wa.link/71b5v7" class="float" target="_blank">
    <i class="fa fa-whatsapp my-float"></i>
  </a>
</template>

<style scoped>
.header-container {
  background-color: #2a0878;
  background-position: center;
  background-size: cover;
  height: 100vh;
  overflow: hidden;
}

.img-div {
  margin: 0 auto;
  text-align: center;
}

.img-div img {
  width: 15%;
}

.text-div {
  text-align: center;
}

.text-div p {
  color: white;
  font-weight: 600;
}

.text-div h1 {
  color: #0cc39b;
  font-weight: bold;
  font-size: 80px;
}

.text-div button {
  border: none;
  background-color: #0cc39b;
  color: #2a0878;
  padding: 20px;
  font-weight: bold;
  font-size: 20px;
  border-radius: 3px;
  transition: all 0.3s ease-in-out; /* Transición suave */
}

.text-div button:hover {
  font-size: 22px;
}

.float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 2px 2px 3px #999;
  z-index: 100;
}

.my-float {
  margin-top: 16px;
}

/* ---------------------------------------ESTILOS PARA CELULAR---------------------------------------- */
@media screen and (max-width: 768px) {
  .img-div img {
    width: 50%;
  }

  .text-div h1 {
    color: #0cc39b;
    font-weight: bold;
    font-size: 50px;
  }

  .text-div button {
    border: none;
    background-color: #0cc39b;
    color: #2a0878;
    padding: 10px;
    font-weight: bold;
    font-size: 10px;
    border-radius: 3px;
    transition: all 0.3s ease-in-out; /* Transición suave */
  }
}
</style>
