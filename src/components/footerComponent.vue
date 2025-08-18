<template>
  <div class="footer-container">
    <!-- Background Pattern -->
    <div class="background-pattern"></div>

    <!-- Desktop Version -->
    <div class="pcDiv">
      <div class="main">
        <div class="left">
          <h6 class="section-title">Navegación</h6>
          <p class="underline">
            <router-link class="routerClass" to="">INICIO</router-link>
          </p>
          <p class="underline">
            <router-link class="routerClass" to="/nosotros">NOSOTROS</router-link>
          </p>
          <p class="underline">
            <router-link class="routerClass" to="/servicios">SERVICIOS</router-link>
          </p>
          <p class="underline">
            <router-link class="routerClass" to="/sistemas">SISTEMAS</router-link>
          </p>
          <p class="underline">
            <a class="routerClass" target="_blank" href="https://wa.link/jajbyw">CONTACTO</a>
          </p>
        </div>
        
        <div class="center">
          <h6 class="section-title">Dirección</h6>
          <div class="address-info">
            <div class="address-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div class="address-text">
              <p>Villa Mercedes</p>
              <p>San Luis</p>
              <p>Argentina</p>
            </div>
          </div>
        </div>
        
        <div class="right">
          <h6 class="section-title">Contacto</h6>
          <div class="contact-info">
            <div class="contact-item">
              <div class="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <p>cuyosoftware@gmail.com</p>
            </div>
            <div class="contact-item">
              <div class="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <p>2657-201291</p>
            </div>
          </div>
        </div>
        
        <div class="social">
          <h6 class="section-title">Seguinos en nuestras redes</h6>
          <div class="social-links">
            <a class="social-link" href="https://www.instagram.com/cuyocode/" target="_blank">
              <div class="social-icon">
                <i class="bi bi-instagram"></i>
              </div>
              <span>Instagram</span>
            </a>
            <a class="social-link" href="https://www.facebook.com/people/CuyoCode/100092369985447/" target="_blank">
              <div class="social-icon">
                <i class="bi bi-facebook"></i>
              </div>
              <span>Facebook</span>
            </a>
            <a class="social-link" href="https://wa.link/jajbyw" target="_blank">
              <div class="social-icon">
                <i class="bi bi-whatsapp"></i>
              </div>
              <span>WhatsApp</span>
            </a>
            <a class="social-link" href="https://www.linkedin.com/in/ignacio-becher-282b67136" target="_blank">
              <div class="social-icon">
                <i class="bi bi-linkedin"></i>
              </div>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
      
      <!-- Copyright Section -->
      <div class="copyright-section">
        <div class="copyright-content">
          <p>©CuyoCode. Todos los derechos reservados.</p>
          <div class="made-with-love">
            <span>Hecho con</span>
            <svg class="heart-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <span>en Argentina</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Version -->
    <div class="divMobile">
      <div class="main">
        <div class="left">
          <h6 class="section-title">Navegación</h6>
          <p class="underline">
            <router-link class="routerClass" to="">INICIO</router-link>
          </p>
          <p class="underline">
            <router-link class="routerClass" to="/nosotros">NOSOTROS</router-link>
          </p>
          <p class="underline">
            <router-link class="routerClass" to="/servicios">SERVICIOS</router-link>
          </p>
          <p class="underline">
            <router-link class="routerClass" to="/sistemas">SISTEMAS</router-link>
          </p>
          <p class="underline">
            <a class="routerClass" target="_blank" href="https://wa.link/jajbyw">CONTACTO</a>
          </p>
        </div>
        
        <div class="center">
          <h6 class="section-title">Dirección</h6>
          <div class="address-info">
            <div class="address-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div class="address-text">
              <p>Villa Mercedes</p>
              <p>San Luis</p>
              <p>Argentina</p>
            </div>
          </div>
        </div>
        
        <div class="right">
          <h6 class="section-title">Contacto</h6>
          <div class="contact-info">
            <div class="contact-item">
              <div class="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <p>cuyosoftware@gmail.com</p>
            </div>
            <div class="contact-item">
              <div class="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <p>2657-201291</p>
            </div>
            
          </div>
        </div>
        
        <div class="social">
          <h6 class="section-title">Seguinos en nuestras redes</h6>
          <div class="social-links">
            <a class="social-link" href="https://www.instagram.com/cuyocode/" target="_blank">
              <div class="social-icon">
                <i class="bi bi-instagram"></i>
              </div>
              <span>Instagram</span>
            </a>
            <a class="social-link" href="https://www.facebook.com/people/CuyoCode/100092369985447/" target="_blank">
              <div class="social-icon">
                <i class="bi bi-facebook"></i>
              </div>
              <span>Facebook</span>
            </a>
            <a class="social-link" href="https://wa.link/jajbyw" target="_blank">
              <div class="social-icon">
                <i class="bi bi-whatsapp"></i>
              </div>
              <span>WhatsApp</span>
            </a>
            <a class="social-link" href="https://www.linkedin.com/company/cuyocode/" target="_blank">
              <div class="social-icon">
                <i class="bi bi-linkedin"></i>
              </div>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
      
      <!-- Copyright Section Mobile -->
      <div class="copyright-section">
        <div class="copyright-content">
          <p>©CuyoCode. Todos los derechos reservados.</p>
          <div class="made-with-love">
            <span>Hecho con</span>
            <svg class="heart-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <span>en Argentina</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Footer Container */
.footer-container {
  position: relative;
  background: linear-gradient(135deg, #2a0878 0%, #1a0550 100%);
  overflow: hidden;
}

/* Background Pattern */
.background-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(12, 195, 155, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(12, 195, 155, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
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
  background-size: 60px 60px;
}

/* Router Links */
.routerClass {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.9);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 500;
}

.routerClass:hover {
  color: #0cc39b;
}

/* Section Titles */
.section-title {
  color: #ffffff;
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/******************************** DESKTOP STYLES ****************************************/
@media (min-width: 768px) {
  .pcDiv {
    display: block;
    position: relative;
    z-index: 5;
  }

  .divMobile {
    display: none;
  }

  .underline {
    position: relative;
    margin-bottom: 0.8rem;
  }

  .underline::before {
    content: "";
    position: absolute;
    bottom: -2px;
    right: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, #0cc39b 0%, #08a085 100%);
    transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  }

  @media (hover: hover) and (pointer: fine) {
    .underline:hover::before {
      left: 0;
      right: auto;
      width: 100%;
    }
  }

  .main {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 3rem;
    padding: 4rem 2rem 2rem;
    max-width: 1400px;
    margin: 0 auto;
  }

  .left p {
    color: rgba(255, 255, 255, 0.9);
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-bottom: 0.8rem;
  }

  .left p:hover {
    color: #0cc39b;
    transform: translateX(5px);
  }

  /* Address Styles */
  .address-info {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }

  .address-icon {
    width: 45px;
    height: 45px;
    background: linear-gradient(135deg, #0cc39b 0%, #08a085 100%);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 4px 15px rgba(12, 195, 155, 0.3);
  }

  .address-icon svg {
    width: 22px;
    height: 22px;
    stroke: #2a0878;
    stroke-width: 2;
  }

  .address-text p {
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 0.3rem;
    font-weight: 500;
  }

  /* Contact Styles */
  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.8rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(10px);
  }

  .contact-item:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(12, 195, 155, 0.3);
    transform: translateY(-2px);
  }

  .contact-icon {
    width: 35px;
    height: 35px;
    background: linear-gradient(135deg, #0cc39b 0%, #08a085 100%);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .contact-icon svg {
    width: 18px;
    height: 18px;
    stroke: #2a0878;
    stroke-width: 2;
  }

  .contact-item p {
    color: rgba(255, 255, 255, 0.9);
    font-weight: 500;
    margin: 0;
  }

  /* Social Styles */
  .social-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .social-link {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.8rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    text-decoration: none;
    color: rgba(255, 255, 255, 0.9);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(10px);
    font-weight: 500;
  }

  .social-link:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(12, 195, 155, 0.3);
    transform: translateY(-2px);
    color: #0cc39b;
  }

  .social-icon {
    width: 35px;
    height: 35px;
    background: linear-gradient(135deg, #0cc39b 0%, #08a085 100%);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .social-icon i {
    color: #2a0878;
    font-size: 18px;
    font-weight: bold;
  }

  /* Copyright Section */
  .copyright-section {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding: 2rem;
  }

  .copyright-content {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .copyright-content p {
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
    font-weight: 500;
  }

  .made-with-love {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 500;
  }

  .heart-icon {
    width: 16px;
    height: 16px;
    color: #0cc39b;
    animation: heartbeat 2s ease-in-out infinite;
  }
}

/******************************** MOBILE STYLES ****************************************/
@media (max-width: 768px) {
  .pcDiv {
    display: none;
  }

  .divMobile {
    display: block;
    position: relative;
    z-index: 5;
  }

  .underline {
    position: relative;
    margin-bottom: 1rem;
  }

  .underline::before {
    content: "";
    position: absolute;
    bottom: -2px;
    right: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, #0cc39b 0%, #08a085 100%);
    transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  }

  @media (hover: hover) and (pointer: fine) {
    .underline:hover::before {
      left: 0;
      right: auto;
      width: 100%;
    }
  }

  .main {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;
    padding: 3rem 1.5rem 2rem;
  }

  .left p {
    color: rgba(255, 255, 255, 0.9);
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-bottom: 1rem;
  }

  .left p:hover {
    color: #0cc39b;
  }

  /* Address Styles Mobile */
  .address-info {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }

  .address-icon {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #0cc39b 0%, #08a085 100%);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 4px 15px rgba(12, 195, 155, 0.3);
  }

  .address-icon svg {
    width: 20px;
    height: 20px;
    stroke: #2a0878;
    stroke-width: 2;
  }

  .address-text p {
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 0.3rem;
    font-weight: 500;
  }

  /* Contact Styles Mobile */
  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
  }

  .contact-icon {
    width: 35px;
    height: 35px;
    background: linear-gradient(135deg, #0cc39b 0%, #08a085 100%);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .contact-icon svg {
    width: 18px;
    height: 18px;
    stroke: #2a0878;
    stroke-width: 2;
  }

  .contact-item p {
    color: rgba(255, 255, 255, 0.9);
    font-weight: 500;
    margin: 0;
  }

  /* Social Styles Mobile */
  .social-links {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .social-link {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    text-decoration: none;
    color: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    font-weight: 500;
    font-size: 0.9rem;
  }

  .social-icon {
    width: 30px;
    height: 30px;
    background: linear-gradient(135deg, #0cc39b 0%, #08a085 100%);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .social-icon i {
    color: #2a0878;
    font-size: 16px;
    font-weight: bold;
  }

  /* Copyright Section Mobile */
  .copyright-section {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding: 1.5rem;
  }

  .copyright-content {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .copyright-content p {
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
    font-weight: 500;
    font-size: 0.9rem;
  }

  .made-with-love {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 500;
    font-size: 0.9rem;
  }

  .heart-icon {
    width: 16px;
    height: 16px;
    color: #0cc39b;
    animation: heartbeat 2s ease-in-out infinite;
  }
}

/* Animations */
@keyframes heartbeat {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .background-pattern {
    opacity: 0.3;
  }
  
  .contact-item,
  .social-link {
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