<script setup>
import { ref, onUnmounted } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import HomeView from './components/HomeView.vue'
import ScanView from './components/ScanView.vue'
import CompareView from './components/CompareView.vue'
import ContactView from './components/ContactView.vue'

const activeView = ref('home')

// Links such as #scan select which page to show.
function changeView() {
  const page = window.location.hash.slice(1) || 'home'
  if (['home', 'scan', 'compare', 'contact'].includes(page)) {
    activeView.value = page
    window.scrollTo(0, 0)
  }
}

changeView()
window.addEventListener('hashchange', changeView)
onUnmounted(() => window.removeEventListener('hashchange', changeView))
</script>

<template>
  <a class="skip-link" href="#main">Skip to main content</a>
  <div class="site">
    <AppHeader :active-view="activeView" />
    <main id="main" tabindex="-1">
      <HomeView v-if="activeView === 'home'" />
      <ScanView v-else-if="activeView === 'scan'" />
      <CompareView v-else-if="activeView === 'compare'" />
      <ContactView v-else-if="activeView === 'contact'" />
    </main>
    <AppFooter />
  </div>
</template>
