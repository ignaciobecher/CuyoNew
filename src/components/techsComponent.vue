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
    radial-gradient(circle at 20% 30%, rgba(42, 8, 120, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(42, 8, 120, 0.06) 0%, transparent 50%),
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

/* Technologies Grid */
.technologies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 5rem;
}

.tech-card {
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
}

.tech-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.tech-card:hover {
  transform: translateY(-15px) scale(1.05);
  background: rgba(255, 255, 255, 0.95);
  border-color: rgba(42, 8, 120, 0.3);
  box-shadow: 0 25px 70px rgba(42, 8, 120, 0.2);
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
  background: radial-gradient(circle, rgba(12, 195, 155, 0.2) 0%, transparent 70%);
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
  color: #2a0878;
  margin-bottom: 0.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.tech-card:hover .tech-name {
  color: #1a0550;
  transform: translateY(-2px);
}

.tech-category {
  font-size: 0.9rem;
  color: rgba(42, 8, 120, 0.7);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.tech-card:hover .tech-category {
  color: #0cc39b;
  font-weight: 600;
}

.tech-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(12, 195, 155, 0.05) 0%, rgba(8, 160, 133, 0.1) 100%);
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 20px;
}

.tech-card:hover .tech-overlay {
  opacity: 1;
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