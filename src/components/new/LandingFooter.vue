<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__top">
        <div class="footer__brand">
          <span class="footer__logo">CuyoCode</span>
          <span class="footer__location">Villa Mercedes, San Luis — Argentina</span>
        </div>

        <nav class="footer__nav" aria-label="Productos">
          <span class="footer__nav-title">Productos</span>
          <ul>
            <li><a href="https://autino.click" target="_blank" rel="noopener">Autino</a></li>
            <li><a href="#" aria-disabled="true">Trainify</a></li>
            <li><a href="https://distrify.com.ar" target="_blank" rel="noopener">Distrify</a></li>
            <li><a href="https://orkpad.com" target="_blank" rel="noopener">Orkpad</a></li>
          </ul>
        </nav>
      </div>

      <div class="footer__bottom">
        <span class="footer__copy">CuyoCode © 2025</span>
        <a href="https://wa.me/5493517706985" target="_blank" rel="noopener" class="footer__wa">
          Escribinos →
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'LandingFooter',
}
</script>

<style scoped>
.footer {
  background: #0A0A0A;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 64px 0 40px;
}

.footer__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.footer__top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
}

.footer__brand {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer__logo {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 20px;
  color: #fff;
  letter-spacing: -0.02em;
}

.footer__location {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: #444;
  letter-spacing: 0.06em;
}

.footer__nav {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer__nav-title {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #444;
}

.footer__nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 28px;
}

.footer__nav a {
  font-family: 'Syne', sans-serif;
  font-size: 14px;
  color: #666;
  text-decoration: none;
  transition: color 0.2s;
}

.footer__nav a:hover {
  color: #fff;
}

.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 28px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.footer__copy {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: #333;
  letter-spacing: 0.06em;
}

.footer__wa {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: #00FF88;
  text-decoration: none;
  letter-spacing: 0.05em;
  transition: opacity 0.2s;
}

.footer__wa:hover {
  opacity: 0.7;
}

@media (max-width: 640px) {
  .footer__inner {
    padding: 0 24px;
  }

  .footer__top {
    flex-direction: column;
  }

  .footer__nav ul {
    flex-wrap: wrap;
    gap: 16px 24px;
  }
}
</style>
