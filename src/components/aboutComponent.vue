<template>
  <div class="about-container">
    <!-- Background Pattern -->
    <div class="background-pattern"></div>
    
    <!-- Content Wrapper -->
    <div class="content-wrapper">
      <!-- Left Content -->
      <div class="left-content">
        <div class="section-badge">
          <span>Sobre Nosotros</span>
        </div>
        
        <h2 class="main-title">
          <span class="title-line">¿Quiénes</span>
          <span class="title-line highlight">somos?</span>
        </h2>
        
        <div class="description-content">
          <p class="main-description">
            <span class="company-name">CuyoCode</span> es una startup fundada en San Luis, 
            Argentina, especializada en el desarrollo de software para pymes.
          </p>
          
          <p class="secondary-description">
            Nacimos con la intención de brindarte soluciones tecnológicas y 
            accesibles, para poder ayudar a todos los emprendedores del país a 
            conseguir sus sueños.
          </p>
          
          <!-- Features List -->
          <div class="features-list">
            <div class="feature-item">
              <div class="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M9 12l2 2 4-4"/>
                  <circle cx="12" cy="12" r="10"/>
                </svg>
              </div>
              <span>Soluciones personalizadas</span>
            </div>
            
            <div class="feature-item">
              <div class="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <span>Tecnología de vanguardia</span>
            </div>
            
            <div class="feature-item">
              <div class="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <span>Apoyo a emprendedores</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Content -->
      <div class="right-content">
        <div class="image-container">
          <div class="image-wrapper">
            <img src="../assets/about.jpg" alt="Equipo CuyoCode trabajando en soluciones tecnológicas" />
            <div class="image-overlay"></div>
          </div>
          
          <!-- Floating Stats -->
          <div class="floating-stats">
            <div class="stat-card">
              <div class="stat-number">100%</div>
              <div class="stat-label">Dedicación</div>
            </div>
            
            <div class="stat-card">
              <div class="stat-number">24/7</div>
              <div class="stat-label">Soporte</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutComponent',
  mounted() {
    this.initAnimations();
  },
  methods: {
    initAnimations() {
      // Animate elements on scroll or mount
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      });

      // Observe elements for animation
      const animatedElements = document.querySelectorAll('.feature-item, .stat-card, .title-line');
      animatedElements.forEach(el => observer.observe(el));
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

/* About Container */
.about-container {
  position: relative;
  background: linear-gradient(135deg, #2a0878 0%, #1a0550 100%);
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* Background Pattern */
.background-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 80% 20%, rgba(12, 195, 155, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 20% 80%, rgba(12, 195, 155, 0.06) 0%, transparent 50%),
    radial-gradient(circle at 60% 60%, rgba(255, 255, 255, 0.03) 0%, transparent 50%);
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
    linear-gradient(45deg, transparent 49%, rgba(255, 255, 255, 0.01) 50%, transparent 51%),
    linear-gradient(-45deg, transparent 49%, rgba(255, 255, 255, 0.01) 50%, transparent 51%);
  background-size: 80px 80px;
}

/* Content Wrapper */
.content-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 6rem 2rem;
  position: relative;
  z-index: 5;
  align-items: center;
}

/* Left Content */
.left-content {
  padding-right: 2rem;
}

.section-badge {
  display: inline-block;
  padding: 0.6rem 1.2rem;
  background: rgba(12, 195, 155, 0.15);
  color: #0cc39b;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 2rem;
  border: 1px solid rgba(12, 195, 155, 0.3);
  backdrop-filter: blur(10px);
  animation: fadeInUp 0.8s ease-out;
}

.main-title {
  margin-bottom: 3rem;
  line-height: 1.1;
}

.title-line {
  display: block;
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  color: #ffffff;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out forwards;
  margin-bottom: 0.2rem;
}

.title-line.highlight {
  color: #0cc39b;
  text-shadow: 0 0 30px rgba(12, 195, 155, 0.3);
  animation-delay: 0.2s;
}

.description-content {
  animation: fadeInUp 1s ease-out;
}

.main-description {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.secondary-description {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  margin-bottom: 3rem;
}

.company-name {
  color: #0cc39b;
  font-weight: 700;
  text-shadow: 0 0 20px rgba(12, 195, 155, 0.3);
}

/* Features List */
.features-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateX(-20px);
}

.feature-item:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateX(5px);
  border-color: rgba(12, 195, 155, 0.3);
}

.feature-item.animate-in {
  opacity: 1;
  transform: translateX(0);
}

.feature-item:nth-child(1) { animation-delay: 0.2s; }
.feature-item:nth-child(2) { animation-delay: 0.4s; }
.feature-item:nth-child(3) { animation-delay: 0.6s; }

.feature-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #0cc39b 0%, #08a085 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.feature-icon svg {
  width: 20px;
  height: 20px;
  stroke: #2a0878;
  stroke-width: 2;
}

.feature-item span {
  color: #ffffff;
  font-weight: 600;
  font-size: 1rem;
}

/* Right Content */
.right-content {
  position: relative;
  padding-left: 2rem;
}

.image-container {
  position: relative;
}

.image-wrapper {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(42, 8, 120, 0.3);
  animation: fadeInUp 1.2s ease-out;
}

.image-wrapper img {
  width: 100%;
  height: auto;
  display: block;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.image-wrapper:hover img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(42, 8, 120, 0.2) 0%, rgba(12, 195, 155, 0.1) 100%);
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.image-wrapper:hover .image-overlay {
  opacity: 1;
}

/* Floating Stats */
.floating-stats {
  position: absolute;
  top: -20px;
  right: -20px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.stat-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 8px 32px rgba(42, 8, 120, 0.15);
  animation: float 4s ease-in-out infinite;
  opacity: 0;
  transform: translateY(20px);
}

.stat-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.stat-card:nth-child(1) { 
  animation-delay: 0.8s; 
}

.stat-card:nth-child(2) { 
  animation-delay: 1s;
  animation-delay: 2s; /* for float animation */
}

.stat-number {
  font-size: 1.8rem;
  font-weight: 800;
  color: #0cc39b;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 20px rgba(12, 195, 155, 0.3);
}

.stat-label {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
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
    gap: 3rem;
    padding: 5rem 2rem;
  }
  
  .left-content {
    padding-right: 1rem;
  }
  
  .right-content {
    padding-left: 1rem;
  }
}

@media (max-width: 968px) {
  .content-wrapper {
    grid-template-columns: 1fr;
    gap: 4rem;
    text-align: center;
  }
  
  .left-content {
    padding-right: 0;
    order: 1;
  }
  
  .right-content {
    padding-left: 0;
    order: 2;
  }
  
  .floating-stats {
    position: relative;
    top: 2rem;
    right: 0;
    flex-direction: row;
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .content-wrapper {
    padding: 4rem 1rem;
    gap: 3rem;
  }
  
  .section-badge {
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
  }
  
  .main-description {
    font-size: 1.1rem;
  }
  
  .secondary-description {
    font-size: 1rem;
  }
  
  .features-list {
    gap: 1rem;
  }
  
  .feature-item {
    padding: 0.8rem;
  }
  
  .feature-icon {
    width: 35px;
    height: 35px;
  }
  
  .feature-icon svg {
    width: 18px;
    height: 18px;
  }
  
  .floating-stats {
    flex-direction: column;
    align-items: center;
  }
  
  .stat-card {
    padding: 1rem;
    min-width: 120px;
  }
  
  .stat-number {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .content-wrapper {
    padding: 3rem 1rem;
  }
  
  .title-line {
    font-size: clamp(2rem, 10vw, 3rem);
  }
  
  .main-description {
    font-size: 1rem;
  }
  
  .secondary-description {
    font-size: 0.95rem;
  }
  
  .feature-item span {
    font-size: 0.9rem;
  }
  
  .floating-stats {
    flex-direction: row;
    gap: 0.5rem;
  }
  
  .stat-card {
    padding: 0.8rem;
    min-width: 100px;
  }
  
  .stat-number {
    font-size: 1.3rem;
  }
  
  .stat-label {
    font-size: 0.7rem;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .background-pattern {
    opacity: 0.3;
  }
  
  .feature-item {
    border-width: 2px;
  }
  
  .stat-card {
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