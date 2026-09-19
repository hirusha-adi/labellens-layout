<template>
  <section aria-labelledby="results-heading">
    <p class="kicker">Results</p>
    <h1 id="results-heading">Additives on this yoghurt scan</h1>
    <p>
      These notes are written for everyday shoppers. They describe typical uses
      of each additive, not a personal health assessment.
    </p>
    <p>
      <a class="btn btn-secondary" href="#scan">Scan another label</a>
    </p>
  </section>

  <section aria-labelledby="cards-heading">
    <h2 id="cards-heading">Side-by-side additive cards</h2>
    <div class="results-grid">
      <article class="result-card">
        <h3>E1442</h3>
        <span class="tag">Thickener</span>
        <p>
          Hydroxypropyl distarch phosphate is a modified starch. In yoghurt it
          holds water so the product stays smooth after sitting in a fridge.
        </p>
        <p>
          Some shoppers prefer pots that rely on milk protein and live cultures
          instead of added starch.
        </p>
      </article>

      <article class="result-card">
        <h3>E440</h3>
        <span class="tag">Gelling agent</span>
        <p>
          Pectin is taken from fruit. It is widely used in jams and spoonable
          dairy foods to give a soft set.
        </p>
        <p>
          It is generally treated as a familiar plant fibre rather than a
          synthetic preservative.
        </p>
      </article>

      <article class="result-card">
        <h3>Live cultures</h3>
        <span class="tag">Not an additive code</span>
        <p>
          Streptococcus thermophilus and Lactobacillus bulgaricus turn milk
          into yoghurt. They appear on the label as ingredients, not E-numbers.
        </p>
        <p>
          LabelLens lists them so the scan is complete, then marks them as
          cultures rather than processing additives.
        </p>
      </article>
    </div>
  </section>

  <section aria-labelledby="compare-heading">
    <h2 id="compare-heading">Compare across scanned products</h2>
    <p>
      Every scan is added to your product log. This table lines up four
      yoghurt tubs so you can see how their additive lists differ at a
      glance. Swipe or scroll sideways on a small screen to see every column.
    </p>
    <div class="table-scroll">
      <table class="compare-table">
        <caption>Additive summary for four scanned yoghurt products</caption>
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Serving size</th>
            <th scope="col">Key additive</th>
            <th scope="col">Category</th>
            <th scope="col">Shopper note</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Valley Farm Natural Yoghurt</td>
            <td>700g</td>
            <td>E1442</td>
            <td>Thickener</td>
            <td>Modified starch keeps the tub smooth in the fridge</td>
          </tr>
          <tr>
            <td>Sunrise Greek Style Yoghurt</td>
            <td>500g</td>
            <td>E440</td>
            <td>Gelling agent</td>
            <td>Uses fruit pectin instead of a synthetic thickener</td>
          </tr>
          <tr>
            <td>Meadow Light Yoghurt</td>
            <td>1kg</td>
            <td>E202</td>
            <td>Preservative</td>
            <td>Potassium sorbate extends shelf life after opening</td>
          </tr>
          <tr>
            <td>Home-set Style Yoghurt</td>
            <td>400g</td>
            <td>None listed</td>
            <td>No additive</td>
            <td>Just milk and live cultures on the label</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <section aria-labelledby="saved-heading">
    <h2 id="saved-heading">Saved for later</h2>
    <p>
      Additives you have already looked up stay in your list so you do not
      have to search for them again on your next shop.
    </p>
    <ul class="saved-list">
      <li>
        <span class="saved-name">E202 - potassium sorbate</span>
        <span class="tag">Preservative</span>
      </li>
      <li>
        <span class="saved-name">E160a - carotene</span>
        <span class="tag">Colour</span>
      </li>
      <li>
        <span class="saved-name">E621 - monosodium glutamate</span>
        <span class="tag">Flavour enhancer</span>
      </li>
    </ul>
  </section>
</template>
