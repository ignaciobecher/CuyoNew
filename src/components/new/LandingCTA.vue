<template>
  <section class="cta-final" id="contacto">
    <div class="cta-final__inner">
      <span class="section-label fade-up">● TRABAJEMOS JUNTOS</span>

      <h2 class="cta-final__heading fade-up">¿Tenés una idea?</h2>

      <p class="cta-final__sub fade-up">
        Contanos de qué se trata.<br />Sin formularios, sin reuniones de reuniones.
      </p>

      <div class="cta-final__actions fade-up">
        <a
          href="https://wa.me/5493517706985"
          target="_blank"
          rel="noopener"
          class="btn btn--solid"
        >Escribinos por WhatsApp →</a>

        <span class="cta-final__note">Respondemos en menos de 24hs</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LandingCTA',
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
.cta-final {
  background: #0A0A0A;
  padding: 160px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cta-final::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(0, 255, 136, 0.04) 0%, transparent 70%);
  pointer-events: none;
}

.cta-final__inner {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
}

.cta-final__heading {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: clamp(48px, 7vw, 100px);
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: #fff;
}

.cta-final__sub {
  font-family: 'Syne', sans-serif;
  font-size: 18px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 8px;
}

.cta-final__actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.cta-final__note {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: #444;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

@media (max-width: 640px) {
  .cta-final {
    padding: 100px 0;
  }

  .cta-final__inner {
    padding: 0 24px;
  }
}
</style>
