<template>
  <div class="pcDiv">
    <div class="main">
      <div class="left">
        <p class="underline">
          <router-link class="routerClass" to="">INICIO</router-link>
        </p>
        <p class="underline">
          <router-link class="routerClass" to="/nosotros">NOSOTROS</router-link>
        </p>
        <p class="underline">
          <router-link class="routerClass" to="/servicios">SERVICIOS</router-link>
        </p>
        <p class="underline">
          <router-link class="routerClass" to="/sistemas">SISTEMAS</router-link>
        </p>
        <!-- <p class="underline">CURSOS</p> -->
        <p class="underline">
          <a class="routerClass" target="_blank" href="https://wa.link/71b5v7">CONTACTO</a>
        </p>
      </div>
      <div class="center">
        <h6>Dirección</h6>
        <p>Villa Mercedes</p>
        <p>San Luis</p>
        <p>Argentina</p>
      </div>
      <div class="right">
        <h6>Contacto</h6>
        <p>cuyosoftware@gmail.com</p>
        <p>351-7892183</p>
      </div>
      <div class="social">
        <h6>Seguinos en nuestras redes</h6>
        <a class="routerClass" href="https://www.instagram.com/cuyocode/"><i class="bi bi-instagram"></i>Instagram</a>
        <a class="routerClass" href="https://www.facebook.com/people/CuyoCode/100092369985447/"><i class="bi bi-facebook"></i>Facebook</a>
        <a class="routerClass" href="https://wa.link/71b5v7"><i class="bi bi-whatsapp"></i>WhatsApp</a>
      </div>
      <p style="color: white">©CuyoCode. Todos los derechos reservados.</p>
    </div>
  </div>

  <div class="divMobile">
    <div class="main">
      <div class="left">
        <p class="underline">
          <router-link class="routerClass" to="">INICIO</router-link>
        </p>
        <p class="underline">
          <router-link class="routerClass" to="/nosotros">NOSOTROS</router-link>
        </p>
        <p class="underline">
          <router-link class="routerClass" to="/servicios">SERVICIOS</router-link>
        </p>
        <p class="underline">
          <router-link class="routerClass" to="/sistemas">SISTEMAS</router-link>
        </p>
        <!-- <p class="underline">CURSOS</p> -->
        <p class="underline">
          <a class="routerClass" target="_blank" href="https://wa.link/71b5v7">CONTACTO</a>
        </p>
      </div>
      <div class="center">
        <h6>Dirección</h6>
        <p>Villa Mercedes</p>
        <p>San Luis</p>
        <p>Argentina</p>
      </div>
      <div class="right">
        <h6>Contacto</h6>
        <p>cuyosoftware@gmail.com</p>
        <p>351-7892183</p>
      </div>
      <div class="social">
        <h6>Seguinos en nuestras redes</h6>
        <a class="routerClass" href="https://www.instagram.com/cuyocode/"><i class="bi bi-instagram"></i>Instagram</a>
        <a class="routerClass" href="https://www.facebook.com/people/CuyoCode/100092369985447/"><i class="bi bi-facebook"></i>Facebook</a>
        <a class="routerClass" href="https://wa.link/71b5v7"><i class="bi bi-whatsapp"></i>WhatsApp</a>
      </div>
      <p style="color: white">©CuyoCode. Todos los derechos reservados.</p>
    </div>
  </div>
</template>

<style scoped>

.routerClass{
  text-decoration: none;
  color: white;
}
/******************************** ESTILOS PARA PANTALLA ****************************************/
@media (min-width: 768px) {
  .pcDiv {
    display: block;
  }

  .divMobile {
    display: none;
  }

  .underline {
    position: relative;
  }

  .underline::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 2px;
    background-color: #0cc39b;
    transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  }

  @media (hover: hover) and (pointer: fine) {
    .underline:hover::before {
      left: 0;
      right: auto;
      width: 100%;
    }
  }

  .main {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding-top: 50px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #271b7e;
  }

  .left p {
    color: white;
    font-weight: 600;
    width: 30%;
    cursor: pointer;
  }

  .center h6 {
    color: white;
    font-weight: bold;
    font-size: large;
  }

  .center p {
    color: white;
  }
  .center a {
    color: white;
  }

  .right h6 {
    color: white;
    font-weight: bold;
    font-size: large;
  }

  .social h6 {
    color: white;
    font-weight: bold;
    font-size: large;
  }

  .social img {
    width: 100px;
  }

  .right p {
    color: white;
  }

  .social {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }

  .social i {
    margin-right: 10px;
  }

  .social a {
    color: white;
  }

  .social img {
    margin-top: 30px;
    margin: 0 auto;
  }
}

/******************************** ESTILOS PARA CELULAR ****************************************/

@media (max-width: 768px) {
  .underline {
    position: relative;
  }

  .underline::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 2px;
    background-color: white;
    transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  }

  @media (hover: hover) and (pointer: fine) {
    .underline:hover::before {
      left: 0;
      right: auto;
      width: 100%;
    }
  }

  .pcDiv {
    display: none;
  }

  .divMobile {
    display: block;
  }

  .main {
    display: grid;
    grid-template-columns: 1fr;
    padding-top: 50px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #271b7e;
    row-gap: 30px;
  }

  .left p {
    color: white;
    font-weight: 600;
    width: 30%;
    cursor: pointer;
  }

  .center h6 {
    color: white;
    font-weight: bold;
    font-size: large;
  }

  .center p {
    color: white;
  }
  .center a {
    color: white;
  }

  .right h6 {
    color: white;
    font-weight: bold;
    font-size: large;
  }

  .social h6 {
    color: white;
    font-weight: bold;
    font-size: large;
  }

  .social img {
    width: 100px;
  }

  .right p {
    color: white;
  }

  .social {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }

  .social i {
    margin-right: 10px;
  }

  .social a {
    color: white;
  }

  .social img {
    margin-top: 30px;
    margin: 0 auto;
  }

  iframe {
    width: 100%;
  }
}
</style>
