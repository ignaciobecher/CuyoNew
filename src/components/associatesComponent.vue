<template>
  <div class="associates-container">
    <!-- Background Pattern -->
    <div class="background-pattern"></div>
    
    <!-- Content Wrapper -->
    <div class="content-wrapper">
      <!-- Header Section -->
      <div class="header-section">
        <div class="section-badge">
          <span>Nuestros Socios</span>
        </div>
        
        <h1 class="main-title">
          <span class="title-line">Trabajan</span>
          <span class="title-line highlight">con nosotros</span>
        </h1>
        
        <p class="subtitle">
          Empresas líderes que confían en nuestras soluciones y forman parte 
          de nuestro ecosistema de colaboración estratégica.
        </p>
      </div>

      <!-- Associates Grid -->
      <div class="associates-grid">
        <div class="associate-card">
          <div class="associate-logo-wrapper">
            <a href="" class="associate-link">
              <img src="../assets/laPedrera.png" alt="La Pedrera - Socio estratégico" class="associate-logo" />
              <div class="associate-overlay">
                <div class="associate-info">
                  <h3>La Pedrera</h3>
                  <p>Socio Estratégico</p>
                  <div class="visit-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M7 17L17 7"/>
                      <path d="M7 7h10v10"/>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
            <div class="associate-glow"></div>
          </div>
        </div>

        <div class="associate-card">
          <div class="associate-logo-wrapper">
            <a href="https://lapedreranoticias.com.ar/" target="_blank" class="associate-link">
              <img src="../assets/nuevoSol.png" alt="Nuevo Sol - Socio estratégico" class="associate-logo" />
              <div class="associate-overlay">
                <div class="associate-info">
                  <h3>Nuevo Sol</h3>
                  <p>Socio Estratégico</p>
                  <div class="visit-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M7 17L17 7"/>
                      <path d="M7 7h10v10"/>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
            <div class="associate-glow"></div>
          </div>
        </div>

        <div class="associate-card">
      
        </div>
      </div>

      <!-- Partnership Benefits -->
      <div class="benefits-section">
        <h2 class="benefits-title">Beneficios de Nuestra Alianza</h2>
        <div class="benefits-grid">
          <div class="benefit-item">
            <div class="benefit-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3>Colaboración Estratégica</h3>
            <p>Trabajamos juntos para crear soluciones innovadoras</p>
          </div>
          
          <div class="benefit-item">
            <div class="benefit-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3>Tecnología Compartida</h3>
            <p>Intercambio de conocimientos y mejores prácticas</p>
          </div>
          
          <div class="benefit-item">
            <div class="benefit-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
            <h3>Crecimiento Mutuo</h3>
            <p>Impulsamos el éxito conjunto de nuestros negocios</p>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="cta-section">
        <h2 class="cta-title">¿Quieres ser nuestro próximo socio?</h2>
        <p class="cta-description">
          Únete a nuestro ecosistema de socios estratégicos y crezcamos juntos.
        </p>
        <button class="cta-button">
          <a href="https://wa.link/jajbyw" target="_blank" class="button-link">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            CONVERSAR SOBRE ALIANZAS
          </a>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AssociatesComponent',
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

      // Observe associate cards
      const associateCards = document.querySelectorAll('.associate-card');
      associateCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        observer.observe(card);
      });

      // Observe benefit items
      const benefitItems = document.querySelectorAll('.benefit-item');
      benefitItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        observer.observe(item);
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

/* Associates Container */
.associates-container {
  position: relative;
  background: linear-gradient(135deg, #0cc39b 0%, #08a085 100%);
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
    radial-gradient(circle at 25% 25%, rgba(42, 8, 120, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(42, 8, 120, 0.06) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.04) 0%, transparent 50%);
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
  padding: 0 2rem;
  position: relative;
  z-index: 5;
}

/* Header Section */
.header-section {
  text-align: center;
  margin-bottom: 5rem;
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
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  color: #2a0878;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out forwards;
  margin-bottom: 0.2rem;
}

.title-line.highlight {
  color: #ffffff;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
}

.subtitle {
  font-size: 1.3rem;
  color: #2a0878;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  font-weight: 500;
  animation: fadeInUp 1s ease-out;
}

/* Associates Grid */
.associates-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-bottom: 6rem;
  justify-items: center;
}

.associate-card {
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.associate-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.associate-logo-wrapper {
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  padding: 3rem 2rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  aspect-ratio: 1.2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 280px;
}

.associate-logo-wrapper:hover {
  transform: translateY(-15px) scale(1.05);
  background: rgba(255, 255, 255, 0.95);
  border-color: rgba(42, 8, 120, 0.3);
  box-shadow: 0 25px 70px rgba(42, 8, 120, 0.2);
}

.associate-link {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.associate-logo {
  max-width: 150px;
  max-height: 100px;
  width: auto;
  height: auto;
  object-fit: contain;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 2;
}

.associate-logo-wrapper:hover .associate-logo {
  filter: brightness(1) invert(0);
  transform: scale(1.1);
}

.associate-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(42, 8, 120, 0.9) 0%, rgba(26, 5, 80, 0.95) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 24px;
}

.associate-logo-wrapper:hover .associate-overlay {
  opacity: 1;
}

.associate-info {
  text-align: center;
  color: #ffffff;
  transform: translateY(20px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.associate-logo-wrapper:hover .associate-info {
  transform: translateY(0);
}

.associate-info h3 {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #0cc39b;
}

.associate-info p {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  margin-bottom: 1rem;
}

.visit-icon {
  width: 24px;
  height: 24px;
  margin: 0 auto;
  opacity: 0.8;
  transition: all 0.3s ease;
}

.visit-icon svg {
  width: 100%;
  height: 100%;
  stroke: #0cc39b;
  stroke-width: 2;
}

.associate-logo-wrapper:hover .visit-icon {
  opacity: 1;
  transform: scale(1.2);
}

.associate-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(12, 195, 155, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.associate-logo-wrapper:hover .associate-glow {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1.5);
}

/* Benefits Section */
.benefits-section {
  margin-bottom: 5rem;
  text-align: center;
}

.benefits-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: #2a0878;
  margin-bottom: 3rem;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.benefit-item {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2.5rem 2rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateY(30px);
}

.benefit-item.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.benefit-item:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(42, 8, 120, 0.3);
  box-shadow: 0 20px 60px rgba(42, 8, 120, 0.15);
}

.benefit-icon {
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

.benefit-item:hover .benefit-icon {
  background: linear-gradient(135deg, #0cc39b 0%, #08a085 100%);
  transform: scale(1.1);
}

.benefit-icon svg {
  width: 28px;
  height: 28px;
  stroke: #0cc39b;
  stroke-width: 2;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.benefit-item:hover .benefit-icon svg {
  stroke: #ffffff;
}

.benefit-item h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #2a0878;
  margin-bottom: 1rem;
}

.benefit-item p {
  font-size: 1rem;
  color: rgba(42, 8, 120, 0.8);
  line-height: 1.6;
}

/* CTA Section */
.cta-section {
  text-align: center;
  padding: 4rem 2rem;
  background: rgba(42, 8, 120, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  border: 1px solid rgba(42, 8, 120, 0.2);
}

.cta-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: #2a0878;
  margin-bottom: 1rem;
}

.cta-description {
  font-size: 1.2rem;
  color: #2a0878;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
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
  
  .associates-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
  
  .associate-logo-wrapper {
    width: 250px;
  }
}

@media (max-width: 768px) {
  .content-wrapper {
    padding: 0 1rem;
  }
  
  .header-section {
    margin-bottom: 4rem;
  }
  
  .associates-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 4rem;
  }
  
  .associate-logo-wrapper {
    width: 100%;
    max-width: 300px;
    padding: 2rem 1.5rem;
  }
  
  .associate-logo {
    max-width: 120px;
    max-height: 80px;
  }
  
  .benefits-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .benefit-item {
    padding: 2rem 1.5rem;
  }
  
  .cta-section {
    padding: 3rem 1.5rem;
  }
  
  .cta-button {
    padding: 1rem 2rem;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .associates-container {
    padding: 4rem 0;
  }
  
  .associate-logo-wrapper {
    padding: 1.5rem 1rem;
  }
  
  .associate-logo {
    max-width: 100px;
    max-height: 70px;
  }
  
  .benefit-item {
    padding: 1.5rem 1rem;
  }
  
  .benefit-icon {
    width: 50px;
    height: 50px;
  }
  
  .benefit-icon svg {
    width: 24px;
    height: 24px;
  }
  
  .cta-button {
    width: 100%;
    max-width: 300px;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .background-pattern {
    opacity: 0.3;
  }
  
  .associate-logo-wrapper {
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