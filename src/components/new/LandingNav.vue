<template>
  <nav class="nav" :class="{ 'nav--scrolled': scrolled }">
    <div class="nav__inner">
      <a href="/" class="nav__logo">CuyoCode</a>

      <ul class="nav__links" :class="{ 'nav__links--open': menuOpen }">
        <li><a href="#servicios" @click.prevent="scrollTo('servicios')">Servicios</a></li>
        <li><a href="#productos" @click.prevent="scrollTo('productos')">Productos</a></li>
        <li><a href="#contacto" @click.prevent="scrollTo('contacto')">Contacto</a></li>
      </ul>

      <a
        href="https://wa.me/5493517706985"
        target="_blank"
        rel="noopener"
        class="nav__cta"
      >Hablemos →</a>

      <button
        class="nav__hamburger"
        :class="{ 'is-open': menuOpen }"
        @click="menuOpen = !menuOpen"
        aria-label="Menú"
      >
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'LandingNav',
  data() {
    return {
      scrolled: false,
      menuOpen: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll, { passive: true })
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      this.scrolled = window.scrollY > 40
    },
    scrollTo(id) {
      this.menuOpen = false
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    },
  },
}
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 24px 0;
  transition: padding 0.3s, background 0.3s, border-color 0.3s;
  border-bottom: 1px solid transparent;
}

.nav--scrolled {
  padding: 16px 0;
  background: rgba(10, 10, 10, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom-color: rgba(255, 255, 255, 0.06);
}

.nav__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  align-items: center;
  gap: 48px;
}

.nav__logo {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 18px;
  color: #fff;
  text-decoration: none;
  letter-spacing: -0.02em;
  flex-shrink: 0;
}

.nav__links {
  list-style: none;
  display: flex;
  gap: 36px;
  margin: 0;
  padding: 0;
  flex: 1;
}

.nav__links a {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #888;
  text-decoration: none;
  transition: color 0.2s;
}

.nav__links a:hover {
  color: #fff;
}

.nav__cta {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  letter-spacing: 0.05em;
  color: #00FF88;
  text-decoration: none;
  border: 1px solid #00FF88;
  padding: 10px 20px;
  transition: background 0.2s, color 0.2s;
  flex-shrink: 0;
}

.nav__cta:hover {
  background: #00FF88;
  color: #0A0A0A;
}

.nav__hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  padding: 4px;
  margin-left: auto;
}

.nav__hamburger span {
  display: block;
  width: 22px;
  height: 1px;
  background: #fff;
  transition: transform 0.3s, opacity 0.3s;
}

.nav__hamburger.is-open span:first-child {
  transform: translateY(6px) rotate(45deg);
}

.nav__hamburger.is-open span:last-child {
  transform: translateY(-6px) rotate(-45deg);
}

@media (max-width: 768px) {
  .nav__inner {
    padding: 0 24px;
    gap: 0;
  }

  .nav__hamburger {
    display: flex;
  }

  .nav__links {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #0A0A0A;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    z-index: -1;
  }

  .nav__links--open {
    display: flex;
  }

  .nav__links a {
    font-size: 20px;
    letter-spacing: 0.1em;
  }

  .nav__cta {
    display: none;
  }
}
</style>
