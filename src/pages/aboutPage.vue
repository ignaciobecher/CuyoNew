<template>
    <navbarComponent></navbarComponent>        
    <aboutComponent></aboutComponent>
    <footerComponent></footerComponent>
</template>


<script>
import navbarComponent from '../components/navbarComponent.vue'
import aboutComponent from '../components/aboutComponent.vue'
import footerComponent from '../components/footerComponent.vue'
export default {
    components:{
        navbarComponent,
        aboutComponent,
        footerComponent
    }
}
</script>