<template>
  <div class="services-container">
    <!-- Background Pattern -->
    <div class="background-pattern"></div>
    
    <!-- Content Wrapper -->
    <div class="content-wrapper">
      <!-- Header Section -->
      <div class="header-section">
        <div class="section-badge">
          <span>Nuestros Servicios</span>
        </div>
        
        <h1 class="main-title">
          <span class="title-line">Hacemos realidad</span>
          <span class="title-line highlight">tus ideas,</span>
          <span class="title-line">solucionamos tus</span>
          <span class="title-line accent">problemas ;)</span>
        </h1>
        
        <p class="subtitle">
          Alcanza tus metas con nosotros, adopta la tecnología como pilar para el
          crecimiento de tu empresa.
        </p>
      </div>

      <!-- Logo Section -->
      <div class="logo-section">
        <div class="logo-wrapper">
          <img src="../assets/letraNegra.png" alt="CuyoCode Logo" />
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
        <button class="cta-button">
          <a href="https://wa.link/jajbyw" target="_blank" class="button-link">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            AGENDA UNA LLAMADA
          </a>
        </button>
        
        <div class="cta-features">
          <div class="feature">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M9 12l2 2 4-4"/>
              <circle cx="12" cy="12" r="10"/>
            </svg>
            <span>Consulta gratuita</span>
          </div>
          <div class="feature">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12,6 12,12 16,14"/>
            </svg>
            <span>Respuesta en 24h</span>
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
          title: 'APPS',
          description: 'Aplicaciones móviles para Android & iOS',
          icon: 'MobileIcon'
        },
        {
          title: 'SISTEMAS',
          description: 'Sistemas a medida para tu empresa',
          icon: 'SystemIcon'
        },
        {
          title: 'WEBS',
          description: 'Desarrollamos todo tipo de webs',
        },
        {
          title: 'CHATBOTS',
          description: 'Asistentes virtuales para vender en WhatsApp',
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
      // Animate elements on scroll
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      });

      // Observe service cards
      const serviceCards = document.querySelectorAll('.service-card');
      serviceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        observer.observe(card);
      });

      // Observe title lines
      const titleLines = document.querySelectorAll('.title-line');
      titleLines.forEach((line, index) => {
        line.style.animationDelay = `${index * 0.1}s`;
        observer.observe(line);
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
  background: linear-gradient(135deg, #0cc39b 0%, #08a085 100%);
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
}

/* Background Pattern */
.background-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 20%, rgba(42, 8, 120, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(42, 8, 120, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
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
  background-size: 100px 100px;
}

/* Content Wrapper */
.content-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  padding: 6rem 2rem;
  position: relative;
  z-index: 5;
  width: 100%;
}

/* Header Section */
.header-section {
  text-align: center;
  margin-bottom: 4rem;
}

.section-badge {
  display: inline-block;
  padding: 0.6rem 1.2rem;
  background: rgba(42, 8, 120, 0.15);
  color: #2a0878;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 2rem;
  border: 1px solid rgba(42, 8, 120, 0.3);
  backdrop-filter: blur(10px);
  animation: fadeInUp 0.8s ease-out;
}

.main-title {
  margin-bottom: 2rem;
  line-height: 1.1;
}

.title-line {
  display: block;
  font-size: clamp(2.2rem, 6vw, 4.5rem);
  font-weight: 800;
  color: #2a0878;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out forwards;
  margin-bottom: 0.2rem;
}

.title-line.highlight {
  color: #1a0550;
  text-shadow: 0 0 30px rgba(42, 8, 120, 0.3);
}

.title-line.accent {
  color: #ffffff;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
}

.subtitle {
  font-size: 1.3rem;
  color: #2a0878;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
  font-weight: 500;
  animation: fadeInUp 1s ease-out;
}

/* Logo Section */
.logo-section {
  text-align: center;
  margin-bottom: 5rem;
}

.logo-wrapper {
  position: relative;
  display: inline-block;
  animation: fadeInUp 1.2s ease-out;
}

.logo-wrapper img {
  width: 200px;
  height: auto;
  filter: drop-shadow(0 10px 30px rgba(42, 8, 120, 0.3));
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.logo-wrapper:hover img {
  transform: scale(1.05);
  filter: drop-shadow(0 15px 40px rgba(42, 8, 120, 0.4));
}

.logo-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 250px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
}

.logo-wrapper:hover .logo-glow {
  opacity: 1;
}

/* Services Grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 5rem;
}

.service-card {
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
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
  transform: translateY(-10px);
  background: rgba(42, 8, 120, 0.9);
  border-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 20px 60px rgba(42, 8, 120, 0.3);
}

.service-card:hover .service-title,
.service-card:hover .service-description {
  color: #ffffff;
}

.service-card:hover .service-icon svg {
  stroke: #0cc39b;
}

.service-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2a0878 0%, #1a0550 100%);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover .service-icon {
  background: linear-gradient(135deg, #0cc39b 0%, #08a085 100%);
  transform: scale(1.1);
}

.service-icon svg {
  width: 28px;
  height: 28px;
  stroke: #0cc39b;
  stroke-width: 2;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-content {
  position: relative;
  z-index: 2;
}

.service-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: #2a0878;
  margin-bottom: 1rem;
  letter-spacing: 1px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-description {
  font-size: 1rem;
  color: #2a0878;
  line-height: 1.6;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(42, 8, 120, 0.8) 0%, rgba(26, 5, 80, 0.9) 100%);
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 20px;
}

.service-card:hover .service-overlay {
  opacity: 1;
}

/* CTA Section */
.cta-section {
  text-align: center;
}

.cta-button {
  padding: 1.2rem 3rem;
  border: none;
  border-radius: 15px;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  background: linear-gradient(135deg, #2a0878 0%, #1a0550 100%);
  color: #ffffff;
  box-shadow: 0 10px 40px rgba(42, 8, 120, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2rem;
  animation: fadeInUp 1.4s ease-out;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 50px rgba(42, 8, 120, 0.4);
  background: linear-gradient(135deg, #1a0550 0%, #2a0878 100%);
}

.button-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.icon {
  width: 22px;
  height: 22px;
  stroke-width: 2;
}

.cta-features {
  display: flex;
  justify-content: center;
  gap: 3rem;
  animation: fadeInUp 1.6s ease-out;
}

.feature {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #2a0878;
  font-weight: 600;
}

.feature svg {
  width: 20px;
  height: 20px;
  stroke: #2a0878;
  stroke-width: 2;
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
    padding: 5rem 2rem;
  }
  
  .services-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .content-wrapper {
    padding: 4rem 1rem;
  }
  
  .header-section {
    margin-bottom: 3rem;
  }
  
  .section-badge {
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
  }
  
  .subtitle {
    font-size: 1.1rem;
  }
  
  .logo-section {
    margin-bottom: 4rem;
  }
  
  .logo-wrapper img {
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
    width: 50px;
    height: 50px;
  }
  
  .service-icon svg {
    width: 24px;
    height: 24px;
  }
  
  .service-title {
    font-size: 1.3rem;
  }
  
  .service-description {
    font-size: 0.95rem;
  }
  
  .cta-button {
    padding: 1rem 2rem;
    font-size: 1rem;
  }
  
  .cta-features {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .content-wrapper {
    padding: 3rem 1rem;
  }
  
  .title-line {
    font-size: clamp(1.8rem, 8vw, 2.5rem);
  }
  
  .subtitle {
    font-size: 1rem;
  }
  
  .logo-wrapper img {
    width: 120px;
  }
  
  .service-card {
    padding: 1.5rem 1rem;
  }
  
  .service-title {
    font-size: 1.2rem;
  }
  
  .service-description {
    font-size: 0.9rem;
  }
  
  .cta-button {
    padding: 0.9rem 1.5rem;
    font-size: 0.9rem;
    width: 100%;
    max-width: 300px;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .background-pattern {
    opacity: 0.3;
  }
  
  .service-card {
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