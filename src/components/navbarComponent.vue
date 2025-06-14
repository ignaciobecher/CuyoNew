<template>
  <div class="navbar-container">
    <nav class="navbar" :class="{ scrolled: isScrolled }">
      <div class="container">
        <!-- Logo Section -->
        <div class="logo-section">
          <img
            class="logo-img"
            src="../assets/sinLetras.png"
            alt="CuyoCode Logo"
          />
          <div class="logo-text">
            <span class="brand-name">CuyoCode</span>
            <span class="brand-tagline">Software Solutions</span>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <ul class="nav-menu desktop-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/" exact-active-class="active">
              <i class="nav-icon bi bi-house"></i>
              <span>Inicio</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/nosotros" active-class="active">
              <i class="nav-icon bi bi-people"></i>
              <span>Nosotros</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/servicios" active-class="active">
              <i class="nav-icon bi bi-gear"></i>
              <span>Servicios</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/sistemas" active-class="active">
              <i class="nav-icon bi bi-laptop"></i>
              <span>Sistemas</span>
            </router-link>
          </li>
          <li class="nav-item">
            <a
              class="nav-link contact-link"
              href="https://wa.link/jajbyw"
              target="_blank"
            >
              <i class="nav-icon bi bi-chat-dots"></i>
              <span>Contacto</span>
            </a>
          </li>
        </ul>

        <!-- Right Section -->
        <div class="nav-right">
          <!-- Language Selector -->
          <div class="language-selector">
            <span class="fi fi-ar flag" title="Español"></span>
          </div>

          <!-- Social Links -->
          <div class="social-links">
            <a
              href="https://www.facebook.com/people/CuyoCode/100092369985447/"
              target="_blank"
              class="social-link facebook"
            >
              <i class="bi bi-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/cuyocode/"
              target="_blank"
              class="social-link instagram"
            >
              <i class="bi bi-instagram"></i>
            </a>
            <a
              href="https://wa.link/jajbyw"
              target="_blank"
              class="social-link whatsapp"
            >
              <i class="bi bi-whatsapp"></i>
            </a>
          </div>

          <!-- Mobile Menu Toggle -->
          <button
            class="mobile-toggle"
            @click="toggleMobileMenu"
            :class="{ active: isMobileMenuOpen }"
            aria-label="Toggle navigation"
          >
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Overlay -->
      <div
        class="mobile-nav-overlay"
        :class="{ active: isMobileMenuOpen }"
        @click="closeMobileMenu"
      >
        <nav class="mobile-nav" @click.stop>
          <div class="mobile-nav-header">
            <div class="mobile-logo">
              <img src="../assets/sinLetras.png" alt="CuyoCode" />
              <span>CuyoCode</span>
            </div>
            <button class="close-btn" @click="closeMobileMenu">
              <i class="bi bi-x-lg"></i>
            </button>
          </div>

          <ul class="mobile-nav-menu">
            <li class="mobile-nav-item">
              <router-link
                class="mobile-nav-link"
                to="/"
                @click="closeMobileMenu"
              >
                <i class="bi bi-house"></i>
                <span>Inicio</span>
              </router-link>
            </li>
            <li class="mobile-nav-item">
              <router-link
                class="mobile-nav-link"
                to="/nosotros"
                @click="closeMobileMenu"
              >
                <i class="bi bi-people"></i>
                <span>Nosotros</span>
              </router-link>
            </li>
            <li class="mobile-nav-item">
              <router-link
                class="mobile-nav-link"
                to="/servicios"
                @click="closeMobileMenu"
              >
                <i class="bi bi-gear"></i>
                <span>Servicios</span>
              </router-link>
            </li>
            <li class="mobile-nav-item">
              <router-link
                class="mobile-nav-link"
                to="/sistemas"
                @click="closeMobileMenu"
              >
                <i class="bi bi-laptop"></i>
                <span>Sistemas</span>
              </router-link>
            </li>
            <li class="mobile-nav-item">
              <a
                class="mobile-nav-link contact"
                href="https://wa.link/jajbyw"
                target="_blank"
              >
                <i class="bi bi-chat-dots"></i>
                <span>Contacto</span>
              </a>
            </li>
          </ul>

          <div class="mobile-nav-footer">
            <div class="mobile-social-links">
              <a
                href="https://www.facebook.com/people/CuyoCode/100092369985447/"
                target="_blank"
                class="mobile-social-link"
              >
                <i class="bi bi-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/cuyocode/"
                target="_blank"
                class="mobile-social-link"
              >
                <i class="bi bi-instagram"></i>
              </a>
              <a
                href="https://wa.link/jajbyw"
                target="_blank"
                class="mobile-social-link"
              >
                <i class="bi bi-whatsapp"></i>
              </a>
            </div>
            <div class="mobile-flag">
              <span class="fi fi-ar"></span>
              <span>Argentina</span>
            </div>
          </div>
        </nav>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "ImprovedNavbar",
  data() {
    return {
      isMobileMenuOpen: false,
      isScrolled: false,
    };
  },
  mounted() {
    this.handleScroll();
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      document.body.style.overflow = this.isMobileMenuOpen ? "hidden" : "";
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
      document.body.style.overflow = "";
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
    handleResize() {
      if (window.innerWidth > 1024 && this.isMobileMenuOpen) {
        this.closeMobileMenu();
      }
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

.navbar-container {
  position: relative;
  z-index: 1000;
}

/* Main Navbar */
.navbar {
  background: rgba(4, 5, 5, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(18, 159, 149, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;
}

.navbar.scrolled {
  background: rgba(4, 5, 5, 0.98);
  border-bottom: 1px solid rgba(18, 159, 149, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
}

/* Logo Section */
.logo-section {
  display: flex;
  align-items: center;
  gap: 16px;
}

.logo-img {
  width: 48px;
  height: 48px;
  object-fit: contain;
  filter: drop-shadow(0 2px 8px rgba(18, 159, 149, 0.3));
  transition: transform 0.3s ease;
}

.logo-img:hover {
  transform: scale(1.05);
}

.logo-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.brand-name {
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.5px;
}

.brand-tagline {
  font-size: 11px;
  font-weight: 500;
  color: #129f95;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Desktop Navigation */
.desktop-nav {
  display: flex;
  align-items: center;
  gap: 8px;
  list-style: none;
}

.nav-item {
  position: relative;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.nav-link:hover {
  color: #ffffff;
  background: rgba(18, 159, 149, 0.1);
  transform: translateY(-1px);
}

.nav-link.active {
  color: #129f95;
  background: rgba(18, 159, 149, 0.15);
}

.nav-link.contact-link {
  background: linear-gradient(135deg, #129f95, #0d7a72);
  color: #ffffff;
  font-weight: 600;
  margin-left: 12px;
}

.nav-link.contact-link:hover {
  background: linear-gradient(135deg, #0d7a72, #129f95);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(18, 159, 149, 0.4);
}

.nav-icon {
  font-size: 16px;
  opacity: 0.8;
}

.nav-link:hover .nav-icon,
.nav-link.active .nav-icon {
  opacity: 1;
}

/* Right Section */
.nav-right {
  display: flex;
  align-items: center;
  gap: 24px;
}

/* Language Selector */
.language-selector {
  display: flex;
  align-items: center;
  gap: 8px;
}

.flag {
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 8px;
  border-radius: 8px;
}



/* Social Links */
.social-links {
  display: flex;
  align-items: center;
  gap: 4px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  border-radius: 10px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 18px;
}

.social-link:hover {
  color: #ffffff;
  transform: translateY(-2px);
}

.social-link.facebook:hover {
  background: rgba(59, 89, 152, 0.2);
  color: #4267b2;
}

.social-link.instagram:hover {
  background: rgba(225, 48, 108, 0.2);
  color: #e1306c;
}

.social-link.whatsapp:hover {
  background: rgba(37, 211, 102, 0.2);
  color: #25d366;
}

/* Mobile Toggle */
.mobile-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: none;
  border: none;
  cursor: pointer;
  gap: 4px;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.mobile-toggle:hover {
  background: rgba(18, 159, 149, 0.1);
}

.hamburger-line {
  width: 24px;
  height: 2px;
  background: #ffffff;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 2px;
}

.mobile-toggle.active .hamburger-line:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}

.mobile-toggle.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.mobile-toggle.active .hamburger-line:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}

/* Mobile Navigation */
.mobile-nav-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 999;
}

.mobile-nav-overlay.active {
  opacity: 1;
  visibility: visible;
}

.mobile-nav {
  position: absolute;
  top: 0;
  right: 0;
  width: min(400px, 90vw);
  height: 100vh;
  background: linear-gradient(180deg, #040505 0%, #0a0b0b 100%);
  transform: translateX(100%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  border-left: 1px solid rgba(18, 159, 149, 0.2);
}

.mobile-nav-overlay.active .mobile-nav {
  transform: translateX(0);
}

.mobile-nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  border-bottom: 1px solid rgba(18, 159, 149, 0.1);
}

.mobile-logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.mobile-logo img {
  width: 32px;
  height: 32px;
}

.mobile-logo span {
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
}

.close-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 20px;
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background: rgba(18, 159, 149, 0.1);
  color: #129f95;
}

.mobile-nav-menu {
  flex: 1;
  list-style: none;
  padding: 24px 0;
  overflow-y: auto;
}

.mobile-nav-item {
  margin: 4px 0;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 24px;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
}

.mobile-nav-link:hover {
  color: #ffffff;
  background: rgba(18, 159, 149, 0.1);
  border-left-color: #129f95;
}

.mobile-nav-link.router-link-active {
  color: #129f95;
  background: rgba(18, 159, 149, 0.15);
  border-left-color: #129f95;
}

.mobile-nav-link.contact {
  margin: 16px 24px;
  border-radius: 12px;
  background: linear-gradient(135deg, #129f95, #0d7a72);
  color: #ffffff;
  border-left: none;
  font-weight: 600;
}

.mobile-nav-link.contact:hover {
  background: linear-gradient(135deg, #0d7a72, #129f95);
  transform: translateX(4px);
}

.mobile-nav-link i {
  font-size: 20px;
  width: 24px;
  text-align: center;
}

.mobile-nav-footer {
  padding: 24px;
  border-top: 1px solid rgba(18, 159, 149, 0.1);
}

.mobile-social-links {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 20px;
}

.mobile-social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  font-size: 20px;
}

.mobile-social-link:hover {
  color: #129f95;
  border-color: #129f95;
  background: rgba(18, 159, 149, 0.1);
}

.mobile-flag {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
}

.mobile-flag .fi {
  font-size: 18px;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .desktop-nav,
  .social-links,
  .language-selector {
    display: none;
  }

  .mobile-toggle {
    display: flex;
  }

  .logo-text {
    display: none;
  }

  .container {
    padding: 0 20px;
    height: 70px;
  }

  .logo-img {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 16px;
    height: 64px;
  }

  .logo-img {
    width: 36px;
    height: 36px;
  }

  .brand-name {
    font-size: 18px;
  }

  .mobile-nav {
    width: 100vw;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 12px;
    height: 60px;
  }

  .mobile-nav-link {
    padding: 14px 20px;
    font-size: 15px;
  }

  .mobile-nav-header {
    padding: 20px;
  }

  .mobile-nav-footer {
    padding: 20px;
  }
}

/* Accessibility and Focus States */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

.nav-link:focus,
.mobile-nav-link:focus,
.social-link:focus,
.mobile-social-link:focus {
  outline: 2px solid #129f95;
  outline-offset: 2px;
}

/* Performance Optimizations */
.navbar {
  will-change: transform, background-color;
}

.mobile-nav {
  will-change: transform;
}

.nav-link,
.mobile-nav-link {
  will-change: transform, background-color;
}
</style>
