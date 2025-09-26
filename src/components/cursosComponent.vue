<template>
  <div class="courses-container" ref="coursesSection">
    <!-- Background Pattern -->
    <div class="background-pattern"></div>

    <!-- Section Header -->
    <div class="section-header">
      <div class="badge">
        <span>Formación Profesional</span>
      </div>
      <h2 class="section-title">
        <span class="title-line">IMPULSA TU CARRERA</span>
        <span class="title-line highlight">EN DESARROLLO </span>
      </h2>
      <p class="section-description">
        Aprende las tecnologías más demandadas del mercado con nuestros cursos.
        Desde fundamentos hasta desarrollo fullstack profesional.
      </p>
    </div>

    <!-- Courses Grid -->
    <div class="courses-grid">
      <!-- Curso de Introducción -->
      <div class="course-card intro-course">
        <div class="course-header">
          <div class="course-badge">
            <svg
              class="icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M9 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z"
              />
              <path
                d="M13 11h6a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2z"
              />
              <path d="M9 7V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3" />
            </svg>
            <span>Curso Introductorio</span>
          </div>
          <div class="course-level">
            <span class="level-badge beginner">Principiante</span>
          </div>
        </div>

        <div class="course-content">
          <h3 class="course-title">
            Introducción a la Programación con PSeInt
          </h3>

          <div class="course-price-section">
            <div class="price-display">
              <span class="currency">USD</span>
              <span class="amount">20</span>
            </div>
            <div class="price-label">Precio especial de lanzamiento</div>
          </div>

          <p class="course-description">
            Da tus primeros pasos en el mundo de la programación. Aprende los
            conceptos fundamentales usando <strong>PSeInt</strong>, la
            herramienta perfecta para entender la lógica de programación antes
            de adentrarte en lenguajes más complejos.
          </p>

          <!-- Course Info Grid -->
          <div class="course-info-grid">
            <div class="info-item">
              <svg
                class="info-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12,6 12,12 16,14" />
              </svg>
              <div class="info-content">
                <h4>Duración</h4>
                <p>2 semanas (recomendado)</p>
              </div>
            </div>

            <div class="info-item">
              <svg
                class="info-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
                />
              </svg>
              <div class="info-content">
                <h4>Modalidad</h4>
                <p>100% Online</p>
              </div>
            </div>

            <div class="info-item">
              <svg
                class="info-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <div class="info-content">
                <h4>Carga Horaria</h4>
                <p>2-3 horas semanales (recomendado)</p>
              </div>
            </div>
          </div>

          <!-- What You'll Learn -->
          <div class="learning-section">
            <h4 class="learning-title">¿Qué aprenderás?</h4>
            <div class="skills-list">
              <div class="skill-item">
                <svg
                  class="skill-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <polyline points="9,11 12,14 22,4" />
                  <path
                    d="M21,12v7a2,2 0 0,1 -2,2H5a2,2 0 0,1 -2,-2V5a2,2 0 0,1 2,-2h11"
                  />
                </svg>
                <span>Fundamentos de programación y lógica</span>
              </div>
              <div class="skill-item">
                <svg
                  class="skill-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <polyline points="9,11 12,14 22,4" />
                  <path
                    d="M21,12v7a2,2 0 0,1 -2,2H5a2,2 0 0,1 -2,-2V5a2,2 0 0,1 2,-2h11"
                  />
                </svg>
                <span>Variables, constantes y tipos de datos</span>
              </div>
              <div class="skill-item">
                <svg
                  class="skill-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <polyline points="9,11 12,14 22,4" />
                  <path
                    d="M21,12v7a2,2 0 0,1 -2,2H5a2,2 0 0,1 -2,-2V5a2,2 0 0,1 2,-2h11"
                  />
                </svg>
                <span>Estructuras de control (if, while, for)</span>
              </div>
              <div class="skill-item">
                <svg
                  class="skill-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <polyline points="9,11 12,14 22,4" />
                  <path
                    d="M21,12v7a2,2 0 0,1 -2,2H5a2,2 0 0,1 -2,-2V5a2,2 0 0,1 2,-2h11"
                  />
                </svg>
                <span>Arreglos y funciones básicas</span>
              </div>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="course-actions">
            <button class="cta-button primary" @click="enrollIntroCourse">
              <svg
                class="icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M9 12l2 2 4-4" />
                <path
                  d="M21 12c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v6c0 .552.448 1 1 1"
                />
              </svg>
              INSCRIBIRME AHORA
            </button>

            <button class="cta-button secondary" @click="getMoreInfo">
              <svg
                class="icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9,9h0a3,3 0 0,1 6,0c0,2 -3,3 -3,3" />
                <path d="M12,17h0" />
              </svg>
              MÁS INFORMACIÓN
            </button>
          </div>
        </div>
      </div>

      <!-- Curso Fullstack -->
      <div class="course-card fullstack-course">
        <div class="course-header">
          <div class="course-badge">
            <svg
              class="icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            <span>Curso Profesional</span>
          </div>
          <div class="course-level">
            <span class="level-badge advanced">Principiante/Avanzado</span>
          </div>
        </div>

        <div class="course-content">
          <h3 class="course-title">
            Curso Fullstack Web Developer – Cuyo Code
          </h3>

          <div class="course-price-section">
            <div class="price-display">
              <span class="currency">USD</span>
              <span class="amount">50</span>
            </div>
            <div class="price-label">Inversión profesional</div>
          </div>

          <p class="course-description">
            Conviértete en un desarrollador fullstack moderno y profesional.
            Aprenderás a construir aplicaciones web completas, desde la interfaz
            de usuario hasta el backend y la base de datos, utilizando
            tecnologías actuales como
            <strong>Vue 3, Node.js, NestJS, SQL/NoSQL, y más</strong>.
          </p>

          <!-- Course Info Grid -->
          <div class="course-info-grid">
            <div class="info-item">
              <svg
                class="info-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12,6 12,12 16,14" />
              </svg>
              <div class="info-content">
                <h4>Duración</h4>
                <p>12 semanas (recomendado)</p>
              </div>
            </div>

            <div class="info-item">
              <svg
                class="info-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
                />
              </svg>
              <div class="info-content">
                <h4>Modalidad</h4>
                <p>100% Online</p>
              </div>
            </div>

            <div class="info-item">
              <svg
                class="info-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                />
                <polyline points="14,2 14,8 20,8" />
              </svg>
              <div class="info-content">
                <h4>Certificación</h4>
                <p>Certificado oficial</p>
              </div>
            </div>

            <div class="info-item">
              <svg
                class="info-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <div class="info-content">
                <h4>Carga Horaria</h4>
                <p>5-7 horas semanales (recomendado)</p>
              </div>
            </div>
          </div>

          <!-- What You'll Learn -->
          <div class="learning-section">
            <h4 class="learning-title">¿Qué aprenderás?</h4>
            <div class="skills-grid">
              <div class="skill-category">
                <div class="category-header">
                  <div class="category-icon frontend">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  </div>
                  <h5>Frontend</h5>
                </div>
                <p>HTML, CSS, JavaScript, TypeScript, Vue 3, Tailwind</p>
              </div>

              <div class="skill-category">
                <div class="category-header">
                  <div class="category-icon backend">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                  <h5>Backend</h5>
                </div>
                <p>Node.js, NestJS, APIs, autenticación, autorización</p>
              </div>

              <div class="skill-category">
                <div class="category-header">
                  <div class="category-icon database">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <ellipse cx="12" cy="5" rx="9" ry="3" />
                      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                    </svg>
                  </div>
                  <h5>Base de Datos</h5>
                </div>
                <p>MongoDB, diseño y optimización de esquemas</p>
              </div>

              <div class="skill-category">
                <div class="category-header">
                  <div class="category-icon devops">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="4" />
                      <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
                      <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
                      <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
                      <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
                      <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
                    </svg>
                  </div>
                  <h5>DevOps</h5>
                </div>
                <p>Git, control de versiones, despliegue</p>
              </div>
            </div>
          </div>

          <!-- Projects Section -->
          <div class="projects-section">
            <h4 class="projects-title">Trabajos prácticos</h4>
            <div class="projects-list">
              <div class="project-item">
                <span class="project-number">3</span>
                <span class="project-text">Proyectos guiados paso a paso</span>
              </div>
              <div class="project-item">
                <span class="project-number">1</span>
                <span class="project-text"
                  >Proyecto final para tu portafolio</span
                >
              </div>
              <div class="project-item">
                <span class="project-number">+</span>
                <span class="project-text"
                  >Ejercicios y desafíos semanales</span
                >
              </div>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="course-actions">
            <button class="cta-button primary" @click="enrollFullstackCourse">
              <svg
                class="icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M9 12l2 2 4-4" />
                <path
                  d="M21 12c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v6c0 .552.448 1 1 1"
                />
              </svg>
              INSCRIBIRME AHORA
            </button>

            <button class="cta-button secondary" @click="getMoreInfo">
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
              MÁS INFORMACIÓN
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Payment Methods -->
    <div class="payment-section">
      <h4 class="payment-title">Formas de pago disponibles</h4>
      <div class="payment-methods">
        <div class="payment-method">
          <svg
            class="payment-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
            <line x1="1" y1="10" x2="23" y2="10" />
          </svg>
          <span>Tarjetas de crédito/débito</span>
        </div>
        <div class="payment-method">
          <svg
            class="payment-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
            />
          </svg>
          <span>Transferencia bancaria</span>
        </div>
        <div class="payment-method">
          <svg
            class="payment-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          <span>Cuotas</span>
        </div>
      </div>
    </div>

    <!-- Contact Info -->
    <div class="contact-section">
      <div class="contact-item">
        <svg
          class="contact-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
          />
          <polyline points="22,6 12,13 2,6" />
        </svg>
        <span>info@cuyocode.com.ar</span>
      </div>
      <div class="contact-item">
        <svg
          class="contact-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
          />
        </svg>
        <span>+54 2657-201291 | +54 351-7706985</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoursesSection",
  mounted() {
    this.initAnimations();
  },
  methods: {
    initAnimations() {
      // Observe section for scroll animations
      this.observeSection();

      // Animate skill categories with staggered delay
      const skillCategories = document.querySelectorAll(".skill-category");
      skillCategories.forEach((category, index) => {
        category.style.animationDelay = `${0.2 + index * 0.1}s`;
      });

      // Animate courses with staggered delay
      const courseCards = document.querySelectorAll(".course-card");
      courseCards.forEach((card, index) => {
        card.style.animationDelay = `${0.3 + index * 0.2}s`;
      });
    },

    observeSection() {
      const coursesSection = this.$refs.coursesSection;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-in");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      if (coursesSection) {
        observer.observe(coursesSection);
      }
    },

    enrollIntrosCourse() {
      // Lógica para inscripción al curso de introducción
      window.open("https://wa.link/zctq99", "_blank");
    },

    enrollFullstackCourse() {
      // Lógica para inscripción al curso fullstack
      window.open("https://wa.link/zctq99", "_blank");
    },
    enrollIntroCourse() {
      window.open('https://wa.link/idc47e', '_blank');
    },
    getMoreInfo() {
      // Lógica para más información
      window.open(
        "mailto:info@cuyocode.com.ar?subject=Consulta sobre Cursos",
        "_blank"
      );
    },
  },
};
</script>

<style scoped>
/* Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Courses Container */
.courses-container {
  position: relative;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  padding: 6rem 2rem;
  overflow: hidden;
}

/* Background Pattern */
.background-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(
      circle at 25% 25%,
      rgba(0, 255, 255, 0.08) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 75% 75%,
      rgba(0, 123, 255, 0.06) 0%,
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
      rgba(255, 255, 255, 0.02) 50%,
      transparent 51%
    ),
    linear-gradient(
      -45deg,
      transparent 49%,
      rgba(255, 255, 255, 0.02) 50%,
      transparent 51%
    );
  background-size: 60px 60px;
}

/* Section Header */
.section-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out forwards;
}

.badge {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background: rgba(0, 255, 255, 0.1);
  color: #00ffff;
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 2rem;
  border: 1px solid rgba(0, 255, 255, 0.2);
  backdrop-filter: blur(15px);
  box-shadow: 0 4px 20px rgba(0, 255, 255, 0.1);
}

.section-title {
  margin-bottom: 2rem;
  line-height: 1.1;
}

.title-line {
  display: block;
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 0.2rem;
}

.title-line.highlight {
  background: linear-gradient(135deg, #00ffff 0%, #007bff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px rgba(0, 255, 255, 0.3);
}

.section-description {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

/* Courses Grid */
.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
  gap: 3rem;
  max-width: 1400px;
  margin: 0 auto 4rem;
}

/* Course Card */
.course-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  opacity: 0;
  animation: slideInUp 1s ease-out forwards;
  transition: all 0.3s ease;
}

.course-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.2);
}

.intro-course {
  border-color: rgba(255, 193, 7, 0.3);
}

.fullstack-course {
  border-color: rgba(0, 255, 255, 0.3);
}

.course-header {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  flex-wrap: wrap;
  gap: 1rem;
}

.course-badge {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: #00ffff;
  font-weight: 600;
}

.intro-course .course-badge {
  color: #ffc107;
}

.course-badge .icon {
  width: 24px;
  height: 24px;
  stroke-width: 2;
}

.course-level {
  display: flex;
  align-items: center;
}

.level-badge {
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
}

.level-badge.beginner {
  background: rgba(255, 193, 7, 0.2);
  color: #ffc107;
  border: 1px solid rgba(255, 193, 7, 0.3);
}

.level-badge.advanced {
  background: rgba(0, 255, 255, 0.2);
  color: #00ffff;
  border: 1px solid rgba(0, 255, 255, 0.3);
}

.course-content {
  padding: 2.5rem;
}

.course-title {
  font-size: 1.8rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.course-price-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.price-display {
  display: flex;
  align-items: baseline;
  gap: 0.3rem;
}

.currency {
  font-size: 1.2rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
}

.amount {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #00ffff 0%, #007bff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.intro-course .amount {
  background: linear-gradient(135deg, #ffc107 0%, #ff8f00 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.price-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  text-align: right;
}

.course-description {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.7;
  margin-bottom: 2.5rem;
}

.course-description strong {
  color: #00ffff;
  font-weight: 700;
}

.intro-course .course-description strong {
  color: #ffc107;
}

/* Course Info Grid */
.course-info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.info-item:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.info-icon {
  width: 28px;
  height: 28px;
  stroke: #00ffff;
  stroke-width: 2;
  flex-shrink: 0;
}

.intro-course .info-icon {
  stroke: #ffc107;
}

.info-content h4 {
  font-size: 0.9rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.2rem;
}

.info-content p {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
}

/* Learning Section */
.learning-section {
  margin-bottom: 2.5rem;
}

.learning-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1.5rem;
}

/* Skills List (for intro course) */
.skills-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.skill-item:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateX(5px);
}

.skill-icon {
  width: 20px;
  height: 20px;
  stroke: #ffc107;
  stroke-width: 2;
  flex-shrink: 0;
}

.skill-item span {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
}

/* Skills Grid (for fullstack course) */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.2rem;
}

.skill-category {
  padding: 1.2rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  transition: all 0.3s ease;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

.skill-category:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  border-color: rgba(255, 255, 255, 0.2);
}

.category-header {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
}

.category-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.category-icon svg {
  width: 18px;
  height: 18px;
  stroke: #ffffff;
  stroke-width: 2;
}

.category-icon.frontend {
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
}

.category-icon.backend {
  background: linear-gradient(135deg, #00d2d3 0%, #54a0ff 100%);
  box-shadow: 0 4px 15px rgba(0, 210, 211, 0.3);
}

.category-icon.database {
  background: linear-gradient(135deg, #feca57 0%, #ff9ff3 100%);
  box-shadow: 0 4px 15px rgba(254, 202, 87, 0.3);
}

.category-icon.devops {
  background: linear-gradient(135deg, #a55eea 0%, #26de81 100%);
  box-shadow: 0 4px 15px rgba(165, 94, 234, 0.3);
}

.category-header h5 {
  font-size: 1rem;
  font-weight: 700;
  color: #ffffff;
}

.skill-category p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  font-size: 0.9rem;
}

/* Projects Section */
.projects-section {
  margin-bottom: 2.5rem;
}

.projects-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1.2rem;
}

.projects-list {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.project-item {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 0.8rem 1.2rem;
  background: rgba(0, 255, 255, 0.05);
  border: 1px solid rgba(0, 255, 255, 0.2);
  border-radius: 10px;
  transition: all 0.3s ease;
}

.project-item:hover {
  background: rgba(0, 255, 255, 0.08);
  transform: translateX(5px);
}

.project-number {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #00ffff 0%, #007bff 100%);
  color: #1a1a2e;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1rem;
  flex-shrink: 0;
}

.project-text {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  font-size: 0.9rem;
}

/* CTA Buttons */
.course-actions {
  display: flex;
  gap: 1.2rem;
  margin-bottom: 0;
  flex-wrap: wrap;
}

.cta-button {
  padding: 1rem 2rem;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  flex: 1;
  justify-content: center;
  min-width: 180px;
}

.cta-button.primary {
  background: linear-gradient(135deg, #00ffff 0%, #007bff 100%);
  color: #1a1a2e;
  box-shadow: 0 6px 25px rgba(0, 255, 255, 0.25);
}

.intro-course .cta-button.primary {
  background: linear-gradient(135deg, #ffc107 0%, #ff8f00 100%);
  color: #1a1a2e;
  box-shadow: 0 6px 25px rgba(255, 193, 7, 0.25);
}

.cta-button.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 35px rgba(0, 255, 255, 0.35);
}

.intro-course .cta-button.primary:hover {
  box-shadow: 0 10px 35px rgba(255, 193, 7, 0.35);
}

.cta-button.secondary {
  background: transparent;
  color: #00ffff;
  border: 2px solid rgba(0, 255, 255, 0.3);
}

.intro-course .cta-button.secondary {
  color: #ffc107;
  border-color: rgba(255, 193, 7, 0.3);
}

.cta-button.secondary:hover {
  background: rgba(0, 255, 255, 0.1);
  border-color: rgba(0, 255, 255, 0.5);
  transform: translateY(-2px);
}

.intro-course .cta-button.secondary:hover {
  background: rgba(255, 193, 7, 0.1);
  border-color: rgba(255, 193, 7, 0.5);
}

.icon {
  width: 18px;
  height: 18px;
  stroke-width: 2;
}

/* Payment Section */
.payment-section {
  max-width: 1000px;
  margin: 0 auto 3rem;
  text-align: center;
}

.payment-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 2rem;
}

.payment-methods {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.payment-method {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem 2rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  transition: all 0.3s ease;
}

.payment-method:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(0, 255, 255, 0.3);
  transform: translateY(-2px);
}

.payment-icon {
  width: 22px;
  height: 22px;
  stroke: #00ffff;
  stroke-width: 2;
}

/* Contact Section */
.contact-section {
  display: flex;
  gap: 3rem;
  justify-content: center;
  padding-top: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  transition: all 0.3s ease;
}

.contact-item:hover {
  color: #00ffff;
}

.contact-icon {
  width: 20px;
  height: 20px;
  stroke: #00ffff;
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

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .courses-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}

@media (max-width: 768px) {
  .courses-container {
    padding: 4rem 1rem;
  }

  .section-header {
    margin-bottom: 3rem;
  }

  .badge {
    font-size: 0.85rem;
    padding: 0.6rem 1.2rem;
  }

  .courses-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .course-header {
    flex-direction: column;
    gap: 1.2rem;
    text-align: center;
    padding: 1.5rem;
  }

  .course-content {
    padding: 2rem 1.5rem;
  }

  .course-title {
    font-size: 1.5rem;
  }

  .course-description {
    font-size: 0.95rem;
  }

  .course-info-grid {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .course-actions {
    flex-direction: column;
    gap: 1rem;
  }

  .cta-button {
    width: 100%;
    min-width: auto;
  }

  .contact-section {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }

  .payment-methods {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  .payment-method {
    justify-content: center;
    width: 100%;
    max-width: 300px;
  }

  .course-price-section {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .courses-container {
    padding: 3rem 1rem;
  }

  .title-line {
    font-size: clamp(1.8rem, 8vw, 2.5rem);
  }

  .section-description {
    font-size: 1rem;
  }

  .course-header {
    padding: 1rem;
  }

  .course-content {
    padding: 1.5rem 1rem;
  }

  .course-title {
    font-size: 1.3rem;
  }

  .amount {
    font-size: 2rem;
  }

  .info-item {
    padding: 0.8rem;
    gap: 0.6rem;
  }

  .skill-category {
    padding: 1rem;
  }

  .category-icon {
    width: 32px;
    height: 32px;
  }

  .cta-button {
    padding: 0.9rem 1.5rem;
    font-size: 0.85rem;
  }

  .course-price-section {
    padding: 1rem;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .background-pattern {
    opacity: 0.3;
  }

  .course-card {
    border-width: 2px;
  }

  .info-item,
  .skill-category,
  .project-item,
  .payment-method {
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

  .cta-button:hover,
  .info-item:hover,
  .skill-category:hover,
  .course-card:hover {
    transform: none;
  }
}
</style>
