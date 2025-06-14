<template>
  <div class="header-container" ref="header">
    <!-- Background Pattern -->
    <div class="background-pattern"></div>

    <!-- Hero Content -->
    <div class="hero-content">
      <div class="hero-text">
        <div class="badge">
          <span>Desarrollo de Software</span>
        </div>
        <h1 class="hero-title">
          <span class="title-line">CREAMOS</span>
          <span class="title-line highlight">SOLUCIONES</span>
          <span class="title-line subtitle">TECNOLÓGICAS</span>
        </h1>
        <p class="hero-description">
          Transformamos ideas en software innovador. Desarrollamos aplicaciones web, móviles y sistemas empresariales con tecnología de vanguardia.
        </p>
        <div class="hero-actions">
          <button class="cta-button primary">
            <a href="https://wa.link/jajbyw" target="_blank" class="button-link">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M8 2v4l-3-3-3 3V2h6zM16 2v4l3-3 3 3V2h-6z"/>
                <path d="M12 12v8"/>
                <path d="M8 16l4-4 4 4"/>
              </svg>
              AGENDA UNA LLAMADA
            </a>
          </button>
      
        </div>
      </div>
      
      <!-- Decorative Elements -->
      <div class="hero-visual">
        <div class="floating-card card-1">
          <div class="card-content">
            <div class="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
              </svg>
            </div>
            <span>Desarrollo</span>
          </div>
        </div>
        
        <div class="floating-card card-2">
          <div class="card-content">
            <div class="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span>Arquitectura</span>
          </div>
        </div>
        
        <div class="floating-card card-3">
          <div class="card-content">
            <div class="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9 12l2 2 4-4"/>
                <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
                <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
                <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3"/>
                <path d="M12 21c0-1 1-3 3-3s3 2 3 3-1 3-3 3-3-2-3-3"/>
              </svg>
            </div>
            <span>Innovación</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="stats-section">
      <div class="stat-item">
        <div class="stat-number">50+</div>
        <div class="stat-label">Proyectos</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">3+</div>
        <div class="stat-label">Años</div>
      </div>
    </div>
  </div>

  <!-- WhatsApp Float Button -->

</template>

<script>
export default {
  name: 'HeaderComponent',
  mounted() {
    this.initAnimations();
  },
  methods: {
    initAnimations() {
      // Animate floating cards
      const cards = document.querySelectorAll('.floating-card');
      cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.5}s`;
      });

      // Animate hero text
      const titleLines = document.querySelectorAll('.title-line');
      titleLines.forEach((line, index) => {
        line.style.animationDelay = `${index * 0.2}s`;
      });
    }
  }
}
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
  background: linear-gradient(135deg, #2a0878 0%, #1a0550 100%);
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
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(12, 195, 155, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(12, 195, 155, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.background-pattern::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(45deg, transparent 49%, rgba(255, 255, 255, 0.02) 50%, transparent 51%),
    linear-gradient(-45deg, transparent 49%, rgba(255, 255, 255, 0.02) 50%, transparent 51%);
  background-size: 60px 60px;
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
  min-height: calc(100vh - 120px);
}

.hero-text {
  flex: 1;
  max-width: 650px;
  padding-right: 2rem;
}

.badge {
  display: inline-block;
  padding: 0.6rem 1.2rem;
  background: rgba(12, 195, 155, 0.15);
  color: #0cc39b;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 2.5rem;
  border: 1px solid rgba(12, 195, 155, 0.3);
  animation: fadeInUp 0.8s ease-out;
  backdrop-filter: blur(10px);
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
  color: #0cc39b;
  text-shadow: 0 0 30px rgba(12, 195, 155, 0.3);
}

.title-line.subtitle {
  font-size: clamp(1.8rem, 5vw, 3rem);
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
  margin-top: 0.5rem;
}

.hero-description {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  margin-bottom: 3.5rem;
  max-width: 550px;
  animation: fadeInUp 1s ease-out;
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  animation: fadeInUp 1.2s ease-out;
}

.cta-button {
  padding: 1.2rem 2.5rem;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  min-width: 200px;
  justify-content: center;
}

.cta-button.primary {
  background: linear-gradient(135deg, #0cc39b 0%, #08a085 100%);
  color: #2a0878;
  box-shadow: 0 8px 30px rgba(12, 195, 155, 0.25);
}

.cta-button.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(12, 195, 155, 0.35);
}

.cta-button.secondary {
  background: transparent;
  color: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.cta-button.secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
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
  width: 20px;
  height: 20px;
  stroke-width: 2;
}

/* Hero Visual */
.hero-visual {
  flex: 0 0 400px;
  position: relative;
  height: 500px;
  display: none;
}

.floating-card {
  position: absolute;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 8px 32px rgba(42, 8, 120, 0.15);
  animation: float 6s ease-in-out infinite;
  min-width: 160px;
}

.floating-card.card-1 {
  top: 10%;
  right: 15%;
  animation-delay: 0s;
}

.floating-card.card-2 {
  top: 45%;
  right: 5%;
  animation-delay: 2s;
}

.floating-card.card-3 {
  top: 75%;
  right: 25%;
  animation-delay: 4s;
}

.card-content {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #ffffff;
}

.card-icon {
  width: 45px;
  height: 45px;
  background: linear-gradient(135deg, #0cc39b 0%, #08a085 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.card-icon svg {
  width: 22px;
  height: 22px;
  stroke: #2a0878;
  stroke-width: 2;
}

.card-content span {
  font-weight: 600;
  font-size: 0.95rem;
}

/* Stats Section */
.stats-section {
  display: flex;
  justify-content: center;
  gap: 6rem;
  padding: 3rem 2rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-item {
  text-align: center;
  color: #ffffff;
}

.stat-number {
  font-size: 3rem;
  font-weight: 800;
  color: #0cc39b;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 20px rgba(12, 195, 155, 0.3);
}

.stat-label {
  font-size: 1rem;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
}


/* Responsive Design */
@media (min-width: 1200px) {
  .hero-visual {
    display: block;
  }
}

@media (max-width: 1199px) {
  .hero-content {
    flex-direction: column;
    text-align: center;
    padding: 4rem 2rem 3rem;
  }
  
  .hero-text {
    max-width: 100%;
    padding-right: 0;
    margin-bottom: 3rem;
  }
  
  .hero-visual {
    display: none;
  }
}

@media (max-width: 768px) {
  .hero-content {
    padding: 3rem 1rem 2rem;
  }
  
  .badge {
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
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
    max-width: 320px;
    padding: 1rem 2rem;
  }
  
  .stats-section {
    gap: 3rem;
    padding: 2rem 1rem;
  }
  
  .stat-number {
    font-size: 2.5rem;
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
    font-size: 0.9rem;
    padding: 0.9rem 1.5rem;
    min-width: 180px;
  }
  
  .stats-section {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
  
  .stat-number {
    font-size: 2.2rem;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .background-pattern {
    opacity: 0.3;
  }
  
  .floating-card {
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