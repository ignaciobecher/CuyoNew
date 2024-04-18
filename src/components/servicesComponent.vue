<template>
  <div class="services-container">
    <div class="title-div">
      <h1>Hacemos realidad tus ideas, solucionamos tus problemas ;)</h1>
      <p>
        Alcanza tus metas con nosotros, adopta la tecnología como pilar para el
        crecimiento de tu empresa.
      </p>
    </div>
    <div class="img-container">
      <img src="../assets/letraNegra.png" alt="" srcset="" />
    </div>
    <div class="services-div">
      <div class="service">
        <h3>APPS</h3>
        <p>Aplicaciones móviles para Android & iOS</p>
      </div>

      <div class="service">
        <h3>SISTEMAS</h3>
        <p>Sistemas a medida para tu empresa</p>
      </div>

      <div class="service">
        <h3>WEBS</h3>
        <p>Desarrollamos todo tipo de webs</p>
      </div>

      <div class="service">
        <h3>CHATBOTS</h3>
        <p>Asistentes virtuales para vender en WhatsApp</p>
      </div>
    </div>
    <div class="btn-container">
      <button><i class="bi bi-telephone"></i>  <a
          style="text-decoration: none; color: white"
          target="_blank"
          href="https://wa.link/212bz3"
          >AGENDA UNA LLAMADA</a
        ></button>
    </div>
  </div>
</template>

<style scoped>
.services-container {
  background-color: #0cc39b;
  /* background-image: url("../assets/redondo.png"); */
  background-position: center;
  background-size: auto;
  background-repeat: no-repeat;
  padding-top: 70px;
  padding-bottom: 70px;
}

.title-div {
  text-align: center;
  width: 80%;
  margin: 0 auto;
}

.title-div h1 {
  color: #243984;
  font-size: 75px;
  font-weight: bold;
}

.title-div p {
  color: #243984;
  font-weight: 500;
}

.img-container {
  text-align: center;
}

.img-container img {
  width: 200px;
}

.services-div {
  display: flex;
  margin: 30px;
  text-align: center;
  color: #040404;
}

.service {
  border-right: 1px solid #040404;
  border-left: 1px solid #040404;
  transition: all 0.3s ease-in-out; /* Transición suave */
}

.service:hover {
  font-size: 17px;
  background-color: #149494;
  color: white;
  border: none;
}

.services-div .service h3 {
  font-weight: bold;
}

.service p {
  font-weight: 500;
}

.btn-container {
  text-align: center;
}

.btn-container button {
  border: none;
  background-color: #2a0878;
  color: white;
  padding: 15px;
  font-weight: bold;
  font-size: 25px;
  border-radius: 3px;
  transition: all 0.3s ease-in-out; /* Transición suave */
}

.btn-container button:hover {
  font-size: 28px;
}

/* ---------------------------------------ESTILOS PARA CELULAR---------------------------------------- */
@media screen and (max-width: 768px) {
  

  .title-div h1 {
    color: #243984;
    font-size: 40px;
    font-weight: bold;
  }

  .title-div p {
    color: #243984;
    font-weight: 500;
  }

  .services-div {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin: 30px;
  text-align: center;
  color: #040404;
}

.service {
  border-right: none;
  border-left: none;
}



.services-div .service h3 {
  font-weight: bold;
}

.service p {
  font-weight: 500;
}

.btn-container button {
  border: none;
  background-color: #2a0878;
  color: white;
  padding: 10px;
  font-weight: bold;
  font-size: 15px;
  border-radius: 3px;
}

}
</style>
