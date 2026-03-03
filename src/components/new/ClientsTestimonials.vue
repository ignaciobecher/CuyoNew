<template>
    <section class="max-w-7xl mx-auto px-6 lg:px-24 py-20">
        <!-- Hero Section -->
        <div class="flex flex-col gap-6 md:text-left mb-16" data-aos="fade-down">
            <span class="text-primary font-bold tracking-widest text-xs uppercase">🤝 Nuestros Socios</span>
            <h2 class="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
                Empresas que confían en nosotros
            </h2>
            <p class="text-slate-400 text-lg max-w-2xl leading-relaxed">
                Trabajamos junto a socios estratégicos para expandir el alcance de nuestras soluciones SaaS y crear un
                ecosistema de colaboración que impulse el crecimiento mutuo.
            </p>
        </div>

        <!-- Logo Cloud -->
        <div class="border-y border-white/10 py-12 mb-24" data-aos="fade-up" data-aos-delay="100">
            <p class="text-slate-500 text-xs font-bold uppercase tracking-widest text-center mb-10">Colaborando con
                líderes y marcas locales</p>
            <div
                class="flex flex-wrap justify-center gap-16 items-center opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                <!-- Logo 1: La Pedrera -->
                <img src="@/assets/laPedrera.png" alt="La Pedrera - Socio estratégico"
                    class="h-16 md:h-20 object-contain drop-shadow-sm transition-all hover:scale-105" />
                <!-- Logo 2: Nuevo Sol -->
                <img src="@/assets/nuevoSol.png" alt="Nuevo Sol - Socio estratégico"
                    class="h-16 md:h-20 object-contain drop-shadow-sm transition-all hover:scale-105" />
            </div>
        </div>

        <!-- Benefits (Replacing Testimonials out of lack of actual quotes) -->
        <div class="space-y-12">
            <h3 class="text-white text-2xl font-bold mb-8" data-aos="fade-down">¿Por qué trabajar con nosotros?</h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                <div data-aos="fade-up" data-aos-delay="100"
                    class="bg-white/[0.02] p-8 rounded-xl border border-white/5 flex flex-col justify-between hover:border-primary/20 transition-all duration-300">
                    <div>
                        <span class="material-symbols-outlined text-primary text-4xl mb-6">handshake</span>
                        <h4 class="text-white font-bold text-lg mb-4">Colaboración Estratégica</h4>
                        <p class="text-slate-400 text-sm leading-relaxed">
                            Unimos fuerzas para crear soluciones innovadoras que amplían las oportunidades de negocio.
                        </p>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-delay="200"
                    class="bg-white/[0.02] p-8 rounded-xl border border-white/5 flex flex-col justify-between hover:border-primary/20 transition-all duration-300">
                    <div>
                        <span class="material-symbols-outlined text-primary text-4xl mb-6">rocket_launch</span>
                        <h4 class="text-white font-bold text-lg mb-4">Tecnología de Vanguardia</h4>
                        <p class="text-slate-400 text-sm leading-relaxed">
                            Acceso a nuestra suite SaaS y herramientas tecnológicas para potenciar tu propuesta de
                            valor.
                        </p>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-delay="300"
                    class="bg-white/[0.02] p-8 rounded-xl border border-white/5 flex flex-col justify-between hover:border-primary/20 transition-all duration-300">
                    <div>
                        <span class="material-symbols-outlined text-primary text-4xl mb-6">trending_up</span>
                        <h4 class="text-white font-bold text-lg mb-4">Crecimiento Exponencial</h4>
                        <p class="text-slate-400 text-sm leading-relaxed">
                            Expandimos juntos hacia nuevos mercados con soluciones escalables y rentables.
                        </p>
                    </div>
                </div>

            </div>
        </div>

        <!-- Stats Section -->
        <div data-aos="zoom-in"
            class="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 py-12 px-6 bg-primary/5 rounded-2xl border border-primary/10">
            <div class="text-center">
                <div class="text-3xl font-black text-primary">50+</div>
                <p class="text-slate-400 text-xs uppercase font-bold tracking-widest mt-2">Clientes Obtenidos</p>
            </div>
            <div class="text-center">
                <div class="text-3xl font-black text-primary">1000+</div>
                <p class="text-slate-400 text-xs uppercase font-bold tracking-widest mt-2">Usuarios Activos</p>
            </div>
            <div class="text-center">
                <div class="text-3xl font-black text-primary">4+</div>
                <p class="text-slate-400 text-xs uppercase font-bold tracking-widest mt-2">Años Experiencia</p>
            </div>
            <div class="text-center">
                <div class="text-3xl font-black text-primary">24/7</div>
                <p class="text-slate-400 text-xs uppercase font-bold tracking-widest mt-2">Soporte Técnico</p>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>
