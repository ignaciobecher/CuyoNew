<template>
    <navbarComponent></navbarComponent>        
    <servicesComponent></servicesComponent>
    <footerComponent></footerComponent>
</template>


<script>
import navbarComponent from '../components/navbarComponent.vue'
import servicesComponent from '../components/servicesComponent.vue'
import footerComponent from '../components/footerComponent.vue'
export default {
    components:{
        navbarComponent,
        servicesComponent,
        footerComponent
    }
}
</script>