<script setup>
import { ref, onUnmounted } from 'vue'

const video = ref(null)
const cameraReady = ref(false)
const openingCamera = ref(false)
const status = ref('Allow camera access to preview the label')
let stream

async function startCamera() {
  if (openingCamera.value) return
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    status.value = 'This browser cannot open the camera.'
    return
  }

  openingCamera.value = true
  try {
    stopCamera()
    // docs:
    //    request camera access: https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
    //    connect the stream to the video: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject
    //    start playback: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play
    stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: false })
    video.value.srcObject = stream
    await video.value.play()
    cameraReady.value = true
  } catch {
    stopCamera()
    status.value = 'Camera permission is needed to show a live preview.'
  }
  openingCamera.value = false
}

function stopCamera() {
  if (stream) {
    for (const track of stream.getTracks()) track.stop()
  }
  cameraReady.value = false
}

// Release the webcam when leaving the Scan page.
onUnmounted(stopCamera)
</script>

<template>
  <section aria-labelledby="scan-heading">
    <div class="scan-intro">
      <div>
        <p class="kicker">Camera workflow</p>
        <h1 id="scan-heading">Scan and confirm the ingredients</h1>
        <p>
          Hold the pack steady so the ingredients panel fills the frame. After the
          photo is taken, check each detected additive before you open the results.
        </p>
      </div>
      <div class="scan-steps" aria-hidden="true">
        <span class="scan-step is-active"></span>
        <span class="scan-step"></span>
      </div>
    </div>

    <div class="scan-layout">
      <div class="camera-panel">
        <div class="camera-frame">
          <video ref="video" id="camera-preview" autoplay playsinline muted></video>
          <div v-if="!cameraReady" class="camera-overlay" id="camera-overlay">
            <p id="camera-status" role="status">{{ status }}</p>
            <button class="btn btn-primary" type="button" id="enable-camera" :disabled="openingCamera" @click="startCamera">Enable camera</button>
          </div>
        </div>
        <div class="camera-actions">
          <a class="btn btn-camera-cancel" href="#home">Cancel</a>
          <a class="btn btn-camera-capture" href="#detected">Capture</a>
        </div>
      </div>

      <div id="detected" class="confirm-panel">
        <div class="confirm-head">
          <h2>Detected on this label</h2>
          <span class="tag">Sample</span>
        </div>
        <p>Sample scan: Valley Farm Natural Yoghurt, 700g.</p>
        <div class="additive-list">
          <div class="additive-item">
            <span class="item-icon" aria-hidden="true"><i class="fa-solid fa-droplet"></i></span>
            <span class="item-copy">
              <strong>Milk solids</strong>
              <span>Base ingredient - not an additive</span>
            </span>
            <span class="tag">Base</span>
          </div>
          <div class="additive-item">
            <span class="item-icon" aria-hidden="true"><i class="fa-solid fa-flask"></i></span>
            <span class="item-copy">
              <strong>E1442 - hydroxypropyl distarch phosphate</strong>
              <span>Thickener used to keep yoghurt creamy</span>
            </span>
            <span class="tag">Review</span>
          </div>
          <div class="additive-item">
            <span class="item-icon" aria-hidden="true"><i class="fa-solid fa-leaf"></i></span>
            <span class="item-copy">
              <strong>E440 - pectin</strong>
              <span>Plant fibre used as a gelling agent</span>
            </span>
            <span class="tag">Common</span>
          </div>
        </div>
        <label class="confirm-note-label" for="scan-note">Note for this scan (optional)</label>
        <input class="confirm-note" id="scan-note" type="text" placeholder="e.g. bought for a family member with a sensitivity">
        <div class="confirm-actions">
          <button class="btn btn-secondary" type="button" @click="stopCamera">Rescan</button>
          <a class="btn btn-solid" href="#compare">Confirm</a>
        </div>
      </div>
    </div>
  </section>
</template>
