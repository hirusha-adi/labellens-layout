<script setup>
import { ref } from 'vue'
import ContactForm from './ContactForm.vue'

const submittedDetails = ref(null)
</script>

<template>
  <div class="contact-view">
    <section aria-labelledby="contact-heading">
      <p class="kicker">Get in touch</p>
      <h1 id="contact-heading">Questions, feedback, or a scan that looks wrong?</h1>
      <p>
        Tell us what happened and we will get back to you. Reports about a
        specific scan help us improve the additive matches LabelLens shows
        to every shopper.
      </p>
    </section>

    <section aria-label="Contact form and acknowledgement">
      <div class="contact-layout">
        <ContactForm
          title="Contact form"
          @submit-form="submittedDetails = $event"
        />
        <div class="contact-sidebar">
          <div aria-live="polite" aria-atomic="true">
            <article v-if="submittedDetails" class="acknowledgement-card" aria-labelledby="acknowledgement-heading">
              <h3 id="acknowledgement-heading">Customer acknowledgement</h3>
              <p><strong>Thank you, {{ submittedDetails.name }}!</strong></p>
              <ul>
                <li><strong>Name:</strong> {{ submittedDetails.name }}</li>
                <li><strong>Email:</strong> {{ submittedDetails.email }}</li>
                <li><strong>Phone:</strong> {{ submittedDetails.phone || 'Not provided' }}</li>
                <li><strong>Products:</strong> {{ submittedDetails.productCount }}</li>
                <li><strong>Reason:</strong> {{ submittedDetails.reason }}</li>
                <li><strong>Scan date:</strong> {{ submittedDetails.scanDate || 'Not provided' }}</li>
                <li><strong>Topics:</strong> {{ submittedDetails.topics.join(', ') || 'None selected' }}</li>
                <li><strong>Preferred reply:</strong> {{ submittedDetails.replyMethod === 'phone' ? 'Phone' : 'Email' }}</li>
                <li><strong>Consent:</strong> {{ submittedDetails.consent ? 'Yes' : 'No' }}</li>
              </ul>
              <p><strong>Message:</strong></p>
              <p class="submitted-message">{{ submittedDetails.message }}</p>
            </article>
          </div>
          <aside class="contact-aside" aria-labelledby="aside-heading">
            <h2 id="aside-heading">Other ways to reach us</h2>
            <p>
              We read every message within two business days. Reports that
              include the scan date and affected additive are the fastest
              for our team to check against the source data.
            </p>
            <p>
              This is a student project built for SIT120, so replies come
              from the project team rather than a support desk.
            </p>
          </aside>
        </div>
      </div>
    </section>
  </div>
</template>
