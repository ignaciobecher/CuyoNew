<template>
  <div class="cursor-ring" ref="ring"></div>
  <div class="cursor-dot" ref="dot"></div>
</template>

<script>
export default {
  name: 'LandingCursor',
  data() {
    return {
      mouseX: -200,
      mouseY: -200,
      ringX: -200,
      ringY: -200,
      rafId: null,
      hasMoved: false,
    }
  },
  mounted() {
    // Hide native cursor on html/body so it doesn't flash anywhere
    document.documentElement.style.cursor = 'none'
    document.body.style.cursor = 'none'

    document.addEventListener('mousemove', this.onMouseMove)
    this.rafId = requestAnimationFrame(this.animateRing)
  },
  beforeUnmount() {
    document.documentElement.style.cursor = ''
    document.body.style.cursor = ''
    document.removeEventListener('mousemove', this.onMouseMove)
    cancelAnimationFrame(this.rafId)
  },
  methods: {
    onMouseMove(e) {
      this.mouseX = e.clientX
      this.mouseY = e.clientY

      // Snap dot instantly
      if (this.$refs.dot) {
        this.$refs.dot.style.transform = `translate(${e.clientX - 2}px, ${e.clientY - 2}px)`
      }

      // Show cursor on first move
      if (!this.hasMoved) {
        this.hasMoved = true
        if (this.$refs.ring) this.$refs.ring.style.opacity = '1'
        if (this.$refs.dot) this.$refs.dot.style.opacity = '1'
        // Snap ring to position immediately so it doesn't slide in from offscreen
        this.ringX = e.clientX
        this.ringY = e.clientY
      }
    },
    animateRing() {
      this.ringX += (this.mouseX - this.ringX) * 0.11
      this.ringY += (this.mouseY - this.ringY) * 0.11
      if (this.$refs.ring) {
        this.$refs.ring.style.transform = `translate(${this.ringX - 16}px, ${this.ringY - 16}px)`
      }
      this.rafId = requestAnimationFrame(this.animateRing)
    },
  },
}
</script>

<style scoped>
.cursor-ring {
  position: fixed;
  top: 0;
  left: 0;
  width: 32px;
  height: 32px;
  border: 1px solid #00FF88;
  border-radius: 50%;
  pointer-events: none;
  z-index: 99999;
  opacity: 0;
  will-change: transform;
}

.cursor-dot {
  position: fixed;
  top: 0;
  left: 0;
  width: 4px;
  height: 4px;
  background: #00FF88;
  border-radius: 50%;
  pointer-events: none;
  z-index: 99999;
  opacity: 0;
  will-change: transform;
}
</style>
