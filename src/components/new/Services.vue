<template>
    <section class="w-full max-w-[1200px] mx-auto px-6 py-12 md:py-20">
        <div class="w-full">
            <div data-aos="zoom-in"
                class="relative overflow-hidden rounded-xl min-h-[400px] flex flex-col justify-center px-8 md:px-16 border border-slate-custom bg-slate-custom/30 mb-20">
                <div class="absolute inset-0 opacity-40 mix-blend-overlay bg-cover bg-center"
                    style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBBRe3Y8bOZjG4YLoHEpvpsUr0DvckroyNfmhgRFSH9KMWGCdIBT4SUrQFmWVwyECHMHdbuQ8AasxoYSIDZP9-1tOfcFjymVRGLOQON6ydnE8nl96uj9MJA-yvpGzBYcXMUCnQucWcWNdzfJV47_y5kCbb8iJdkEdb4zEAJYqT8wj75EU-_Zw36H61evab9a_HD35kxyCObc66hPn-wyCAYoJCfecGDW6kR3lFX0RQ_DoSeCkfrXDaXLcLaJO04z-ln_ReQg6zRQYWj');">
                </div>
                <div
                    class="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/60 to-transparent">
                </div>
                <div class="relative z-10 max-w-2xl">

                    <h2 class="text-slate-100 text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6">
                        Hacemos realidad <br /><span class="text-primary">Tus ideas</span>
                    </h2>
                    <p class="text-slate-400 text-lg md:text-xl font-normal leading-relaxed mb-8 max-w-lg">
                        Transformamos conceptos en soluciones tecnológicas que impulsan el crecimiento de tu empresa.
                        Desde apps móviles hasta sistemas complejos, tenemos la experiencia para llevarte al siguiente
                        nivel.
                    </p>
                    <div class="flex flex-wrap gap-4">
                        <a href="https://wa.me/5492657201291" target="_blank"
                            class="inline-block bg-primary text-background-dark px-8 py-3 rounded-lg font-bold flex items-center gap-2 hover:shadow-[0_0_20px_rgba(0,208,255,0.4)] transition-all">
                            Agendar Llamada <span class="material-symbols-outlined text-sm">arrow_forward</span>
                        </a>
                        <a href="https://wa.me/5492657201291" target="_blank"
                            class="inline-block border border-slate-custom hover:bg-slate-custom text-slate-100 px-8 py-3 rounded-lg font-bold transition-all">
                            Enviar Propuesta
                        </a>
                    </div>
                </div>
            </div>

            <!-- Services Grid -->
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6" data-aos="fade-up">
                <div class="max-w-xl">
                    <h3 class="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-3">Expertise</h3>
                    <h4 class="text-slate-100 text-3xl md:text-4xl font-bold leading-tight">Solucionamos tus problemas
                    </h4>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <!-- Service 1: Mobile -->
                <div data-aos="fade-up" data-aos-delay="100"
                    class="group relative p-8 rounded-xl border border-slate-custom bg-slate-custom/20 hover:bg-slate-custom/40 transition-all duration-300 cyan-glow overflow-hidden">
                    <div
                        class="absolute top-0 right-0 p-4 opacity-10 text-primary group-hover:opacity-20 transition-opacity">
                        <span class="material-symbols-outlined text-6xl">smartphone</span>
                    </div>
                    <div
                        class="size-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                        <span class="material-symbols-outlined text-3xl">app_shortcut</span>
                    </div>
                    <h5 class="text-slate-100 text-xl font-bold mb-3">Apps Móviles</h5>
                    <p class="text-slate-400 text-sm leading-relaxed mb-6">Apps nativas para iOS y Android con diseño
                        intuitivo y funcionalidades avanzadas.</p>
                    <div class="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider">
                        <span class="w-4 h-[1px] bg-primary"></span>
                        UI/UX Nativo
                    </div>
                </div>

                <!-- Service 2: Custom Systems -->
                <div data-aos="fade-up" data-aos-delay="200"
                    class="group relative p-8 rounded-xl border border-slate-custom bg-slate-custom/20 hover:bg-slate-custom/40 transition-all duration-300 cyan-glow overflow-hidden">
                    <div
                        class="absolute top-0 right-0 p-4 opacity-10 text-primary group-hover:opacity-20 transition-opacity">
                        <span class="material-symbols-outlined text-6xl">devices</span>
                    </div>
                    <div
                        class="size-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                        <span class="material-symbols-outlined text-3xl">desktop_windows</span>
                    </div>
                    <h5 class="text-slate-100 text-xl font-bold mb-3">Sistemas a Medida</h5>
                    <p class="text-slate-400 text-sm leading-relaxed mb-6">Desarrollo de software personalizado para
                        optimizar los procesos de tu empresa.</p>
                    <div class="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider">
                        <span class="w-4 h-[1px] bg-primary"></span>
                        Escalabilidad
                    </div>
                </div>

                <!-- Service 3: Web Development -->
                <div data-aos="fade-up" data-aos-delay="300"
                    class="group relative p-8 rounded-xl border border-slate-custom bg-slate-custom/20 hover:bg-slate-custom/40 transition-all duration-300 cyan-glow overflow-hidden">
                    <div
                        class="absolute top-0 right-0 p-4 opacity-10 text-primary group-hover:opacity-20 transition-opacity">
                        <span class="material-symbols-outlined text-6xl">language</span>
                    </div>
                    <div
                        class="size-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                        <span class="material-symbols-outlined text-3xl">public</span>
                    </div>
                    <h5 class="text-slate-100 text-xl font-bold mb-3">Desarrollo Web</h5>
                    <p class="text-slate-400 text-sm leading-relaxed mb-6">Sitios web modernos, responsivos y
                        optimizados para conversión y SEO.</p>
                    <div class="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider">
                        <span class="w-4 h-[1px] bg-primary"></span>
                        Conversión
                    </div>
                </div>

                <!-- Service 4: AI Chatbots -->
                <div data-aos="fade-up" data-aos-delay="400"
                    class="group relative p-8 rounded-xl border border-slate-custom bg-slate-custom/20 hover:bg-slate-custom/40 transition-all duration-300 cyan-glow overflow-hidden">
                    <div
                        class="absolute top-0 right-0 p-4 opacity-10 text-primary group-hover:opacity-20 transition-opacity">
                        <span class="material-symbols-outlined text-6xl">smart_toy</span>
                    </div>
                    <div
                        class="size-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                        <span class="material-symbols-outlined text-3xl">psychology</span>
                    </div>
                    <h5 class="text-slate-100 text-xl font-bold mb-3">Chatbots IA</h5>
                    <p class="text-slate-400 text-sm leading-relaxed mb-6">Asistentes virtuales inteligentes para
                        automatizar ventas y atención al cliente.</p>
                    <div class="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider">
                        <span class="w-4 h-[1px] bg-primary"></span>
                        Automatización
                    </div>
                </div>
            </div>

            <!-- Tech Footer CTA -->
            <div data-aos="fade-up"
                class="w-full bg-slate-custom/20 border-t border-slate-custom py-16 rounded-xl mt-12 bg-pattern overflow-hidden relative">
                <div class="absolute inset-0 bg-mesh opacity-20 pointer-events-none"></div>
                <div class="relative z-10 px-6 flex flex-col items-center text-center">
                    <div class="flex gap-1 mb-8">
                        <div class="h-1 w-12 bg-primary/40 rounded-full"></div>
                        <div class="h-1 w-24 bg-primary rounded-full"></div>
                        <div class="h-1 w-12 bg-primary/40 rounded-full"></div>
                    </div>
                    <h3 class="text-slate-100 text-3xl font-bold mb-6 italic">¿Listo para transformar tu negocio?</h3>
                    <p class="text-slate-400 max-w-2xl mb-10 leading-relaxed">
                        Reserva una consulta de descubrimiento sin costo y analicemos el potencial de crecimiento para
                        tu infraestructura tecnológica.
                    </p>
                    <div class="flex items-center gap-12 flex-wrap justify-center opacity-60">
                        <div class="flex items-center gap-2">
                            <span class="material-symbols-outlined text-primary">verified</span>
                            <span class="text-slate-100 font-semibold tracking-widest text-sm uppercase">Consulta
                                Gratuita</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="material-symbols-outlined text-primary">schedule</span>
                            <span class="text-slate-100 font-semibold tracking-widest text-sm uppercase">Respuesta
                                &lt;24h</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="material-symbols-outlined text-primary">school</span>
                            <span class="text-slate-100 font-semibold tracking-widest text-sm uppercase">4+ Años
                                Exp.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>

<style scoped>
.bg-pattern {
    background-image:
        radial-gradient(circle at 25% 25%, rgba(0, 208, 255, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, rgba(0, 208, 255, 0.05) 0%, transparent 50%);
}
</style>
