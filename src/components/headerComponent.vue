<template>
  <div class="header-container" ref="header">
    <!-- Background Pattern -->
    <div class="background-pattern"></div>

    <!-- Hero Content -->
    <div class="hero-content">
      <div class="hero-text">
        <div class="badge">
          <span>Soluciones para tu negocio</span>
        </div>
        <h1 class="hero-title">
          <span class="title-line">TENEMOS LA TECNOLOGÍA</span>
          <span class="title-line highlight">QUE TU NEGOCIO</span>
          <span class="title-line subtitle">NECESITA PARA CRECER</span>
        </h1>
        <p class="hero-description">
          CuyoCode ofrece soluciones digitales personalizadas para todo tipo de
          negocio. Desde gestión de inventarios y ventas hasta herramientas para
          gimnasios y restaurantes, tenemos la tecnología para que crezcas sin
          límites.
        </p>
        <div class="hero-actions">
          <button class="cta-button primary">
            <a href="#productos" class="button-link">
              <svg
                class="icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10,17 15,12 10,7" />
                <line x1="15" y1="12" x2="3" y2="12" />
              </svg>
              CONOCÉ NUESTRAS SOLUCIONES
            </a>
          </button>

          <button class="cta-button tertiary">
            <a href="https://wa.link/jajbyw" class="button-link">
              <svg
                class="icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
                />
              </svg>
              DESARROLLO A MEDIDA
            </a>
          </button>
        </div>
      </div>

      <!-- Product Cards -->
      <div class="hero-visual">
        <div class="suite-title">
          <h3>Nuestras Soluciones</h3>
        </div>

        <div class="product-card card-1">
          <div class="card-content">
          
            <div class="card-info">
              <h4>Distrify</h4>
              <p>Gestión integral de inventarios</p>
            </div>
          </div>
        </div>

        <div class="product-card card-2">
          <div class="card-content">
          
            <div class="card-info">
              <h4>Trainify</h4>
              <p>Gestión de gimnasios</p>
            </div>
          </div>
        </div>

        <div class="product-card card-3">
          <div class="card-content">
          
            <div class="card-info">
              <h4>Foodify</h4>
              <p>Gestión gastronómica</p>
            </div>
          </div>
        </div>

        <div class="coming-soon-card">
          <div class="card-content">
         
            <div class="card-info">
              <h4>Próximamente</h4>
              <p>Más herramientas...</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="stats-section">
      <div class="stat-item">
        <div class="stat-number">50+</div>
        <div class="stat-label">Clientes</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">4+</div>
        <div class="stat-label">Años de Experiencia</div>
      </div>
   
      <div class="stat-item">
        <div class="stat-number">24/7</div>
        <div class="stat-label">Soporte Técnico</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  mounted() {
    this.initAnimations();
  },
  methods: {
    initAnimations() {
      // Animate product cards with staggered delay
      const productCards = document.querySelectorAll(
        ".product-card, .coming-soon-card"
      );
      productCards.forEach((card, index) => {
        card.style.animationDelay = `${0.3 + index * 0.2}s`;
      });

      // Animate hero text elements
      const titleLines = document.querySelectorAll(".title-line");
      titleLines.forEach((line, index) => {
        line.style.animationDelay = `${index * 0.15}s`;
      });

      // Animate CTAs
      const ctaButtons = document.querySelectorAll(".cta-button");
      ctaButtons.forEach((button, index) => {
        button.style.animationDelay = `${0.8 + index * 0.1}s`;
      });

      // Animate stats on scroll
      this.observeStats();
    },

    observeStats() {
      const statsSection = document.querySelector(".stats-section");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.animateNumbers();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );

      if (statsSection) {
        observer.observe(statsSection);
      }
    },

    animateNumbers() {
      const statNumbers = document.querySelectorAll(".stat-number");
      statNumbers.forEach((stat, index) => {
        setTimeout(() => {
          stat.classList.add("animate-number");
        }, index * 100);
      });
    },
  },
};
</script>

<style scoped>
/* Reset and Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Header Container */
.header-container {
  position: relative;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* Background Pattern */
.background-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(
      circle at 25% 25%,
      rgba(0, 255, 255, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 75% 75%,
      rgba(0, 123, 255, 0.08) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 50% 50%,
      rgba(255, 255, 255, 0.03) 0%,
      transparent 70%
    );
  pointer-events: none;
}

.background-pattern::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(
      45deg,
      transparent 49%,
      rgba(255, 255, 255, 0.02) 50%,
      transparent 51%
    ),
    linear-gradient(
      -45deg,
      transparent 49%,
      rgba(255, 255, 255, 0.02) 50%,
      transparent 51%
    );
  background-size: 40px 40px;
}

/* Hero Content */
.hero-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
  padding: 6rem 2rem 4rem;
  position: relative;
  z-index: 5;
  min-height: calc(100vh - 200px);
  gap: 4rem;
}

.hero-text {
  flex: 1;
  max-width: 650px;
}

.badge {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background: rgba(0, 255, 255, 0.1);
  color: #00ffff;
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 2.5rem;
  border: 1px solid rgba(0, 255, 255, 0.2);
  animation: fadeInUp 0.8s ease-out;
  backdrop-filter: blur(15px);
  box-shadow: 0 4px 20px rgba(0, 255, 255, 0.1);
}

.hero-title {
  margin-bottom: 2.5rem;
  line-height: 1.1;
}

.title-line {
  display: block;
  font-size: clamp(2.8rem, 8vw, 5.5rem);
  font-weight: 800;
  color: #ffffff;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out forwards;
  margin-bottom: 0.2rem;
}

.title-line.highlight {
  background: linear-gradient(135deg, #00ffff 0%, #007bff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px rgba(0, 255, 255, 0.3);
}

.title-line.subtitle {
  font-size: clamp(1.8rem, 5vw, 3rem);
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
  margin-top: 0.5rem;
}

.hero-description {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  margin-bottom: 3.5rem;
  max-width: 580px;
  animation: fadeInUp 1s ease-out;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  animation: fadeInUp 1.2s ease-out;
}

.cta-button {
  padding: 1.2rem 2rem;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  min-width: 180px;
  justify-content: center;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

.cta-button.primary {
  background: linear-gradient(135deg, #00ffff 0%, #007bff 100%);
  color: #1a1a2e;
  box-shadow: 0 8px 30px rgba(0, 255, 255, 0.25);
}

.cta-button.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(0, 255, 255, 0.35);
}

.cta-button.secondary {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
}

.cta-button.secondary:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-2px);
}

.cta-button.tertiary {
  background: transparent;
  color: #00ffff;
  border: 2px solid rgba(0, 255, 255, 0.3);
}

.cta-button.tertiary:hover {
  background: rgba(0, 255, 255, 0.1);
  border-color: rgba(0, 255, 255, 0.5);
  transform: translateY(-2px);
}

.button-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.icon {
  width: 18px;
  height: 18px;
  stroke-width: 2;
}

/* Hero Visual - Product Suite */
.hero-visual {
  flex: 0 0 450px;
  position: relative;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.suite-title {
  text-align: center;
  margin-bottom: 1rem;
}

.suite-title h3 {
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 700;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out 0.2s forwards;
}

.product-card,
.coming-soon-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  animation: slideInRight 0.8s ease-out forwards;
  position: relative;
  overflow: hidden;
}

.product-card:hover,
.coming-soon-card:hover {
  transform: translateY(-8px) translateX(-4px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  border-color: rgba(255, 255, 255, 0.25);
}

.coming-soon-card {
  opacity: 0.7;
  border-style: dashed;
}

.card-content {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  color: #ffffff;
}

.card-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}

.card-icon.distrify {
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
  box-shadow: 0 4px 20px rgba(255, 107, 107, 0.3);
}

.card-icon.trainify {
  background: linear-gradient(135deg, #00d2d3 0%, #54a0ff 100%);
  box-shadow: 0 4px 20px rgba(0, 210, 211, 0.3);
}

.card-icon.foodify {
  background: linear-gradient(135deg, #feca57 0%, #ff9ff3 100%);
  box-shadow: 0 4px 20px rgba(254, 202, 87, 0.3);
}

.card-icon.coming {
  background: linear-gradient(135deg, #a55eea 0%, #26de81 100%);
  box-shadow: 0 4px 20px rgba(165, 94, 234, 0.3);
}

.card-icon svg {
  width: 24px;
  height: 24px;
  stroke: #ffffff;
  stroke-width: 2;
  z-index: 2;
}

.card-info h4 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
  color: #ffffff;
}

.card-info p {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
}

/* Stats Section */
.stats-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  padding: 3rem 2rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 20px 20px 0 0;
}

.stat-item {
  text-align: center;
  color: #ffffff;
  padding: 1.5rem 1rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.stat-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #00ffff, #007bff);
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.stat-item:hover::before {
  transform: scaleX(1);
}

.stat-item:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(0, 255, 255, 0.3);
  box-shadow: 0 10px 30px rgba(0, 255, 255, 0.1);
}

.stat-number {
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, #00ffff 0%, #007bff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
  line-height: 1;
  transform: scale(0.8);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.stat-number.animate-number {
  transform: scale(1);
}

.stat-label {
  font-size: 1rem;
  opacity: 0.9;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
}

/* Keyframe animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive Design */
@media (min-width: 1200px) {
  .hero-visual {
    display: flex;
  }
}

@media (max-width: 1199px) {
  .hero-content {
    flex-direction: column;
    text-align: center;
    padding: 4rem 2rem 3rem;
    gap: 3rem;
  }

  .hero-text {
    max-width: 100%;
  }

  .hero-visual {
    flex: none;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .hero-content {
    padding: 3rem 1rem 2rem;
  }

  .badge {
    font-size: 0.85rem;
    padding: 0.6rem 1.2rem;
    margin-bottom: 2rem;
  }

  .hero-description {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .cta-button {
    width: 100%;
    max-width: 300px;
    padding: 1rem 1.5rem;
    font-size: 0.9rem;
  }

  .hero-visual {
    gap: 1rem;
  }

  .product-card,
  .coming-soon-card {
    padding: 1.2rem;
  }

  .stats-section {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    padding: 2rem 1rem;
  }

  .stat-number {
    font-size: 2.2rem;
  }

  .stat-label {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .hero-content {
    padding: 2rem 1rem;
  }

  .title-line {
    font-size: clamp(2.2rem, 12vw, 3.5rem);
  }

  .title-line.subtitle {
    font-size: clamp(1.4rem, 8vw, 2rem);
  }

  .hero-description {
    font-size: 1rem;
  }

  .cta-button {
    font-size: 0.85rem;
    padding: 0.9rem 1.2rem;
    min-width: 160px;
  }

  .hero-actions {
    gap: 0.8rem;
  }

  .stats-section {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .stat-label {
    font-size: 0.8rem;
  }

  .product-card,
  .coming-soon-card {
    padding: 1rem;
  }

  .card-content {
    gap: 1rem;
  }

  .card-icon {
    width: 40px;
    height: 40px;
  }

  .card-icon svg {
    width: 20px;
    height: 20px;
  }

  .card-info h4 {
    font-size: 1rem;
  }

  .card-info p {
    font-size: 0.8rem;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .background-pattern {
    opacity: 0.3;
  }

  .product-card,
  .coming-soon-card {
    border-width: 2px;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
