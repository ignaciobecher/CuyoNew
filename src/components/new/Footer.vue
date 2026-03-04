<template>
  <footer class="w-full border-t border-white/5 mt-auto relative bg-background-dark/50">
    <div class="max-w-7xl mx-auto px-6 lg:px-24 py-16 lg:py-20">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
        <!-- Brand Info -->
        <div class="flex flex-col gap-6 lg:col-span-1">
          <a href="#inicio" class="flex items-center gap-3">
            <img src="../../assets/new-logo.png" alt="CuyoCode Logo" width="160px"
              class="opacity-90 hover:opacity-100 transition-opacity" />
          </a>
          <p class="text-sm text-slate-500 leading-relaxed font-medium">
            Transformando ideas en soluciones digitales robustas, escalables y orientadas al usuario.
          </p>
          <div class="flex items-center gap-4 mt-2">
            <a href="https://linkedin.com/company/cuyocode" target="_blank"
              class="size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/50 transition-all">
              <span class="text-xs font-bold font-display uppercase tracking-widest">In</span>
            </a>
            <a href="https://instagram.com/cuyocode" target="_blank"
              class="size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/50 transition-all">
              <span class="text-xs font-bold font-display uppercase tracking-widest">Ig</span>
            </a>
          </div>
        </div>

        <!-- Navigation -->
        <div class="flex flex-col gap-5 lg:ml-auto">
          <h4 class="text-white font-bold tracking-wide uppercase text-sm mb-2">Navegación</h4>
          <a href="#inicio"
            class="text-sm text-slate-400 hover:text-primary transition-colors hover:translate-x-1 duration-300 transform origin-left w-fit">Inicio</a>
          <a href="#soluciones"
            class="text-sm text-slate-400 hover:text-primary transition-colors hover:translate-x-1 duration-300 transform origin-left w-fit">Soluciones</a>
          <a href="#servicios"
            class="text-sm text-slate-400 hover:text-primary transition-colors hover:translate-x-1 duration-300 transform origin-left w-fit">Servicios</a>
          <a href="#metodologia"
            class="text-sm text-slate-400 hover:text-primary transition-colors hover:translate-x-1 duration-300 transform origin-left w-fit">Metodología</a>
          <a href="#contacto"
            class="text-sm text-slate-400 hover:text-primary transition-colors hover:translate-x-1 duration-300 transform origin-left w-fit">Contacto</a>
        </div>

        <!-- Systems -->
        <div class="flex flex-col gap-5 lg:ml-auto">
          <h4 class="text-white font-bold tracking-wide uppercase text-sm mb-2">Sistemas Propios</h4>
          <a href="https://distrify.com.ar" target="_blank"
            class="group flex items-center text-sm text-slate-400 hover:text-white transition-colors">
            <span class="relative">
              Distrify
              <span class="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full"></span>
            </span>
          </a>
          <a href="https://trainify.com.ar" target="_blank"
            class="group flex items-center text-sm text-slate-400 hover:text-white transition-colors">
            <span class="relative">
              Trainify
              <span class="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full"></span>
            </span>
          </a>
          <a href="https://autino.click" target="_blank"
            class="group flex items-center text-sm text-slate-400 hover:text-white transition-colors">
            <span class="relative">
              Autino
              <span class="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full"></span>
            </span>
          </a>
        </div>

        <!-- Contact Info -->
        <div class="flex flex-col gap-5 lg:ml-auto">
          <h4 class="text-white font-bold tracking-wide uppercase text-sm mb-2">Contacto</h4>
          <div class="flex flex-col gap-3">
            <a href="mailto:info@cuyocode.com.ar"
              class="text-sm text-slate-400 hover:text-primary transition-colors flex items-center gap-2">
              <span class="material-symbols-outlined text-base">mail</span>
              info@cuyocode.com.ar
            </a>
            <a href="https://wa.me/5492657201291" target="_blank"
              class="text-sm text-slate-400 hover:text-primary transition-colors flex items-center gap-2">
              <span class="material-symbols-outlined text-base">call</span>
              +54 9 2657 20-1291
            </a>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div
        class="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        <span class="text-xs font-semibold text-slate-600 tracking-widest uppercase">
          CuyoCode © {{ new Date().getFullYear() }} — Todos los derechos reservados.
        </span>
        <div class="flex items-center gap-6">
          <a href="#"
            class="text-xs text-slate-600 hover:text-slate-400 transition-colors uppercase tracking-widest font-bold">Términos</a>
          <a href="#"
            class="text-xs text-slate-600 hover:text-slate-400 transition-colors uppercase tracking-widest font-bold">Privacidad</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>
