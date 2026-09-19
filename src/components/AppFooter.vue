<script setup>
import logo from '../assets/logo.png'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="footer-grid">
      <div>
        <h3 class="brand">
          <img class="logo" :src="logo" alt="">
          LabelLens
        </h3>
        <p>A student project for decoding packaged food labels.</p>
          <p>&copy; {{ year }} LabelLens.</p>
      </div>
      <div>
        <h3>Explore</h3>
        <p><a href="#home">Home</a></p>
        <p><a href="#scan">Scan a label</a></p>
      </div>
      <div>
        <h3>Results</h3>
        <p><a href="#compare">Compare additives</a></p>
        <p><a href="#contact">Contact us</a></p>
          <p><a href="mailto:hello@hirusha.xyz">hello@hirusha.xyz</a></p>
      </div>
      <div>
        <h3>Note</h3>
        <p>Information on this site is fictional study content, not medical advice.</p>
      </div>
    </div>
  </footer>
</template>
