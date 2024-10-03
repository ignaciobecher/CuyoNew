<template>
  <div class="navbar-container">
    <nav class="navbar sticky-top navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <img class="logoImg" src="../assets/sinLetras.png" />

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link underline" aria-current="page" href="#">
                <router-link class="routerClass" to="/">INICIO</router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link underline" aria-current="page" href="#">
                <router-link class="routerClass" to="/nosotros">NOSOTROS</router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link underline" href="#">
                <router-link class="routerClass" to="/servicios">SERVICIOS</router-link>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link underline" href="#">
                <router-link class="routerClass" to="/sistemas">SISTEMAS</router-link>
              </a>
            </li>

            <!-- <li class="nav-item">
              <a class="nav-link underline" href="#">CURSOS</a>
            </li> -->

            <li class="nav-item">
              <a class="nav-link underline" target="_blank" href="https://wa.link/71b5v7">CONTACTO</a>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto">
            <!-- <span style="margin-right: 5px" class="fi fi-us flag"></span> -->
            <span class="fi fi-ar flag"></span>
            <li class="nav-item icon-link">
              <a class="nav-link" target="_blank" href="https://www.facebook.com/people/CuyoCode/100092369985447/"><i class="bi bi-facebook"></i></a>
            </li>
            <li class="nav-item icon-link">
              <a class="nav-link" target="_blank" href="https://www.instagram.com/cuyocode/"><i class="bi bi-instagram"></i></a>
            </li>
            <li class="nav-item icon-link">
              <a class="nav-link" target="_blank" href="https://wa.link/71b5v7"><i class="bi bi-whatsapp"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>

.routerClass{
  text-decoration: none;
}

.navbar {
  background-color: #040505 !important;
}

.navbar-toggler-icon {
  color: white !important;
}

.navbar a {
  color: white;
  font-size: 15px;
  margin-left: 10px;
}

img {
  width: 6.5%;
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
  background-color: #129f95;
  transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
}

@media (hover: hover) and (pointer: fine) {
  .underline:hover::before {
    left: 0;
    right: auto;
    width: 100%;
  }

  .icon-link i {
    font-size: 20px; /* Tamaño inicial del icono */
    color: white; /* Color inicial del icono */
    transition: all 0.3s ease-in-out; /* Transición suave */
  }
  .icon-link:hover i {
    font-size: 24px; /* Tamaño aumentado del icono */
    color: #129f95; /* Color verde */
  }

  .flag {
    font-size: 15px; /* Tamaño inicial del icono */
    color: white; /* Color inicial del icono */
    transition: all 0.3s ease-in-out; /* Transición suave */
    cursor: pointer;
  }
  .flag:hover {
    font-size: 20px; /* Tamaño aumentado del icono */
    color: #129f95; /* Color verde */
  }
}

/* ------------------------------ESTILOS PARA CELULAR------------------------------- */
@media screen and (max-width: 768px) {
  img {
    width: 25%;
  }
  .navbar-toggler {
    background-color: #129f95;
  }
}
</style>
