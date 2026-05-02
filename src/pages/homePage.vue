<template>
  <div class="landing">
    <LandingNav />
    <LandingHero />
    <LandingMetrics />
    <LandingProducts />
    <LandingServices />
    <LandingWhy />
    <LandingCTA />
    <LandingFooter />
  </div>
</template>

<script>
import LandingNav from '../components/new/LandingNav.vue'
import LandingHero from '../components/new/LandingHero.vue'
import LandingMetrics from '../components/new/LandingMetrics.vue'
import LandingProducts from '../components/new/LandingProducts.vue'
import LandingServices from '../components/new/LandingServices.vue'
import LandingWhy from '../components/new/LandingWhy.vue'
import LandingCTA from '../components/new/LandingCTA.vue'
import LandingFooter from '../components/new/LandingFooter.vue'

export default {
  name: 'HomePage',
  components: {
    LandingNav,
    LandingHero,
    LandingMetrics,
    LandingProducts,
    LandingServices,
    LandingWhy,
    LandingCTA,
    LandingFooter,
  },
}
</script>

<style>
/* ─── Reset & base for landing ───────────────────────────── */
.landing *,
.landing *::before,
.landing *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.landing {
  --bg: #0A0A0A;
  --bg-light: #F2F2F2;
  --text: #ffffff;
  --text-secondary: #888888;
  --text-dark: #0A0A0A;
  --accent: #00FF88;
  --border: rgba(255, 255, 255, 0.1);
  --font-display: 'Syne', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  background: #0A0A0A;
  color: #ffffff;
  overflow-x: hidden;
}

/* Override App.vue Poppins global */
.landing,
.landing * {
  font-family: 'Syne', sans-serif;
}

/* ─── Shared utilities ────────────────────────────────────── */
.section-label {
  font-family: 'JetBrains Mono', monospace !important;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #555;
  display: block;
}

.section-label--dark {
  color: #888;
}

/* Buttons */
.landing .btn {
  font-family: 'JetBrains Mono', monospace !important;
  font-size: 13px;
  letter-spacing: 0.04em;
  padding: 14px 28px;
  border: 1px solid #00FF88;
  background: transparent;
  color: #00FF88;
  text-decoration: none;
  display: inline-block;
  transition: background 0.2s, color 0.2s;
  border-radius: 0;
  line-height: 1;
}

.landing .btn:hover {
  background: #00FF88;
  color: #0A0A0A;
}

.landing .btn--solid {
  background: #00FF88;
  color: #0A0A0A;
  font-size: 15px;
  padding: 18px 36px;
}

.landing .btn--solid:hover {
  background: transparent;
  color: #00FF88;
}

/* ─── Scroll animations ───────────────────────────────────── */
.landing .fade-up {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
              transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.landing .fade-up.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
