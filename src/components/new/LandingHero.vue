<template>
  <section class="hero" id="inicio">
    <div class="hero__dotgrid"></div>

    <div class="hero__inner">
      <!-- Left content -->
      <div class="hero__text">
        <span class="section-label fade-up">● SOFTWARE FACTORY — ARGENTINA</span>

        <h1 class="hero__heading fade-up">
          Construimos software<br />que dura.
        </h1>

        <p class="hero__subtitle fade-up">
          Desarrollamos productos a medida y corremos 4 SaaS propios.
          Si llegaste acá, probablemente necesitás a alguien que entienda
          de tecnología y de negocio.
        </p>

        <div class="hero__ctas fade-up">
          <a
            href="https://wa.me/5493517706985"
            target="_blank"
            rel="noopener"
            class="btn"
          >Hablemos por WhatsApp →</a>
          <a href="#productos" @click.prevent="scrollTo('productos')" class="hero__link">
            Ver nuestros productos ↓
          </a>
        </div>
      </div>

      <!-- Right terminal -->
      <div class="hero__terminal fade-up">
        <div class="terminal">
          <div class="terminal__bar">
            <span class="terminal__dot td--red"></span>
            <span class="terminal__dot td--yellow"></span>
            <span class="terminal__dot td--green"></span>
            <span class="terminal__title">cuyocode ~ projects</span>
          </div>
          <div class="terminal__body" ref="termBody">
            <div
              v-for="(line, i) in visibleLines"
              :key="i"
              class="terminal__line"
              :class="{ 'terminal__line--empty': line.raw === '' }"
            >
              <span v-html="line.html || '&nbsp;'"></span>
              <span
                v-if="i === visibleLines.length - 1 && isTyping"
                class="terminal__caret"
              >▋</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const RAW_LINES = [
  { raw: '// CuyoCode — projects online', html: '<span class="tc comment">// CuyoCode — projects online</span>' },
  { raw: '', html: '' },
  { raw: "import { Autino } from 'autino.click'", html: '<span class="tc kw">import</span> <span class="tc mod">{ Autino }</span> <span class="tc kw">from</span> <span class="tc str">\'autino.click\'</span>' },
  { raw: "import { Trainify } from 'trainify.app'", html: '<span class="tc kw">import</span> <span class="tc mod">{ Trainify }</span> <span class="tc kw">from</span> <span class="tc str">\'trainify.app\'</span>' },
  { raw: "import { Distrify } from 'distrify.com.ar'", html: '<span class="tc kw">import</span> <span class="tc mod">{ Distrify }</span> <span class="tc kw">from</span> <span class="tc str">\'distrify.com.ar\'</span>' },
  { raw: "import { Orkpad } from 'orkpad.com'", html: '<span class="tc kw">import</span> <span class="tc mod">{ Orkpad }</span> <span class="tc kw">from</span> <span class="tc str">\'orkpad.com\'</span>' },
  { raw: '', html: '' },
  { raw: 'const agency = {', html: '<span class="tc kw">const</span> <span class="tc var">agency</span> <span class="tc punct">=</span> {' },
  { raw: "  name: 'CuyoCode',", html: '  <span class="tc prop">name</span><span class="tc punct">:</span> <span class="tc str">\'CuyoCode\'</span><span class="tc punct">,</span>' },
  { raw: "  location: 'San Luis, AR',", html: '  <span class="tc prop">location</span><span class="tc punct">:</span> <span class="tc str">\'San Luis, AR\'</span><span class="tc punct">,</span>' },
  { raw: "  founded: 2020,", html: '  <span class="tc prop">founded</span><span class="tc punct">:</span> <span class="tc num">2020</span><span class="tc punct">,</span>' },
  { raw: "  status: '→ building'", html: '  <span class="tc prop">status</span><span class="tc punct">:</span> <span class="tc accent">\'→ building\'</span>' },
  { raw: '}', html: '}' },
]

export default {
  name: 'LandingHero',
  data() {
    return {
      visibleLines: [],
      isTyping: true,
      lineInterval: null,
    }
  },
  mounted() {
    this.setupAnimations()
    this.startTerminal()
  },
  beforeUnmount() {
    if (this.lineInterval) clearInterval(this.lineInterval)
  },
  methods: {
    scrollTo(id) {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    },
    startTerminal() {
      let i = 0
      this.lineInterval = setInterval(() => {
        if (i < RAW_LINES.length) {
          this.visibleLines.push(RAW_LINES[i])
          i++
        } else {
          this.isTyping = false
          clearInterval(this.lineInterval)
        }
      }, 180)
    },
    setupAnimations() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add('visible')
          })
        },
        { threshold: 0.1 }
      )
      this.$el.querySelectorAll('.fade-up').forEach((el, i) => {
        el.style.transitionDelay = `${i * 0.1}s`
        observer.observe(el)
      })
    },
  },
}
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: #0A0A0A;
  overflow: hidden;
  padding: 140px 0 100px;
}

.hero__dotgrid {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 32px 32px;
  pointer-events: none;
}

.hero__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  width: 100%;
}

.hero__text {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.hero__heading {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: clamp(40px, 5.5vw, 80px);
  line-height: 1.1;
  letter-spacing: -0.025em;
  color: #fff;
}

.hero__subtitle {
  font-family: 'Syne', sans-serif;
  font-size: 17px;
  line-height: 1.7;
  color: #888;
  max-width: 480px;
}

.hero__ctas {
  display: flex;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
}

.hero__link {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  color: #888;
  text-decoration: underline;
  text-underline-offset: 4px;
  transition: color 0.2s;
}

.hero__link:hover {
  color: #fff;
}

/* Terminal */
.terminal {
  background: #111;
  border: 1px solid rgba(255, 255, 255, 0.08);
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  line-height: 1.8;
  overflow: hidden;
}

.terminal__bar {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.04);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.terminal__dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.td--red { background: #FF5F57; }
.td--yellow { background: #FEBC2E; }
.td--green { background: #28C840; }

.terminal__title {
  margin-left: 8px;
  font-size: 11px;
  color: #555;
  letter-spacing: 0.05em;
}

.terminal__body {
  padding: 20px 20px 24px;
  min-height: 260px;
}

.terminal__line {
  white-space: pre;
}

.terminal__line--empty {
  height: 1.8em;
}

.terminal__caret {
  display: inline-block;
  color: #00FF88;
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* Syntax colors (not scoped so they apply inside v-html) */
@media (max-width: 1024px) {
  .hero__inner {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .hero__heading {
    font-size: clamp(40px, 8vw, 72px);
  }
}

@media (max-width: 640px) {
  .hero {
    padding: 120px 0 80px;
  }
  .hero__inner {
    padding: 0 24px;
  }
  .hero__ctas {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
}
</style>

<!-- Unscoped for v-html syntax colors -->
<style>
.tc { }
.tc.comment { color: #6A9955; }
.tc.kw { color: #569CD6; }
.tc.mod { color: #9CDCFE; }
.tc.str { color: #CE9178; }
.tc.var { color: #9CDCFE; }
.tc.prop { color: #9CDCFE; }
.tc.num { color: #B5CEA8; }
.tc.punct { color: #D4D4D4; }
.tc.accent { color: #00FF88; }
</style>
