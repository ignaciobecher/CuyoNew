<template>
  <div class="associates-container">
    <!-- Background Pattern -->
    <div class="background-pattern"></div>
    
    <!-- Content Wrapper -->
    <div class="content-wrapper">
      <!-- Header Section -->
      <div class="header-section">
        <div class="section-badge">
          <span>🤝 Nuestros Socios</span>
        </div>
        
        <h1 class="main-title">
          <span class="title-line">Empresas que</span>
          <span class="title-line highlight">confían en nosotros</span>
        </h1>
        
        <p class="subtitle">
          Trabajamos junto a socios estratégicos para expandir el alcance de nuestras soluciones 
          SaaS y crear un ecosistema de colaboración que impulse el crecimiento mutuo.
        </p>
      </div>

      <!-- Associates Grid -->
      <div class="associates-grid">
        <div class="associate-card">
          <div class="associate-logo-wrapper">
            <div class="associate-content">
              <img src="../assets/laPedrera.png" alt="La Pedrera - Socio estratégico" class="associate-logo" />
              <div class="associate-overlay">
            
              </div>
            </div>
            <div class="associate-glow"></div>
          </div>
        </div>

        <div class="associate-card">
          <div class="associate-logo-wrapper">
            <div class="associate-content">
              <img src="../assets/nuevoSol.png" alt="Nuevo Sol - Socio estratégico" class="associate-logo" />
              <div class="associate-overlay">
          
              </div>
            </div>
            <div class="associate-glow"></div>
          </div>
        </div>

        <div class="associate-card coming-soon">
          <div class="associate-logo-wrapper">
            <div class="associate-content">
              <div class="coming-soon-content">
                <div class="coming-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12,6 12,12 16,14"/>
                  </svg>
                </div>
                <h3>Tu empresa</h3>
                <p>Próximo socio</p>
              </div>
              <div class="coming-overlay">
                <div class="coming-info">
                  <h3>¿Será tu empresa?</h3>
                  <p>Únete a nuestro ecosistema</p>
                  <div class="partnership-badge">Próximamente</div>
                </div>
              </div>
            </div>
            <div class="associate-glow"></div>
          </div>
        </div>
      </div>

      <!-- Partnership Benefits -->
      <div class="benefits-section">
        <h2 class="benefits-title">¿Por qué trabajar con nosotros?</h2>
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
            <p>Unimos fuerzas para crear soluciones innovadoras que amplían las oportunidades de negocio</p>
          </div>
          
          <div class="benefit-item">
            <div class="benefit-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3>Tecnología de Vanguardia</h3>
            <p>Acceso a nuestra suite SaaS y herramientas tecnológicas para potenciar tu propuesta de valor</p>
          </div>
          
          <div class="benefit-item">
            <div class="benefit-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
            <h3>Crecimiento Exponencial</h3>
            <p>Expandimos juntos hacia nuevos mercados con soluciones escalables y rentables</p>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="cta-section">
        <div class="cta-content">
          <h2 class="cta-title">¿Listo para ser nuestro próximo socio estratégico?</h2>
          <p class="cta-description">
            Únete a nuestro ecosistema de colaboración y multipliquemos juntos el impacto 
            de la tecnología en los negocios.
          </p>
          <div class="cta-actions">
            <button class="cta-button primary">
              <a href="https://wa.link/jajbyw" target="_blank" class="button-link">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
                CONVERSAR SOBRE ALIANZAS
              </a>
            </button>
       
          </div>
        </div>
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

      // Observe associate cards
      const associateCards = document.querySelectorAll('.associate-card');
      associateCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.15}s`;
        observer.observe(card);
      });

      // Observe benefit items
      const benefitItems = document.querySelectorAll('.benefit-item');
      benefitItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        observer.observe(item);
      });

      // Observe CTA section
      const ctaSection = document.querySelector('.cta-section');
      if (ctaSection) {
        observer.observe(ctaSection);
      }

      // Add hover effects to associate cards
      this.addHoverEffects();
    },

    addHoverEffects() {
      const associateCards = document.querySelectorAll('.associate-card');
      
      associateCards.forEach(card => {
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

/* Associates Container */
.associates-container {
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
  margin-bottom: 5rem;
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

.subtitle {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  max-width: 800px;
  margin: 0 auto;
  animation: fadeInUp 1s ease-out;
}

/* Associates Grid */
.associates-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 3rem;
  margin-bottom: 6rem;
  justify-items: center;
}

.associate-card {
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  max-width: 350px;
}

.associate-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.associate-logo-wrapper {
  position: relative;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 24px;
  padding: 3rem 2rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  aspect-ratio: 1.1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.associate-logo-wrapper:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(0, 255, 255, 0.3);
  box-shadow: 0 25px 70px rgba(0, 255, 255, 0.2);
}

.associate-content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.associate-logo {
  max-width: 180px;
  max-height: 120px;
  width: auto;
  height: auto;
  object-fit: contain;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 2;
  filter: brightness(1.1);
}

.associate-logo-wrapper:hover .associate-logo {
  transform: scale(1.05);
  filter: brightness(1.2);
}

.associate-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 255, 255, 0.9) 0%, rgba(0, 123, 255, 0.95) 100%);
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
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #1a1a2e;
}

.associate-info p {
  font-size: 1rem;
  color: rgba(26, 26, 46, 0.8);
  font-weight: 500;
  margin-bottom: 1rem;
}

.partnership-badge {
  display: inline-block;
  padding: 0.4rem 0.8rem;
  background: rgba(26, 26, 46, 0.2);
  color: #1a1a2e;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Coming Soon Card */
.associate-card.coming-soon .associate-logo-wrapper {
  border-style: dashed;
  border-color: rgba(0, 255, 255, 0.3);
  background: rgba(0, 255, 255, 0.05);
}

.coming-soon-content {
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
}

.coming-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #00ffff 0%, #007bff 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  animation: float 3s ease-in-out infinite;
}

.coming-icon svg {
  width: 30px;
  height: 30px;
  stroke: #1a1a2e;
  stroke-width: 2;
}

.coming-soon-content h3 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #00ffff;
}

.coming-soon-content p {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
}

.coming-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(26, 26, 46, 0.9) 0%, rgba(15, 52, 96, 0.95) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 24px;
}

.associate-card.coming-soon:hover .coming-overlay {
  opacity: 1;
}

.coming-info {
  text-align: center;
  color: #ffffff;
  transform: translateY(20px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.associate-card.coming-soon:hover .coming-info {
  transform: translateY(0);
}

.coming-info h3 {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #00ffff;
}

.coming-info p {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
}

.coming-info .partnership-badge {
  background: rgba(0, 255, 255, 0.2);
  color: #00ffff;
}

.associate-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(0, 255, 255, 0.1) 0%, transparent 70%);
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
  margin-bottom: 6rem;
  text-align: center;
}

.benefits-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #ffffff 0%, #00ffff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.benefit-item {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
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
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(0, 255, 255, 0.3);
  box-shadow: 0 20px 60px rgba(0, 255, 255, 0.15);
}

.benefit-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #00ffff 0%, #007bff 100%);
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 30px rgba(0, 255, 255, 0.3);
}

.benefit-item:hover .benefit-icon {
  transform: scale(1.1);
  box-shadow: 0 12px 40px rgba(0, 255, 255, 0.4);
}

.benefit-icon svg {
  width: 32px;
  height: 32px;
  stroke: #1a1a2e;
  stroke-width: 2;
}

.benefit-item h3 {
  font-size: 1.4rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
}

.benefit-item p {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
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
  min-width: 220px;
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

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Responsive Design */
@media (max-width: 1200px) {
  .content-wrapper {
    padding: 0 1.5rem;
  }
  
  .associates-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2.5rem;
  }
}

@media (max-width: 768px) {
  .associates-container {
    padding: 4rem 0;
  }
  
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
    padding: 2rem 1.5rem;
  }
  
  .associate-logo {
    max-width: 150px;
    max-height: 100px;
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
  
  .cta-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .cta-button {
    width: 100%;
    max-width: 300px;
  }
}

@media (max-width: 480px) {
  .associates-container {
    padding: 3rem 0;
  }
  
  .section-badge {
    font-size: 0.85rem;
    padding: 0.6rem 1.2rem;
  }
  
  .associate-logo-wrapper {
    padding: 1.5rem 1rem;
  }
  
  .associate-logo {
    max-width: 120px;
    max-height: 80px;
  }
  
  .benefit-item {
    padding: 1.5rem 1rem;
  }
  
  .benefit-icon {
    width: 60px;
    height: 60px;
  }
  
  .benefit-icon svg {
    width: 28px;
    height: 28px;
  }
  
  .cta-section {
    padding: 2.5rem 1rem;
  }
  
  .cta-button {
    font-size: 0.9rem;
    padding: 1rem 2rem;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .background-pattern {
    opacity: 0.3;
  }
  
  .associate-logo-wrapper,
  .benefit-item,
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