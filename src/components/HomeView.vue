<script setup>
import heroImage from '../assets/index-picture.png'

function showResults() {
  window.location.hash = 'compare'
}
</script>

<template>
  <section class="hero-wrap" aria-labelledby="hero-heading">
    <div class="hero">
      <div class="hero-copy">
        <p class="kicker">Food label decoder</p>
        <h1 id="hero-heading">Read the label. Understand every additive.</h1>
        <p>
          LabelLens helps shoppers in Australia check ingredient lists, E-numbers,
          and processing aids before they put a product in the trolley.
        </p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#scan">Scan a label</a>
          <a class="btn btn-secondary" href="#search">Search an additive</a>
        </div>
      </div>
      <div class="hero-visual">
        <img :src="heroImage" alt="A shopper in a supermarket holding a phone beside a grocery trolley">
      </div>
    </div>
  </section>

  <section id="search" aria-labelledby="search-heading">
    <div class="search-box">
      <p class="kicker">Lookup</p>
      <h2 id="search-heading">Search by name or E-number</h2>
      <p>
        Type a code such as E211, or a common name such as sodium benzoate.
        LabelLens matches it to a short safety note and typical uses in packaged food.
      </p>
      <form class="search-form" @submit.prevent="showResults">
        <label class="search-label" for="additive-query">Additive name or E-number</label>
        <div class="search-row">
          <input
            id="additive-query"
            name="q"
            type="search"
            placeholder="e.g. E211 or sodium benzoate"
          >
          <button class="btn btn-solid" type="submit">Search</button>
        </div>
      </form>
      <p class="search-hint">Or try one of these:</p>
      <div class="chip-row">
        <a class="chip" href="#compare">E330 - citric acid</a>
        <a class="chip" href="#compare">E621 - monosodium glutamate</a>
        <a class="chip" href="#compare">E160a - carotene</a>
      </div>
    </div>
  </section>

  <section aria-labelledby="helps-heading">
    <h2 id="helps-heading">How LabelLens helps</h2>
    <div class="feature-grid">
      <article class="feature-card">
        <div class="icon" aria-hidden="true">
          <i class="fa-solid fa-camera"></i>
        </div>
        <h3>Scan the pack</h3>
        <p>
          Photograph the ingredients list. LabelLens highlights names and codes
          so you can confirm what was detected before you save the scan.
        </p>
      </article>
      <article class="feature-card">
        <div class="icon" aria-hidden="true">
          <i class="fa-solid fa-file-lines"></i>
        </div>
        <h3>Plain-language notes</h3>
        <p>
          Each additive is explained in everyday language, including why it is
          added and whether it is commonly flagged for people with sensitivities.
        </p>
      </article>
      <article class="feature-card">
        <div class="icon" aria-hidden="true">
          <i class="fa-solid fa-table-columns"></i>
        </div>
        <h3>Compare products</h3>
        <p>
          Place two or three similar foods side by side to see which recipe uses
          fewer colours, preservatives, or flavour enhancers.
        </p>
      </article>
    </div>
  </section>
</template>
