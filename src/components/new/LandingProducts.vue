<template>
  <section class="products" id="productos">
    <div class="products__inner">

      <div class="products__header">
        <span class="section-label fade-up">● PRODUCTOS PROPIOS</span>
        <div class="products__headline-row">
          <h2 class="products__heading fade-up">
            No solo desarrollamos<br />para otros.
          </h2>
          <p class="products__sub fade-up">
            Estos son los 4 productos que nacieron en CuyoCode
            y hoy están en producción con usuarios reales.
          </p>
        </div>
      </div>

      <!-- Editorial product list -->
      <div class="products__list">
        <component
          :is="p.url ? 'a' : 'div'"
          v-for="(p, i) in products"
          :key="p.id"
          :href="p.url || undefined"
          :target="p.url ? '_blank' : undefined"
          rel="noopener"
          class="prow fade-up"
          :style="{ transitionDelay: (i * 0.08) + 's' }"
          @mouseenter="activeIndex = i"
          @mouseleave="activeIndex = null"
        >
          <!-- Left accent bar on hover -->
          <span class="prow__bar" :class="{ 'prow__bar--active': activeIndex === i }"></span>

          <!-- Number -->
          <span class="prow__num">{{ p.id }}</span>

          <!-- Main content -->
          <div class="prow__body">
            <div class="prow__name-row">
              <h3 class="prow__name">{{ p.name }}</h3>
              <span class="prow__tag">{{ p.tag }}</span>
            </div>
            <p class="prow__desc">{{ p.description }}</p>
          </div>

          <!-- Right: domain + cta -->
          <div class="prow__right">
            <span v-if="p.domain" class="prow__domain">{{ p.domain }}</span>
            <span class="prow__cta" :class="{ 'prow__cta--dim': !p.url }">
              {{ p.url ? 'Ver producto →' : 'Próximamente' }}
            </span>
          </div>

          <!-- Big decorative number behind -->
          <span class="prow__bg-num" aria-hidden="true">{{ p.id }}</span>
        </component>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'LandingProducts',
  data() {
    return {
      activeIndex: null,
      products: [
        {
          id: '01',
          name: 'Autino',
          description: 'CRM con IA para concesionarias de autos. Tomás, el asesor de ventas IA que atiende, califica y convierte leads.',
          tag: '● AUTOMOTRIZ',
          domain: 'autino.click',
          url: 'https://autino.click',
        },
        {
          id: '02',
          name: 'Trainify',
          description: 'Sistema de gestión integral para gimnasios. Cobro de cuotas, control de acceso, seguimiento de socios y más.',
          tag: '● FITNESS',
          domain: null,
          url: null,
        },
        {
          id: '03',
          name: 'Distrify',
          description: 'Gestión empresarial con comandos de voz e IA. Registrá ventas, gastos y movimientos hablando desde el teléfono.',
          tag: '● BUSINESS AI',
          domain: 'distrify.com.ar',
          url: 'https://distrify.com.ar',
        },
        {
          id: '04',
          name: 'Orkpad',
          description: 'El sistema operativo para freelancers tech. Proyectos, clientes, facturación y tiempo en un solo lugar.',
          tag: '● FREELANCE OS',
          domain: 'orkpad.com',
          url: 'https://orkpad.com',
        },
      ],
    }
  },
  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.05 }
    )
    this.$el.querySelectorAll('.fade-up').forEach((el) => {
      observer.observe(el)
    })
  },
}
</script>

<style scoped>
.products {
  background: #0A0A0A;
  padding: 120px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.products__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}

/* Header */
.products__header {
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.products__headline-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: end;
}

.products__heading {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: clamp(36px, 5vw, 68px);
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: #fff;
}

.products__sub {
  font-family: 'Syne', sans-serif;
  font-size: 15px;
  line-height: 1.65;
  color: #555;
  padding-bottom: 8px;
}

/* ─── Product rows ─────────────────────────────────────── */
.products__list {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.prow {
  position: relative;
  display: grid;
  grid-template-columns: 48px 1fr auto;
  gap: 32px;
  align-items: center;
  padding: 40px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  text-decoration: none;
  color: inherit;
  overflow: hidden;
  transition: background 0.3s;
}

a.prow:hover {
  background: rgba(0, 255, 136, 0.02);
}

/* Left green accent bar */
.prow__bar {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #00FF88;
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.prow__bar--active {
  transform: scaleY(1);
}

/* Number */
.prow__num {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.1em;
  color: #333;
  align-self: start;
  padding-top: 6px;
}

/* Body */
.prow__body {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 0;
}

.prow__name-row {
  display: flex;
  align-items: baseline;
  gap: 20px;
  flex-wrap: wrap;
}

.prow__name {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: clamp(36px, 5vw, 72px);
  line-height: 1;
  letter-spacing: -0.03em;
  color: #fff;
  transition: color 0.25s;
}

a.prow:hover .prow__name {
  color: #fff;
}

.prow__tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #444;
  flex-shrink: 0;
}

.prow__desc {
  font-family: 'Syne', sans-serif;
  font-size: 14px;
  line-height: 1.6;
  color: #555;
  max-width: 560px;
}

/* Right column */
.prow__right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  flex-shrink: 0;
  min-width: 160px;
}

.prow__domain {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: #444;
  letter-spacing: 0.04em;
}

.prow__cta {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  color: #00FF88;
  letter-spacing: 0.04em;
  transition: opacity 0.2s;
}

.prow__cta--dim {
  color: #333;
}

a.prow:hover .prow__cta:not(.prow__cta--dim) {
  opacity: 0.75;
}

/* Big decorative background number */
.prow__bg-num {
  position: absolute;
  right: -10px;
  top: 50%;
  transform: translateY(-50%);
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 160px;
  line-height: 1;
  letter-spacing: -0.05em;
  color: rgba(255, 255, 255, 0.025);
  pointer-events: none;
  user-select: none;
  transition: color 0.3s;
}

a.prow:hover .prow__bg-num {
  color: rgba(0, 255, 136, 0.04);
}

/* ─── Responsive ──────────────────────────────────────── */
@media (max-width: 900px) {
  .products__headline-row {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .prow {
    grid-template-columns: 40px 1fr;
    grid-template-rows: auto auto;
    gap: 16px 20px;
  }

  .prow__right {
    grid-column: 2;
    align-items: flex-start;
    min-width: 0;
  }

  .prow__bg-num {
    font-size: 100px;
  }
}

@media (max-width: 640px) {
  .products {
    padding: 80px 0;
  }

  .products__inner {
    padding: 0 24px;
  }

  .prow {
    padding: 32px 0;
    grid-template-columns: 36px 1fr;
  }

  .prow__name {
    font-size: clamp(32px, 8vw, 48px);
  }

  .prow__bg-num {
    display: none;
  }
}
</style>
