<template>
  <section class="services" id="servicios">
    <div class="services__inner">

      <div class="services__top fade-up">
        <span class="section-label section-label--dark">● QUÉ HACEMOS</span>
      </div>

      <div class="services__layout">
        <!-- Left: heading + list -->
        <div class="services__left">
          <h2 class="services__heading fade-up">Desarrollo de<br />software a medida.</h2>

          <ul class="services__list fade-up" :style="{ transitionDelay: '0.15s' }">
            <li
              v-for="(s, i) in services"
              :key="s.id"
              class="svc"
              :class="{ 'svc--open': openIndex === i }"
              @click="openIndex = openIndex === i ? null : i"
              @mouseenter="hoverIndex = i"
              @mouseleave="hoverIndex = null"
            >
              <div class="svc__row">
                <span class="svc__num">{{ s.id }}</span>
                <span class="svc__name">{{ s.name }}</span>
                <span class="svc__arrow" :class="{ 'svc__arrow--open': openIndex === i }">→</span>
              </div>
              <!-- Inline description (always in DOM, toggled with max-height) -->
              <div class="svc__body" :class="{ 'svc__body--open': openIndex === i }">
                <p class="svc__desc">{{ s.description }}</p>
              </div>
            </li>
          </ul>
        </div>

        <!-- Right: sticky description panel (desktop only) -->
        <div class="services__panel">
          <div class="services__panel-inner">
            <template v-if="activeService">
              <span class="services__panel-num">{{ activeService.id }}</span>
              <h3 class="services__panel-name">{{ activeService.name }}</h3>
              <p class="services__panel-desc">{{ activeService.description }}</p>
            </template>
            <template v-else>
              <p class="services__panel-hint">Seleccioná un servicio<br/>para ver los detalles</p>
            </template>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'LandingServices',
  data() {
    return {
      openIndex: null,   // for click-toggle on mobile / all
      hoverIndex: null,  // for desktop hover panel
      services: [
        {
          id: '01',
          name: 'Aplicaciones web y mobile',
          description:
            'Desarrollamos desde MVPs hasta aplicaciones complejas. Web, iOS, Android. Stack moderno, código limpio, arquitectura que escala.',
        },
        {
          id: '02',
          name: 'MVPs y productos digitales',
          description:
            'Convertimos ideas en productos reales en semanas, no meses. Priorizamos aprender rápido y lanzar antes.',
        },
        {
          id: '03',
          name: 'Integraciones y automatizaciones',
          description:
            'Conectamos tus herramientas y automatizamos procesos. Menos trabajo manual, menos errores, más tiempo para lo que importa.',
        },
        {
          id: '04',
          name: 'Consultoría técnica',
          description:
            'Revisamos tu arquitectura, identificamos problemas antes de que escalen y te ayudamos a tomar mejores decisiones técnicas.',
        },
      ],
    }
  },
  computed: {
    // Desktop panel shows hovered item, falling back to clicked item
    activeService() {
      if (this.hoverIndex !== null) return this.services[this.hoverIndex]
      if (this.openIndex !== null) return this.services[this.openIndex]
      return null
    },
  },
  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.06 }
    )
    this.$el.querySelectorAll('.fade-up').forEach((el, i) => {
      el.style.transitionDelay = el.style.transitionDelay || `${i * 0.1}s`
      observer.observe(el)
    })
  },
}
</script>

<style scoped>
.services {
  background: #F2F2F2;
  padding: 120px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}

.services__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}

.services__top {
  margin-bottom: 40px;
}

.services__layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}

.services__left {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.services__heading {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: clamp(32px, 4vw, 56px);
  line-height: 1.08;
  letter-spacing: -0.025em;
  color: #0A0A0A;
}

/* ─── Service list ──────────────────────────────────────── */
.services__list {
  list-style: none;
  padding: 0;
  margin: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.svc {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.svc__row {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 22px 0;
  user-select: none;
}

.svc__num {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.1em;
  color: #bbb;
  flex-shrink: 0;
  width: 26px;
}

.svc__name {
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: clamp(15px, 1.8vw, 20px);
  color: #0A0A0A;
  flex: 1;
  transition: color 0.2s;
}

.svc--open .svc__name,
.svc:hover .svc__name {
  color: #000;
}

.svc__arrow {
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  color: #bbb;
  transition: color 0.2s, transform 0.3s;
  flex-shrink: 0;
}

.svc--open .svc__arrow,
.svc:hover .svc__arrow {
  color: #0A0A0A;
}

.svc__arrow--open {
  transform: rotate(90deg);
  color: #0A0A0A !important;
}

/* Expand/collapse body */
.svc__body {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease;
  overflow: hidden;
}

.svc__body--open {
  grid-template-rows: 1fr;
}

.svc__desc {
  min-height: 0;
  font-family: 'Syne', sans-serif;
  font-size: 14px;
  line-height: 1.65;
  color: #555;
  padding: 0 0 18px 42px;
}

/* ─── Desktop right panel ─────────────────────────────── */
.services__panel {
  position: sticky;
  top: 100px;
}

.services__panel-inner {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 40px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  min-height: 220px;
  justify-content: center;
  transition: border-color 0.2s;
}

.services__panel-inner:has(.services__panel-name) {
  border-color: rgba(0, 0, 0, 0.15);
}

.services__panel-num {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.12em;
  color: #aaa;
}

.services__panel-name {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: clamp(22px, 2.5vw, 32px);
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #0A0A0A;
}

.services__panel-desc {
  font-family: 'Syne', sans-serif;
  font-size: 15px;
  line-height: 1.65;
  color: #555;
}

.services__panel-hint {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.06em;
  color: #bbb;
  line-height: 1.8;
}

/* ─── Responsive ────────────────────────────────────────── */
@media (max-width: 900px) {
  .services__layout {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .services__panel {
    display: none;
  }
}

@media (max-width: 640px) {
  .services {
    padding: 80px 0;
  }

  .services__inner {
    padding: 0 24px;
  }

  .services__left {
    gap: 32px;
  }
}
</style>
