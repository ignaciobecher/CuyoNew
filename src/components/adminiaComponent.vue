<template>
  <div class="adminia-container">
    <div class="inner">
      <div class="left">
        <h1>
          <span class="spanAdm">Adminiad</span>, la solución para tu negocio
        </h1>
        <p>
          Con Adminiad, nuestro SaaS de gestión de negocios, vas a poder
          administrar tu negocio desde donde sea, con metricas en vivo, asistido
          por inteligencia artificial.
        </p>
        <button>Probar Adminiad gratis</button>
      </div>

      <div class="right">
        <a href="https://adminiad.com/">
          <img src="../assets/adminiaBlanco.png" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.adminia-container{
  padding-top: 70px;
  padding-left: 150px;
  padding-right: 150px;
  background-color: #0cc39b;
  padding-bottom: 70px;
}

.inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #732e8d;
  border-radius: 10px;

}

.adminia-container .left {
  color: white;
  margin: 30px;
  align-self: center;
}

.left h1 {
  font-size: 60px;
}

.right{
  text-align: center;
  align-self: center;
}

.right img{
  width: 40%;
}

.left p {
  font-weight: 500;
}

.spanAdm {
  font-weight: bold;
  color: black;
}

button {
  border: none;
  background-color: #ba4be2;
  color: white;
  padding: 15px;
  font-weight: bold;
  font-size: 20px;
  border-radius: 3px;
  transition: all 0.3s ease-in-out; /* Transición suave */
}

 button:hover {
  font-size: 23px;
  background-color:  #c383f1 ;
  color: black;
}
</style>
