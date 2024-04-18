<template>
    <div>
        <navbarComponent></navbarComponent>
        <headerComponent></headerComponent>
        <aboutComponent></aboutComponent>
        <associatesComponent></associatesComponent>
        <servicesComponent></servicesComponent>
        <adminiaComponent></adminiaComponent>
        <worksComponent></worksComponent>
        <techsComponent></techsComponent>
        <footerComponent></footerComponent>
    </div>
</template>


<script>
import navbarComponent from '../components/navbarComponent.vue'
import headerComponent from '@/components/headerComponent.vue';
import associatesComponent from '@/components/associatesComponent.vue'
import aboutComponent  from '@/components/aboutComponent.vue'
import servicesComponent from '@/components/servicesComponent.vue';
import adminiaComponent from '@/components/adminiaComponent.vue';
import worksComponent from '@/components/worksComponent.vue';
import techsComponent from '@/components/techsComponent.vue';
import footerComponent from '@/components/footerComponent.vue';

export default {
    components:{
        navbarComponent,
        headerComponent,
        associatesComponent,
        aboutComponent,
        servicesComponent,
        adminiaComponent,
        worksComponent,
        techsComponent,
        footerComponent
    }
}
</script>