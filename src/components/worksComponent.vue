<template>
  <div class="works-container">
    <div class="top">
      <h1>
        <span style="font-weight: bold; color: #271b7e">Confiaron</span> en
        nosotros.
      </h1>
      <p></p>
    </div>

    <div class="bottom">
      <img
        src="../assets/logosClientes/adminia.png"
        alt=""
        class="client-logo"
      />
      <img
        src="../assets/logosClientes/autosalon.png"
        alt=""
        class="client-logo"
      />
      <img
        src="../assets/logosClientes/becherSoftware.png"
        alt=""
        class="client-logo"
      />
      <img
        src="../assets/logosClientes/caLogo.png"
        alt=""
        class="client-logo"
      />
      <img
        src="../assets/logosClientes/cda.png"
        id="cdaLogo"
        alt=""
        class="client-logo"
      />
      <img
        src="../assets/logosClientes/educar.png"
        alt=""
        class="client-logo"
      />
      <img
        src="../assets/logosClientes/generandoBienestar.png"
        alt=""
        class="client-logo"
      />
      <img
        src="../assets/logosClientes/logoBlancoGaston.png"
        alt=""
        class="client-logo"
      />
      <img
        src="../assets/logosClientes/matiasBecher.png"
        alt=""
        class="client-logo"
      />
      <img
        src="../assets/logosClientes/mercedesRock.png"
        alt=""
        class="client-logo"
      />
      <img
        src="../assets/logosClientes/nuevoSol.png"
        alt=""
        class="client-logo"
      />
      <img
        src="../assets/logosClientes/pedrera.png"
        alt=""
        class="client-logo"
      />
      <img
        src="../assets/logosClientes/refugia.png"
        alt=""
        class="client-logo"
      />
      <img
        src="../assets/logosClientes/estelar.png"
        id="estelar"
        class="client-logo"
        alt=""
      />
    </div>
  </div>
</template>

<style scoped>
.works-container {
  background-color: #139492;
  padding-top: 70px;
  padding-left: 30px;
  padding-right: 30px;
}

.works-container .top {
  color: white;
  margin-bottom: 50px;
}

.bottom {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 10px; /* Espacio entre las imágenes */
  border-bottom: 1px solid white;
}

.client-logo {
  width: 60px;
  filter: grayscale(100%); /* Imágenes en blanco y negro */
  transition: transform 0.3s, filter 0.3s; /* Transiciones suaves */
}
#cdaLogo{
  width: 50px;
}
#estelar {
  width: 60px;
  align-self: center;
}

.client-logo:hover {
  transform: scale(2); /* Escala más grande al hacer hover */
  filter: grayscale(0%); /* Imágenes a color al hacer hover */
}

/* ---------------------------------------ESTILOS PARA CELULAR---------------------------------------- */
@media screen and (max-width: 768px) {
  .bottom {
    display: grid;
    grid-template-columns: 1fr 1fr ;
    grid-gap: 10px; /* Espacio entre las imágenes */
    border-bottom: 1px solid white;
    text-align: center;

  }

  .top h1{
    text-align: center;
    font-size: 30px;
  }

  .client-logo {
    width: 80px;
    filter: grayscale(0); /* Imágenes en blanco y negro */
    transition: transform 0.3s, filter 0.3s; /* Transiciones suaves */
    margin: 0 auto;
  }

  #cdaLogo{
  width: 35px;
}

#estelar{
  width: 45px;
}
}
</style>
