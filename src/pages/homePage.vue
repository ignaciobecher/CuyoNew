<template>
  <div
    class="bg-background-dark font-display text-slate-100 antialiased selection:bg-primary/30 min-h-screen flex flex-col relative w-full overflow-x-hidden">
    <!-- Grain background overlay -->
    <div class="fixed inset-0 grain-bg pointer-events-none z-0"></div>

    <!-- Main Content -->
    <div class="relative z-10 flex flex-col flex-1 w-full">
      <Navbar />
      <Hero id="inicio" />
      <Solutions id="soluciones" />
      <Services id="servicios" />
      <DetailedServices />
      <ValueProps />
      <Process id="metodologia" />
      <ClientsTestimonials />
      <Contact id="contacto" />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/new/Navbar.vue'
import Hero from '../components/new/Hero.vue'
import Solutions from '../components/new/Solutions.vue'
import Services from '../components/new/Services.vue'
import DetailedServices from '../components/new/DetailedServices.vue'
import ValueProps from '../components/new/ValueProps.vue'
import Process from '../components/new/Process.vue'
import ClientsTestimonials from '../components/new/ClientsTestimonials.vue'
import Contact from '../components/new/Contact.vue'
import Footer from '../components/new/Footer.vue'
</script>

<style>
/* Add the HTML dark class explicitly since the layout requires it */
html {
  background-color: #080f12;
  /* background-dark from tailwind config */
}
</style>
