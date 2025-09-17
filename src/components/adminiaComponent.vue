<template>
  <section class="products-section">
    <div class="container">
      <!-- Header -->
      <div class="section-header" data-aos="fade-up">
        <div class="header-content">
          <span class="section-tag">Nuestros Productos</span>
          <h2 class="section-title">
            Soluciones <span class="highlight">SaaS</span> que transforman
            negocios
          </h2>
          <p class="section-description">
            Plataformas robustas y escalables diseñadas para optimizar procesos
            empresariales y acelerar el crecimiento de tu organización.
          </p>
        </div>
      </div>

      <!-- Products Grid -->
      <div class="products-grid">
        <!-- Distrify -->
        <div class="product-card" data-aos="fade-up" data-aos-delay="100">
          <div class="card-glow"></div>
          <div class="card-content">
            <div class="product-header">
              <div class="product-icon">
                <img
                  src="../assets/distrify.png"
                  alt="Distrify"
                  class="product-logo"
                />
              </div>
              <div class="product-info">
                <h3 class="product-name">Distrify</h3>
                <span class="product-category">Sistema de Distribución</span>
              </div>
              <div class="product-badge">
                <span>Enterprise</span>
              </div>
            </div>

            <p class="product-description">
              Plataforma integral que revoluciona la gestión comercial y
              distribución con tecnología de punta e inteligencia artificial.
            </p>

            <div class="features-list">
              <div class="feature-item">
                <div class="feature-icon">📊</div>
                <span>Analytics en tiempo real</span>
              </div>
              <div class="feature-item">
                <div class="feature-icon">🤝</div>
                <span>CRM avanzado</span>
              </div>
              <div class="feature-item">
                <div class="feature-icon">📦</div>
                <span>Gestión de inventarios</span>
              </div>
              <div class="feature-item">
                <div class="feature-icon">🏢</div>
                <span>Multi-sucursal</span>
              </div>
            </div>

            <div class="product-stats">
              <div class="stat">
                <span class="stat-number">30+</span>
                <span class="stat-label">Negocios</span>
              </div>
              <div class="stat">
                <span class="stat-number">99.9%</span>
                <span class="stat-label">Uptime</span>
              </div>
            </div>

            <div class="product-actions">
              <button
                class="btn btn-primary"
                onclick="window.open('https://distrify.com.ar', '_blank')"
              >
                <span>Registrate gratis</span>
                <div class="btn-glow"></div>
              </button>
            </div>
          </div>
        </div>

        <!-- Trainify -->
        <div
          class="product-card featured"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="card-glow"></div>
          <div class="featured-label">Más Popular</div>
          <div class="card-content">
            <div class="product-header">
              <div class="product-icon">
                <div class="logo-placeholder">
                  <span>T</span>
                </div>
              </div>
              <div class="product-info">
                <h3 class="product-name">Trainify</h3>
                <span class="product-category">Plataforma LMS</span>
              </div>
              <div class="product-badge">
                <span>Premium</span>
              </div>
            </div>

            <p class="product-description">
              Sistema de gestión de aprendizaje empresarial que potencia el
              desarrollo del talento humano con metodologías innovadoras.
            </p>

            <div class="features-list">
              <div class="feature-item">
                <div class="feature-icon">🎓</div>
                <span>Cursos interactivos</span>
              </div>
              <div class="feature-item">
                <div class="feature-icon">📈</div>
                <span>Seguimiento avanzado</span>
              </div>
              <div class="feature-item">
                <div class="feature-icon">🏆</div>
                <span>Certificaciones</span>
              </div>
              <div class="feature-item">
                <div class="feature-icon">🧠</div>
                <span>IA personalizada</span>
              </div>
            </div>

            <div class="product-stats">
              <div class="stat">
                <span class="stat-number">10+</span>
                <span class="stat-label">Usuarios</span>
              </div>
              <div class="stat">
                <span class="stat-number">95%</span>
                <span class="stat-label">Satisfacción</span>
              </div>
            </div>

            <div class="product-actions">
              <button
                class="btn btn-primary"
                onclick="window.open('https://trainify.com.ar', '_blank')"
              >
                <span>Registrate gratis</span>
                <div class="btn-glow"></div>
              </button>
            </div>
          </div>
        </div>

        <!-- Foodify -->
        <div class="product-card" data-aos="fade-up" data-aos-delay="300">
          <div class="card-glow"></div>
          <div class="card-content">
            <div class="product-header">
              <div class="product-icon">
                <div class="logo-placeholder foodify">
                  <span>F</span>
                </div>
              </div>
              <div class="product-info">
                <h3 class="product-name">Foodify</h3>
                <span class="product-category">Sistema Gastronómico</span>
              </div>
              <div class="product-badge">
                <span>Profesional</span>
              </div>
            </div>

            <p class="product-description">
              Solución completa para el sector gastronómico que digitaliza
              operaciones desde la cocina hasta la experiencia del cliente.
            </p>

            <div class="features-list">
              <div class="feature-item">
                <div class="feature-icon">💳</div>
                <span>POS integrado</span>
              </div>
              <div class="feature-item">
                <div class="feature-icon">🍽️</div>
                <span>Gestión de mesas</span>
              </div>
              <div class="feature-item">
                <div class="feature-icon">📱</div>
                <span>App móvil</span>
              </div>
              <div class="feature-item">
                <div class="feature-icon">🚚</div>
                <span>Delivery tracking</span>
              </div>
            </div>

            <div class="product-stats">
              <div class="stat">
                <span class="stat-number">10+</span>
                <span class="stat-label">Restaurantes</span>
              </div>
              <div class="stat">
                <span class="stat-number">10.000+</span>
                <span class="stat-label">Pedidos</span>
              </div>
            </div>

            <div class="product-actions">
              <button
                onclick="window.open('https://foodify.com.ar', '_blank')"
                class="btn btn-primary"
              >
                <span>Unirse a Foodify</span>
                <div class="btn-glow"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Benefits Section -->
      <div class="benefits-section" data-aos="fade-up" data-aos-delay="400">
        <div class="benefits-header">
          <h3 class="benefits-title">
            ¿Por qué elegir nuestras <span class="highlight">soluciones</span>?
          </h3>
          <p class="benefits-subtitle">
            Tecnología de vanguardia respaldada por años de experiencia
          </p>
        </div>

        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon">
              <span>⚡</span>
            </div>
            <h4>Implementación Express</h4>
            <p>Deploy en menos de 48 horas con migración de datos incluida</p>
          </div>

          <div class="benefit-card">
            <div class="benefit-icon">
              <span>🎨</span>
            </div>
            <h4>100% Personalizable</h4>
            <p>Adaptación completa a tus procesos y marca corporativa</p>
          </div>

          <div class="benefit-card">
            <div class="benefit-icon">
              <span>📊</span>
            </div>
            <h4>Business Intelligence</h4>
            <p>Dashboards inteligentes con insights accionables</p>
          </div>

          <div class="benefit-card">
            <div class="benefit-icon">
              <span>🔒</span>
            </div>
            <h4>Seguridad Enterprise</h4>
            <p>Encriptación de punta a punta y cumplimiento normativo</p>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="cta-section" data-aos="fade-up" data-aos-delay="500">
        <div class="cta-content">
          <div class="cta-header">
            <h3 class="cta-title">
              ¿Listo para <span class="highlight">transformar</span> tu negocio?
            </h3>
            <p class="cta-description">
              Únete a más de 1000+ empresas que ya optimizaron sus procesos con
              nuestras soluciones
            </p>
          </div>

          <div class="cta-actions">
            <button
              onclick="window.open('https://wa.link/jajbyw', '_blank')"
              class="btn btn-primary btn-large"
            >
              <span>Agendar Demo Personalizada</span>
              <div class="btn-glow"></div>
            </button>
          </div>

          <div class="cta-trust">
         
            <div class="trust-item">
              <span class="trust-icon">✓</span>
              <span>Sin compromiso</span>
            </div>
            <div class="trust-item">
              <span class="trust-icon">✓</span>
              <span>Análisis personalizado</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductsComponent",
  mounted() {
    this.initializeAnimations();
  },
  methods: {
    initializeAnimations() {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      }, observerOptions);

      // Observar elementos animables
      const animatableElements = this.$el.querySelectorAll("[data-aos]");
      animatableElements.forEach((el) => observer.observe(el));

      // Inicializar efectos de hover para las tarjetas
      this.initializeCardEffects();
    },

    initializeCardEffects() {
      const cards = this.$el.querySelectorAll(".product-card");

      cards.forEach((card) => {
        const cardGlow = card.querySelector(".card-glow");

        card.addEventListener("mousemove", (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          cardGlow.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(0,255,255,0.1), transparent 40%)`;
        });

        card.addEventListener("mouseenter", () => {
          cardGlow.style.opacity = "1";
        });

        card.addEventListener("mouseleave", () => {
          cardGlow.style.opacity = "0";
        });
      });
    },
  },
};
</script>

<style scoped>
/* Sección principal */
.products-section {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  min-height: 100vh;
  padding: 6rem 0 4rem;
  position: relative;
  overflow: hidden;
}

.products-section::before {
  content: "";
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

.products-section::after {
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
  pointer-events: none;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 5;
}

/* Header de sección */
.section-header {
  text-align: center;
  margin-bottom: 5rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.section-header.animate {
  opacity: 1;
  transform: translateY(0);
}

.section-tag {
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
  text-transform: none;
  letter-spacing: normal;
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  color: white;
  margin-bottom: 24px;
  line-height: 1.1;
}

.highlight {
  background: linear-gradient(45deg, #00ffff, #007bff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-description {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Grid de productos */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 5rem;
  align-items: start;
}

/* Tarjetas de productos */
.product-card {
  position: relative;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateY(30px);
  overflow: hidden;
}

.product-card.animate {
  opacity: 1;
  transform: translateY(0);
}

.product-card:hover {
  transform: translateY(-8px) translateX(-4px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  border-color: rgba(255, 255, 255, 0.25);
}

.product-card.featured {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(0, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(0, 255, 255, 0.15);
}

.featured-label {
  position: absolute;
  top: 20px;
  right: 20px;
  background: linear-gradient(45deg, var(--accent-cyan), var(--accent-blue));
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
}

.card-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  border-radius: 24px;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

/* Header del producto */
.product-header {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 30px;
}

.product-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}

.product-logo {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.logo-placeholder {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: linear-gradient(135deg, #00d2d3 0%, #54a0ff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 20px;
  color: white;
  box-shadow: 0 4px 20px rgba(0, 210, 211, 0.3);
}

.logo-placeholder.foodify {
  background: linear-gradient(135deg, #feca57 0%, #ff9ff3 100%);
  box-shadow: 0 4px 20px rgba(254, 202, 87, 0.3);
}

.product-info {
  flex: 1;
}

.product-name {
  font-size: 1.8rem;
  font-weight: 800;
  color: white;
  margin-bottom: 4px;
}

.product-category {
  color: #00ffff;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.product-badge {
  padding: 8px 16px;
  background: rgba(0, 255, 255, 0.2);
  border: 1px solid rgba(0, 255, 255, 0.3);
  border-radius: 20px;
  color: #00ffff;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
}

/* Descripción y características */
.product-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 30px;
  font-size: 16px;
}

.features-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 30px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 12px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
  font-weight: 500;
}

.feature-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  flex-shrink: 0;
}

/* Estadísticas */
.product-stats {
  display: flex;
  gap: 40px;
  margin-bottom: 40px;
  padding: 20px 0;
  border-top: 1px solid var(--glass-border);
  border-bottom: 1px solid var(--glass-border);
}

.stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 24px;
  font-weight: 800;
  color: #00ffff;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
}

/* Acciones del producto */
.product-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.btn {
  position: relative;
  padding: 16px 32px;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  flex: 1;
  min-width: 140px;
}

.btn-primary {
  background: linear-gradient(45deg, #00ffff, #007bff);
  color: white;
  box-shadow: 0 8px 32px rgba(0, 255, 255, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(0, 255, 255, 0.4);
}

.btn-outline {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.9);
}

.btn-outline:hover {
  border-color: #00ffff;
  background: rgba(0, 255, 255, 0.1);
  transform: translateY(-2px);
}

.btn-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  transform: translateX(-100%);
  transition: transform 0.5s ease;
}

.btn-primary:hover .btn-glow {
  transform: translateX(100%);
}

/* Sección de beneficios */
.benefits-section {
  margin-bottom: 5rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.benefits-section.animate {
  opacity: 1;
  transform: translateY(0);
}

.benefits-header {
  text-align: center;
  margin-bottom: 4rem;
}

.benefits-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 16px;
}

.benefits-subtitle {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.benefit-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.benefit-card::before {
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

.benefit-card:hover::before {
  transform: scaleX(1);
}

.benefit-card:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(0, 255, 255, 0.3);
  box-shadow: 0 20px 60px rgba(0, 255, 255, 0.15);
}

.benefit-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 20px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.benefit-card h4 {
  font-size: 1.3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 12px;
}

.benefit-card p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
}

/* Sección CTA */
.cta-section {
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.cta-section.animate {
  opacity: 1;
  transform: translateY(0);
}

.cta-content {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  padding: 3rem 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 16px;
}

.cta-description {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.3rem;
  line-height: 1.7;
  margin-bottom: 3.5rem;
  max-width: 580px;
  margin-left: auto;
  margin-right: auto;
}

.cta-actions {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.btn-large {
  padding: 20px 40px;
  font-size: 16px;
  min-width: 200px;
}

.cta-trust {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
}

.trust-icon {
  color: #00ffff;
  font-weight: 700;
}

/* Responsive Design */
@media (min-width: 1200px) {
  .products-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 1199px) {
  .container {
    padding: 0 1.5rem;
  }

  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .products-section {
    padding: 4rem 0 3rem;
  }

  .container {
    padding: 0 1rem;
  }

  .section-header {
    margin-bottom: 60px;
  }

  .products-grid {
    grid-template-columns: 1fr;
    gap: 30px;
    margin-bottom: 80px;
  }

  .product-card {
    padding: 30px 20px;
  }

  .features-list {
    grid-template-columns: 1fr;
  }

  .product-stats {
    gap: 20px;
  }

  .product-actions {
    flex-direction: column;
  }

  .benefits-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .cta-content {
    padding: 40px 20px;
  }

  .cta-actions {
    flex-direction: column;
    align-items: center;
  }

  .cta-trust {
    flex-direction: column;
    gap: 16px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 2rem;
  }

  .benefits-title,
  .cta-title {
    font-size: 1.8rem;
  }

  .product-header {
    flex-direction: column;
    text-align: center;
    gap: 16px;
  }

  .btn-large {
    min-width: 100%;
  }
}

/* Animaciones mejoradas */
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

/* Efectos de scroll */
[data-aos="fade-up"] {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

[data-aos="fade-up"].animate {
  opacity: 1;
  transform: translateY(0);
}

[data-aos-delay="100"].animate {
  transition-delay: 100ms;
}

[data-aos-delay="200"].animate {
  transition-delay: 200ms;
}

[data-aos-delay="300"].animate {
  transition-delay: 300ms;
}

[data-aos-delay="400"].animate {
  transition-delay: 400ms;
}

[data-aos-delay="500"].animate {
  transition-delay: 500ms;
}
</style>
