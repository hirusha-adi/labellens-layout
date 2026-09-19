<script setup>
import logo from '../assets/logo.png'

defineProps({ activeView: String })
</script>

<template>
  <header class="site-header">
    <a class="brand" href="#home">
      <img class="logo" :src="logo" alt="">
      LabelLens
    </a>
    <nav class="site-nav" aria-label="Main navigation">
      <a href="#home" :aria-current="activeView === 'home' ? 'page' : null">Home</a>
      <a href="#scan" :aria-current="activeView === 'scan' ? 'page' : null">Scan</a>
      <a href="#compare" :aria-current="activeView === 'compare' ? 'page' : null">Compare</a>
      <a href="#contact" :aria-current="activeView === 'contact' ? 'page' : null">Contact</a>
    </nav>
  </header>
</template>
