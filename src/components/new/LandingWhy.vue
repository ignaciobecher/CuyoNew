<template>
  <section class="why">
    <div class="why__inner">
      <span class="section-label fade-up">● POR QUÉ NOSOTROS</span>
      <h2 class="why__heading fade-up">Agencia chica, criterio grande.</h2>

      <div class="why__grid">
        <div v-for="(item, i) in items" :key="i" class="why-item fade-up">
          <h3 class="why-item__title">{{ item.title }}</h3>
          <p class="why-item__body">{{ item.body }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LandingWhy',
  data() {
    return {
      items: [
        {
          title: 'Construimos nuestro propio software.',
          body: 'Si tenemos 4 SaaS propios en producción, entendemos lo que es tener un producto real, no solo entregar código.',
        },
        {
          title: 'Hablamos de negocio, no solo de tecnología.',
          body: 'Nos importa si tu producto funciona, no si usamos el framework de moda.',
        },
        {
          title: 'Equipo real, sin intermediarios.',
          body: 'Hablás directo con quien desarrolla. Sin account managers, sin Chinese whispers.',
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
      { threshold: 0.1 }
    )
    this.$el.querySelectorAll('.fade-up').forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.12}s`
      observer.observe(el)
    })
  },
}
</script>

<style scoped>
.why {
  background: #0A0A0A;
  padding: 120px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.why__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}

.why__heading {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: clamp(32px, 4.5vw, 64px);
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: #fff;
  margin-bottom: 72px;
}

.why__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.why-item {
  padding: 48px 40px 0 0;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.why-item:last-child {
  border-right: none;
  padding-right: 0;
  padding-left: 40px;
}

.why-item:nth-child(2) {
  padding-left: 40px;
}

.why-item__title {
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.3;
  color: #fff;
  letter-spacing: -0.01em;
}

.why-item__body {
  font-family: 'Syne', sans-serif;
  font-size: 15px;
  line-height: 1.7;
  color: #666;
}

@media (max-width: 900px) {
  .why__grid {
    grid-template-columns: 1fr;
    border-top: none;
  }

  .why-item {
    padding: 40px 0;
    border-right: none;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }

  .why-item:nth-child(2),
  .why-item:last-child {
    padding-left: 0;
    padding-right: 0;
  }
}

@media (max-width: 640px) {
  .why {
    padding: 80px 0;
  }

  .why__inner {
    padding: 0 24px;
  }
}
</style>
