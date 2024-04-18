<template>
  <navbarComponent></navbarComponent>
  <adminiaComponent></adminiaComponent>
  <footerComponent></footerComponent>
</template>

<script>
import navbarComponent from "../components/navbarComponent.vue";
import adminiaComponent from "../components/adminiaComponent.vue";
import footerComponent from "../components/footerComponent.vue";
export default {
  components: {
    navbarComponent,
    adminiaComponent,
    footerComponent,
  },
};
</script>
