<template>
  <div class="technologies-container">
    <!-- Background Pattern -->
    <div class="background-pattern"></div>
    
    <!-- Content Wrapper -->
    <div class="content-wrapper">
      <!-- Header Section -->
      <div class="header-section">
        <div class="section-badge">
          <span>Nuestras Tecnologías</span>
        </div>
        
        <h1 class="main-title">
          <span class="title-line">Dominamos las</span>
          <span class="title-line highlight">mejores</span>
          <span class="title-line">tecnologías</span>
        </h1>
        
        <p class="subtitle">
          Utilizamos las herramientas más avanzadas y confiables del mercado para 
          crear soluciones robustas, escalables y de alto rendimiento.
        </p>
      </div>

      <!-- Technologies Grid -->
      <div class="technologies-grid">
        <div 
          v-for="(tech, index) in technologies" 
          :key="index"
          class="tech-card"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="tech-icon-wrapper">
            <div class="tech-icon" :class="tech.iconClass">
              <span class="icon-text">{{ tech.iconText }}</span>
            </div>
            <div class="tech-glow"></div>
          </div>
          <div class="tech-info">
            <h3 class="tech-name">{{ tech.name }}</h3>
            <p class="tech-category">{{ tech.category }}</p>
          </div>
          <div class="tech-overlay"></div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="cta-section">
        <h2 class="cta-title">¿Necesitas una tecnología específica?</h2>
        <p class="cta-description">
          Contamos con experiencia en múltiples tecnologías. Consultanos sobre tu proyecto específico.
        </p>
        <button class="cta-button">
          <a href="https://wa.link/jajbyw" target="_blank" class="button-link">
            <span class="phone-icon">📞</span>
            CONSULTAR AHORA
          </a>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TechnologiesComponent',
  data() {
    return {
      technologies: [
        {
          name: 'Java',
          category: 'Backend',
          iconClass: 'java-icon',
          iconText: 'J'
        },
        {
          name: 'JavaScript',
          category: 'Frontend/Backend',
          iconClass: 'javascript-icon',
          iconText: 'JS'
        },
        {
          name: 'Node.js',
          category: 'Backend',
          iconClass: 'nodejs-icon',
          iconText: 'N'
        },
        {
          name: 'MySQL',
          category: 'Base de Datos',
          iconClass: 'mysql-icon',
          iconText: 'DB'
        },
        {
          name: 'HTML5',
          category: 'Frontend',
          iconClass: 'html-icon',
          iconText: 'H5'
        },
        {
          name: 'Android',
          category: 'Mobile',
          iconClass: 'android-icon',
          iconText: '📱'
        },
        {
          name: 'Express',
          category: 'Backend',
          iconClass: 'excel-icon',
          iconText: 'EX'
        },
        {
          name: 'Vue.js',
          category: 'Frontend',
          iconClass: 'vue-icon',
          iconText: 'V'
        },
        {
          name: 'Docker',
          category: 'DevOps',
          iconClass: 'docker-icon',
          iconText: '🐳'
        },
        {
          name: 'React',
          category: 'Frontend',
          iconClass: 'react-icon',
          iconText: 'R'
        }
      ]
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

      // Observe tech cards
      const techCards = document.querySelectorAll('.tech-card');
      techCards.forEach(card => observer.observe(card));

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

/* Technologies Container */
.technologies-container {
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
  backdrop-filter: blur(15px);
  box-shadow: 0 4px 20px rgba(0, 255, 255, 0.1);
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
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  font-weight: 500;
  animation: fadeInUp 1s ease-out;
}

/* Technologies Grid */
.technologies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 5rem;
}

.tech-card {
  position: relative;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.tech-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.tech-card:hover {
  transform: translateY(-8px) translateX(-4px);
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(0, 255, 255, 0.3);
  box-shadow: 0 20px 60px rgba(0, 255, 255, 0.15);
}

.tech-icon-wrapper {
  position: relative;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tech-icon {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 2;
  border-radius: 50%;
  font-weight: bold;
  font-size: 1.5rem;
}

.icon-text {
  font-size: 2rem;
  font-weight: 900;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Specific icon styles */
.java-icon {
  background: linear-gradient(135deg, #f89820 0%, #ed8b00 100%);
  color: white;
}

.javascript-icon {
  background: linear-gradient(135deg, #f7df1e 0%, #f0d91d 100%);
  color: #323330;
}

.nodejs-icon {
  background: linear-gradient(135deg, #68a063 0%, #5d8f57 100%);
  color: white;
}

.mysql-icon {
  background: linear-gradient(135deg, #00758f 0%, #005a6b 100%);
  color: white;
}

.html-icon {
  background: linear-gradient(135deg, #e34c26 0%, #d63918 100%);
  color: white;
}

.android-icon {
  background: linear-gradient(135deg, #a4c639 0%, #8fb030 100%);
  color: white;
}

.excel-icon {
  background: linear-gradient(135deg, #217346 0%, #1a5c37 100%);
  color: white;
}

.vue-icon {
  background: linear-gradient(135deg, #4fc08d 0%, #42a374 100%);
  color: white;
}

.docker-icon {
  background: linear-gradient(135deg, #0db7ed 0%, #0a9bc7 100%);
  color: white;
}

.react-icon {
  background: linear-gradient(135deg, #61dafb 0%, #4fa8c5 100%);
  color: #20232a;
}

.tech-card:hover .tech-icon {
  transform: scale(1.2) rotateY(10deg);
}

.tech-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(0, 255, 255, 0.2) 0%, transparent 70%);
  border-radius: 50%;
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.tech-card:hover .tech-glow {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1.5);
}

.tech-info {
  position: relative;
  z-index: 2;
}

.tech-name {
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.tech-card:hover .tech-name {
  color: #00ffff;
  transform: translateY(-2px);
}

.tech-category {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.tech-card:hover .tech-category {
  color: #007bff;
  font-weight: 600;
}

.tech-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 255, 255, 0.05) 0%, rgba(0, 123, 255, 0.1) 100%);
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 16px;
}

.tech-card:hover .tech-overlay {
  opacity: 1;
}

/* CTA Section */
.cta-section {
  text-align: center;
  padding: 3rem 2rem;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.cta-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1rem;
}

.cta-description {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.cta-button {
  padding: 1.2rem 2rem;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  background: linear-gradient(135deg, #00ffff 0%, #007bff 100%);
  color: #1a1a2e;
  box-shadow: 0 8px 30px rgba(0, 255, 255, 0.25);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  min-width: 180px;
  justify-content: center;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(0, 255, 255, 0.35);
}

.button-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.phone-icon {
  font-size: 1.2rem;
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
  
  .technologies-grid {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .content-wrapper {
    padding: 0 1rem;
  }
  
  .header-section {
    margin-bottom: 4rem;
  }
  
  .technologies-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    margin-bottom: 4rem;
  }
  
  .tech-card {
    padding: 1.5rem 1rem;
  }
  
  .tech-icon {
    width: 60px;
    height: 60px;
  }
  
  .icon-text {
    font-size: 1.5rem;
  }
  
  .tech-name {
    font-size: 1.1rem;
  }
  
  .tech-category {
    font-size: 0.8rem;
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
  .technologies-container {
    padding: 4rem 0;
  }
  
  .technologies-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .tech-card {
    padding: 1.5rem 1rem;
  }
  
  .tech-icon {
    width: 50px;
    height: 50px;
  }
  
  .icon-text {
    font-size: 1.2rem;
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
  
  .tech-card {
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