<template>
  <button
    class="dark-toggle"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    :title="isDark ? 'Light mode' : 'Dark mode'"
    @click="toggle"
  >
    <span v-if="isDark">☀</span>
    <span v-else>☾</span>
  </button>
</template>

<script>
export default {
  name: 'DarkModeToggle',

  data () {
    return { isDark: false }
  },

  mounted () {
    // Sync with whatever the head script already applied (avoids a flash).
    this.isDark = document.documentElement.classList.contains('dark')
  },

  methods: {
    toggle () {
      this.isDark = !this.isDark
      document.documentElement.classList.toggle('dark', this.isDark)
      try {
        localStorage.setItem('virgilio-dark', this.isDark ? '1' : '0')
      } catch (e) { /* storage may be blocked; ignore */ }
    }
  }
}
</script>

<style scoped>
.dark-toggle {
  position: fixed;
  right: 1.2rem;
  bottom: 1.2rem;
  z-index: 30;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
  cursor: pointer;
  font-size: 1.4rem;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.15s ease, background 0.2s ease, box-shadow 0.2s ease;
}

.dark-toggle:hover {
  transform: scale(1.08);
}
</style>
