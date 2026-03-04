<template>
    <section class="flex-1 max-w-5xl mx-auto w-full px-6 py-16 lg:py-24 relative" id="contacto">
        <!-- Background element -->
        <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/5 blur-[100px] rounded-full z-0 pointer-events-none">
        </div>

        <div class="glass-card rounded-2xl p-8 md:p-12 text-center relative z-10 overflow-hidden" data-aos="fade-up">
            <!-- Decorative accents -->
            <div
                class="absolute top-0 right-0 -mr-20 -mt-20 size-60 bg-primary/10 blur-[80px] rounded-full pointer-events-none">
            </div>
            <div
                class="absolute bottom-0 left-0 -ml-20 -mb-20 size-60 bg-primary/5 blur-[80px] rounded-full pointer-events-none">
            </div>

            <div class="max-w-3xl mx-auto relative z-20">
                <span
                    class="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">Contacto</span>
                <h2 class="text-4xl md:text-5xl text-white font-black tracking-tight mb-6">Empecemos a <span
                        class="text-primary">trabajar juntos</span>.</h2>
                <p class="text-slate-400 mb-10 text-lg md:text-xl leading-relaxed">¿Tienes un proyecto en mente o
                    necesitas impulsar la transformación digital de tu empresa? Contáctanos y descubre cómo podemos
                    ayudarte a crear soluciones escalables y de alto impacto.</p>

                <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <a href="https://wa.me/5492657201291" target="_blank"
                        class="group inline-flex items-center justify-center gap-3 h-14 px-8 rounded-full bg-primary text-background-dark font-bold hover:shadow-[0_0_30px_rgba(0,208,255,0.4)] transition-all">
                        <span class="text-lg">Hablar por WhatsApp</span>
                        <span
                            class="material-symbols-outlined font-bold group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </a>

                    <div class="flex flex-col items-center sm:items-start sm:border-l sm:border-white/10 sm:pl-6">
                        <span class="text-sm text-slate-500 font-medium">También puedes escribirnos a</span>
                        <a href="mailto:ignaciobecher@cuyocode.com"
                            class="text-slate-300 hover:text-primary transition-colors font-medium">ignaciobecher@cuyocode.com</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>

<style scoped>
.glass-card {
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.05);
}
</style>
