<template>
  <section class="metrics" id="metricas">
    <div class="metrics__inner">
      <span class="section-label section-label--dark fade-up">● EN NÚMEROS</span>

      <div class="metrics__grid">
        <div
          v-for="(m, i) in metrics"
          :key="m.number"
          class="metric fade-up"
        >
          <span class="metric__number">{{ m.number }}</span>
          <span class="metric__label">{{ m.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LandingMetrics',
  data() {
    return {
      metrics: [
        { number: '50+', label: 'proyectos entregados' },
        { number: '5', label: 'años en el mercado' },
        { number: '4', label: 'SaaS propios online' },
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
.metrics {
  background: #F2F2F2;
  padding: 120px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}

.metrics__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}

.metrics__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  margin-top: 48px;
}

.metric {
  padding: 40px 40px 40px 0;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.metric:first-child {
  padding-left: 0;
}

.metric:last-child {
  border-right: none;
  padding-left: 40px;
}

.metric:nth-child(2) {
  padding-left: 40px;
}

.metric__number {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: clamp(80px, 14vw, 180px);
  line-height: 0.9;
  letter-spacing: -0.04em;
  color: #0A0A0A;
  display: block;
}

.metric__label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #777;
  display: block;
}

@media (max-width: 768px) {
  .metrics {
    padding: 80px 0;
  }

  .metrics__inner {
    padding: 0 24px;
  }

  .metrics__grid {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .metric {
    padding: 32px 0;
    border-right: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .metric:first-child,
  .metric:nth-child(2),
  .metric:last-child {
    padding-left: 0;
  }

  .metric:last-child {
    border-bottom: none;
  }

  .metric__number {
    font-size: clamp(72px, 20vw, 120px);
  }
}
</style>
