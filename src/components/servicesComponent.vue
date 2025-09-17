<template>
  <div class="services-container">
    <!-- Background Pattern -->
    <div class="background-pattern"></div>
    
    <!-- Content Wrapper -->
    <div class="content-wrapper">
      <!-- Header Section -->
      <div class="header-section">
        <div class="section-badge">
          <span>💡 Nuestros Servicios</span>
        </div>
        
        <h1 class="main-title">
          <span class="title-line">Hacemos realidad</span>
          <span class="title-line highlight">tus ideas</span>
          <span class="title-line subtitle">solucionamos tus problemas</span>
        </h1>
        
        <p class="description">
          Transformamos conceptos en soluciones tecnológicas que impulsan el crecimiento de tu empresa. 
          Desde apps móviles hasta sistemas complejos, tenemos la experiencia para llevarte al siguiente nivel.
        </p>
      </div>

      <!-- Logo Section -->
      <div class="logo-section">
        <div class="logo-wrapper">
          <img src="../assets/letraBlanca.png" alt="CuyoCode Logo" class="logo-image" />
          <div class="logo-glow"></div>
        </div>
      </div>

      <!-- Services Grid -->
      <div class="services-grid">
        <div class="service-card" v-for="(service, index) in services" :key="index">
     
          <div class="service-content">
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-description">{{ service.description }}</p>
          </div>
          <div class="service-overlay"></div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="cta-section">
        <div class="cta-content">
          <h2 class="cta-title">¿Listo para transformar tu negocio?</h2>
          <p class="cta-description">
            Conversemos sobre tu proyecto y descubre cómo podemos ayudarte a alcanzar tus objetivos.
          </p>
          
          <div class="cta-actions">
            <button class="cta-button primary">
              <a href="https://wa.link/jajbyw" target="_blank" class="button-link">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
                AGENDAR LLAMADA GRATUITA
              </a>
            </button>
            
            <button class="cta-button secondary">
              <a href="#contacto" class="button-link">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                ENVIAR PROPUESTA
              </a>
            </button>
          </div>
          
          <div class="cta-features">
            <div class="feature">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9 12l2 2 4-4"/>
                <circle cx="12" cy="12" r="10"/>
              </svg>
              <span>Consulta 100% gratuita</span>
            </div>
            <div class="feature">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12,6 12,12 16,14"/>
              </svg>
              <span>Respuesta en menos de 24h</span>
            </div>
            <div class="feature">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span>3+ años de experiencia</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesComponent',
  data() {
    return {
      services: [
        {
          title: 'APLICACIONES MÓVILES',
          description: 'Apps nativas para iOS y Android con diseño intuitivo y funcionalidades avanzadas',
          icon: 'MobileIcon'
        },
        {
          title: 'SISTEMAS A MEDIDA',
          description: 'Desarrollo de software personalizado para optimizar los procesos de tu empresa',
          icon: 'SystemIcon'
        },
        {
          title: 'DESARROLLO WEB',
          description: 'Sitios web modernos, responsivos y optimizados para conversión y SEO',
          icon: 'WebIcon'
        },
        {
          title: 'CHATBOTS IA',
          description: 'Asistentes virtuales inteligentes para automatizar ventas y atención al cliente',
          icon: 'ChatIcon'
        }
      ]
    }
  },
  components: {
    MobileIcon: {
      template: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
          <line x1="12" y1="18" x2="12.01" y2="18"/>
        </svg>
      `
    },
    SystemIcon: {
      template: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      `
    },
    WebIcon: {
      template: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      `
    },
    ChatIcon: {
      template: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          <path d="M8 10h8"/>
          <path d="M8 14h6"/>
        </svg>
      `
    }
  },
  mounted() {
    this.initAnimations();
  },
  methods: {
    initAnimations() {
      // Animate elements on scroll using Intersection Observer
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      });

      // Observe title lines
      const titleLines = document.querySelectorAll('.title-line');
      titleLines.forEach((line, index) => {
        line.style.animationDelay = `${index * 0.2}s`;
        observer.observe(line);
      });

      // Observe service cards
      const serviceCards = document.querySelectorAll('.service-card');
      serviceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.15}s`;
        observer.observe(card);
      });

      // Observe logo section
      const logoSection = document.querySelector('.logo-section');
      if (logoSection) {
        observer.observe(logoSection);
      }

      // Observe CTA section
      const ctaSection = document.querySelector('.cta-section');
      if (ctaSection) {
        observer.observe(ctaSection);
      }

      // Add hover effects to service cards
      this.addHoverEffects();
    },

    addHoverEffects() {
      const serviceCards = document.querySelectorAll('.service-card');
      
      serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          card.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
          card.style.transform = 'translateY(0) scale(1)';
        });
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

/* Services Container */
.services-container {
  position: relative;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  min-height: 100vh;
  overflow: hidden;
  padding: 6rem 0;
}

/* Background Pattern */
.background-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(0, 123, 255, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 70%);
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
  background-size: 40px 40px;
}

/* Content Wrapper */
.content-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 5;
}

/* Header Section */
.header-section {
  text-align: center;
  margin-bottom: 4rem;
}

.section-badge {
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

.main-title {
  margin-bottom: 2.5rem;
  line-height: 1.1;
}

.title-line {
  display: block;
  font-size: clamp(2.8rem, 8vw, 5rem);
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

.description {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  max-width: 800px;
  margin: 0 auto;
  animation: fadeInUp 1s ease-out;
}

/* Logo Section */
.logo-section {
  text-align: center;
  margin-bottom: 5rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.logo-section.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.logo-wrapper {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.logo-image {
  width: 220px;
  height: auto;
  filter: drop-shadow(0 10px 30px rgba(0, 255, 255, 0.3));
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.logo-wrapper:hover .logo-image {
  transform: scale(1.05);
  filter: drop-shadow(0 15px 40px rgba(0, 255, 255, 0.5));
}

.logo-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(0, 255, 255, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
}

.logo-wrapper:hover .logo-glow {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1.2);
}

/* Services Grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  margin-bottom: 6rem;
}

.service-card {
  position: relative;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  padding: 2.5rem 2rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
}

.service-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.service-card:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(0, 255, 255, 0.3);
  box-shadow: 0 20px 60px rgba(0, 255, 255, 0.15);
}

.service-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #00ffff 0%, #007bff 100%);
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 30px rgba(0, 255, 255, 0.3);
  position: relative;
  z-index: 2;
}

.service-card:hover .service-icon {
  transform: scale(1.1);
  box-shadow: 0 12px 40px rgba(0, 255, 255, 0.4);
  background: linear-gradient(135deg, #007bff 0%, #00ffff 100%);
}

.service-icon svg {
  width: 32px;
  height: 32px;
  stroke: #1a1a2e;
  stroke-width: 2;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-content {
  position: relative;
  z-index: 2;
}

.service-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
  letter-spacing: 0.5px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-description {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover .service-title {
  color: #00ffff;
}

.service-card:hover .service-description {
  color: rgba(255, 255, 255, 0.9);
}

.service-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 255, 255, 0.05) 0%, rgba(0, 123, 255, 0.05) 100%);
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 20px;
}

.service-card:hover .service-overlay {
  opacity: 1;
}

/* CTA Section */
.cta-section {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.cta-section.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.cta-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #00ffff, #007bff);
}

.cta-content {
  position: relative;
  z-index: 2;
}

.cta-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.cta-description {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.cta-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
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
  min-width: 240px;
  justify-content: center;
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
  border: 2px solid rgba(0, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}

.cta-button.secondary:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(0, 255, 255, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 255, 255, 0.2);
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

.cta-features {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.feature {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.feature:hover {
  color: #00ffff;
  transform: translateY(-2px);
}

.feature svg {
  width: 24px;
  height: 24px;
  stroke: #00ffff;
  stroke-width: 2;
  flex-shrink: 0;
}

/* Animations */
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

/* Responsive Design */
@media (max-width: 1200px) {
  .content-wrapper {
    padding: 0 1.5rem;
  }
  
  .services-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }
  
  .logo-image {
    width: 180px;
  }
}

@media (max-width: 768px) {
  .services-container {
    padding: 4rem 0;
  }
  
  .content-wrapper {
    padding: 0 1rem;
  }
  
  .header-section {
    margin-bottom: 3rem;
  }
  
  .section-badge {
    font-size: 0.85rem;
    padding: 0.6rem 1.2rem;
    margin-bottom: 2rem;
  }
  
  .description {
    font-size: 1.1rem;
  }
  
  .logo-section {
    margin-bottom: 4rem;
  }
  
  .logo-image {
    width: 150px;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 4rem;
  }
  
  .service-card {
    padding: 2rem 1.5rem;
  }
  
  .service-icon {
    width: 60px;
    height: 60px;
  }
  
  .service-icon svg {
    width: 28px;
    height: 28px;
  }
  
  .service-title {
    font-size: 1.2rem;
  }
  
  .service-description {
    font-size: 0.95rem;
  }
  
  .cta-section {
    padding: 3rem 1.5rem;
  }
  
  .cta-actions {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  
  .cta-button {
    width: 100%;
    max-width: 300px;
  }
  
  .cta-features {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .services-container {
    padding: 3rem 0;
  }
  
  .content-wrapper {
    padding: 0 1rem;
  }
  
  .title-line {
    font-size: clamp(2.2rem, 12vw, 3.5rem);
  }
  
  .title-line.subtitle {
    font-size: clamp(1.4rem, 8vw, 2rem);
  }
  
  .description {
    font-size: 1rem;
  }
  
  .logo-image {
    width: 120px;
  }
  
  .service-card {
    padding: 1.5rem 1rem;
  }
  
  .service-icon {
    width: 50px;
    height: 50px;
  }
  
  .service-icon svg {
    width: 24px;
    height: 24px;
  }
  
  .service-title {
    font-size: 1.1rem;
  }
  
  .service-description {
    font-size: 0.9rem;
  }
  
  .cta-section {
    padding: 2.5rem 1rem;
  }
  
  .cta-button {
    font-size: 0.9rem;
    padding: 1rem 2rem;
    min-width: 200px;
  }
  
  .feature {
    font-size: 0.9rem;
  }
  
  .feature svg {
    width: 20px;
    height: 20px;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .background-pattern {
    opacity: 0.3;
  }
  
  .service-card,
  .cta-section {
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