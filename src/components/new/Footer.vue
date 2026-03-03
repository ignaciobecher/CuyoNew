<template>
  <footer class="max-w-7xl mx-auto w-full px-6 lg:px-24 py-12 border-t border-white/5 mt-auto">
    <div class="flex flex-col md:flex-row justify-between items-center gap-8">
      <a href="#inicio" class="flex items-center gap-4">
        <img src="../../assets/new-logo.png" alt="CuyoCode Logo"
          class="h-6 object-contain opacity-50 hover:opacity-100 transition-opacity" />
        <span class="text-sm font-bold text-white/40 tracking-widest uppercase">CuyoCode © {{ new Date().getFullYear()
          }}</span>
      </a>

      <div class="flex gap-8">
        <a href="https://linkedin.com/company/cuyocode" target="_blank"
          class="text-xs text-slate-500 hover:text-primary transition-colors uppercase tracking-widest font-bold">LinkedIn</a>
        <a href="#"
          class="text-xs text-slate-500 hover:text-primary transition-colors uppercase tracking-widest font-bold">GitHub</a>
        <a href="https://instagram.com/cuyocode" target="_blank"
          class="text-xs text-slate-500 hover:text-primary transition-colors uppercase tracking-widest font-bold">Instagram</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>
