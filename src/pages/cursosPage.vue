<template>
  <navbarComponent></navbarComponent>
  <cursosComponent></cursosComponent>
  <footerComponent></footerComponent>
</template>

<script>
import navbarComponent from "../components/navbarComponent.vue";
import cursosComponent from "@/components/cursosComponent.vue";
import footerComponent from "../components/footerComponent.vue";
export default {
  components: {
    navbarComponent,
    cursosComponent,
    footerComponent,
  },
};
</script>
