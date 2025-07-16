<template>
  <div class="products-container">
    <!-- Background Pattern -->
    <div class="background-pattern"></div>

    <!-- Content Wrapper -->
    <div class="content-wrapper">
      <!-- Header Section -->
      <div class="header-section">
        <div class="section-badge">
          <span>Nuestros Productos</span>
        </div>

        <h1 class="main-title">
          <span class="title-line">Soluciones</span>
          <span class="title-line highlight">inteligentes</span>
          <span class="title-line">para tu negocio</span>
        </h1>

        <p class="subtitle">
          Descubre nuestros sistemas especializados, diseñados con inteligencia
          artificial para revolucionar la gestión de tu empresa.
        </p>
      </div>

      <!-- Products Grid -->
      <div class="products-grid">
        <!-- Adminiad Product -->

        <!-- Foodify Product -->
        <div class="product-card">
          <div class="product-header">
            <div class="product-badge new">Nuevo</div>
            <div class="product-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M3 12h18m-9-9v18" />
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v6M12 17v6M1 12h6M17 12h6" />
              </svg>
            </div>
          </div>

          <div class="product-content">
            <h2 class="product-title">
              <span class="brand-name foodify">Foodify</span>
            </h2>
            <p class="product-subtitle">Ventas automatizadas con IA</p>
            <p class="product-description">
              Sistema inteligente de ventas automatizadas para restaurantes.
              Optimiza pedidos, gestiona inventario y maximiza ganancias con
              inteligencia artificial avanzada.
            </p>

            <div class="product-features">
              <div class="feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
                <span>IA para pedidos</span>
              </div>
              <div class="feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
                <span>Gestión de inventario</span>
              </div>
              <div class="feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                <span>Maximiza ganancias</span>
              </div>
            </div>
          </div>

          <div class="product-actions">
            <button class="cta-button secondary">
              <a
                href="https://wa.link/jajbyw"
                target="_blank"
                class="button-link"
              >
                <svg
                  class="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  />
                </svg>
                SOLICITAR DEMO
              </a>
            </button>
          </div>
        </div>

        <!-- Distrify Product -->
        <div class="product-card">
          <div class="product-header">
            <div class="product-badge new">Nuevo</div>
            <div class="product-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10" />
                <path
                  d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                />
                <line x1="2" y1="12" x2="22" y2="12" />
              </svg>
            </div>
          </div>

          <div class="product-content">
            <h2 class="product-title">
              <span class="brand-name distrify">Distrify</span>
            </h2>
            <p class="product-subtitle">Gestión + E-commerce + Marketplace</p>
            <p class="product-description">
              Sistema integral de gestión con e-commerce y marketplace
              integrado. Administra tu negocio, vende online y conecta con otros
              comercios en una sola plataforma.
            </p>

            <div class="product-features">
              <div class="feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M3 3h18v18H3zM9 9h6v6H9z" />
                </svg>
                <span>Gestión completa</span>
              </div>
              <div class="feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path
                    d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
                  />
                </svg>
                <span>E-commerce integrado</span>
              </div>
              <div class="feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" />
                  <path
                    d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                  />
                </svg>
                <span>Marketplace conectado</span>
              </div>
            </div>
          </div>

          <div class="product-actions">
            <button class="cta-button secondary">
              <a
                href="https://wa.link/jajbyw"
                target="_blank"
                class="button-link"
              >
                <svg
                  class="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  />
                </svg>
                SOLICITAR DEMO
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
  name: "ProductsComponent",
  mounted() {
    this.initAnimations();
  },
  methods: {
    initAnimations() {
      // Animate elements on scroll
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      });

      // Observe product cards
      const productCards = document.querySelectorAll(".product-card");
      productCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.3}s`;
        observer.observe(card);
      });

      // Observe title lines
      const titleLines = document.querySelectorAll(".title-line");
      titleLines.forEach((line, index) => {
        line.style.animationDelay = `${index * 0.1}s`;
        observer.observe(line);
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

/* Products Container */
.products-container {
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
  background-image: radial-gradient(
      circle at 30% 30%,
      rgba(42, 8, 120, 0.08) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 70% 70%,
      rgba(42, 8, 120, 0.06) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 50% 50%,
      rgba(255, 255, 255, 0.03) 0%,
      transparent 50%
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
      rgba(255, 255, 255, 0.01) 50%,
      transparent 51%
    ),
    linear-gradient(
      -45deg,
      transparent 49%,
      rgba(255, 255, 255, 0.01) 50%,
      transparent 51%
    );
  background-size: 120px 120px;
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

/* Products Grid */
.products-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  align-items: start;
}

.distrify-card {
  background-color: black;
}

/* Product Card */
.product-card {
  position: relative;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 24px;
  padding: 2.5rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
  box-shadow: 0 10px 40px rgba(42, 8, 120, 0.1);
}

.product-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(42, 8, 120, 0.2);
  border-color: rgba(42, 8, 120, 0.3);
}

.product-card.featured {
  background: linear-gradient(135deg, #732e8d 0%, #5a2470 100%);
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.2);
}

.product-card.featured:hover {
  box-shadow: 0 20px 60px rgba(115, 46, 141, 0.3);
}

/* Product Header */
.product-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.product-badge {
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.product-card .product-badge {
  background: rgba(12, 195, 155, 0.2);
  color: #0cc39b;
  border: 1px solid rgba(12, 195, 155, 0.3);
}

.product-card.featured .product-badge {
  background: rgba(186, 75, 226, 0.3);
  color: #ba4be2;
  border: 1px solid rgba(186, 75, 226, 0.5);
}

.product-badge.new {
  background: rgba(255, 193, 7, 0.2);
  color: #ffc107;
  border: 1px solid rgba(255, 193, 7, 0.3);
}

.product-icon {
  width: 50px;
  height: 50px;
  background: rgba(42, 8, 120, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-card.featured .product-icon {
  background: rgba(255, 255, 255, 0.1);
}

.product-icon svg {
  width: 24px;
  height: 24px;
  stroke: #2a0878;
  stroke-width: 2;
}

.product-card.featured .product-icon svg {
  stroke: #ffffff;
}

/* Product Content */
.product-content {
  margin-bottom: 2rem;
}

.product-title {
  margin-bottom: 0.5rem;
}

.brand-name {
  font-size: 2.2rem;
  font-weight: 800;
  color: #2a0878;
}

.product-card.featured .brand-name {
  color: #ffffff;
}

.brand-name.foodify {
  color: #ff6b35;
}

.brand-name.distrify {
  color: #4a90e2;
}

.product-subtitle {
  font-size: 1rem;
  color: rgba(42, 8, 120, 0.7);
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.product-card.featured .product-subtitle {
  color: rgba(255, 255, 255, 0.8);
}

.product-description {
  font-size: 1rem;
  color: rgba(42, 8, 120, 0.8);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.product-card.featured .product-description {
  color: rgba(255, 255, 255, 0.9);
}

/* Product Features */
.product-features {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.feature {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: rgba(42, 8, 120, 0.8);
  font-weight: 500;
}

.product-card.featured .feature {
  color: rgba(255, 255, 255, 0.9);
}

.feature svg {
  width: 18px;
  height: 18px;
  stroke: #0cc39b;
  stroke-width: 2;
  flex-shrink: 0;
}

.product-card.featured .feature svg {
  stroke: #ba4be2;
}

/* Product Actions */
.product-actions {
  margin-bottom: 2rem;
}

.cta-button {
  width: 100%;
  padding: 1rem 2rem;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.cta-button.primary {
  background: linear-gradient(135deg, #ba4be2 0%, #9c3bc7 100%);
  color: #ffffff;
  box-shadow: 0 8px 30px rgba(186, 75, 226, 0.3);
}

.cta-button.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(186, 75, 226, 0.4);
  background: linear-gradient(135deg, #c383f1 0%, #ba4be2 100%);
}

.cta-button.secondary {
  background: linear-gradient(135deg, #2a0878 0%, #1a0550 100%);
  color: #ffffff;
  box-shadow: 0 8px 30px rgba(42, 8, 120, 0.3);
}

.cta-button.secondary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(42, 8, 120, 0.4);
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

/* Product Image */
.product-image {
  text-align: center;
}

.product-image img {
  max-width: 40%;
  height: auto;
  filter: drop-shadow(0 10px 30px rgba(42, 8, 120, 0.2));
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.product-image img:hover {
  transform: scale(1.05);
}

.placeholder-image {
  width: 80px;
  height: 80px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.placeholder-image.foodify-bg {
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
}

.placeholder-image.distrify-bg {
  background: linear-gradient(135deg, #4a90e2 0%, #357abd 100%);
}

.placeholder-image svg {
  width: 40px;
  height: 40px;
  stroke: #ffffff;
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
  .products-grid {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .product-card:first-child {
    grid-column: 1 / -1;
  }
}

@media (max-width: 768px) {
  .content-wrapper {
    padding: 0 1rem;
  }

  .header-section {
    margin-bottom: 4rem;
  }

  .products-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .product-card {
    padding: 2rem 1.5rem;
  }

  .brand-name {
    font-size: 1.8rem;
  }

  .product-description {
    font-size: 0.95rem;
  }

  .cta-button {
    padding: 0.9rem 1.5rem;
    font-size: 0.9rem;
  }

  .product-image img {
    max-width: 40%;
  }
}

@media (max-width: 480px) {
  .products-container {
    padding: 4rem 0;
  }

  .product-card {
    padding: 1.5rem 1rem;
  }

  .brand-name {
    font-size: 1.5rem;
  }

  .product-features {
    gap: 0.75rem;
  }

  .feature {
    font-size: 0.85rem;
  }

  .placeholder-image {
    width: 60px;
    height: 60px;
  }

  .placeholder-image svg {
    width: 30px;
    height: 30px;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .background-pattern {
    opacity: 0.3;
  }

  .product-card {
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
