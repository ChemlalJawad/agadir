<template>
  <div class="homework-container">
    <!-- Full Screen Loading Overlay -->
    <Transition name="fade">
      <div v-if="isProcessing" class="loading-overlay" role="dialog" aria-modal="true" aria-label="Processing homework">
        <div class="loading-content">
          <div class="loading-animation">
            <div class="pencil-container">
              <svg class="pencil-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
              </svg>
              <div class="writing-line"></div>
            </div>
            <div class="progress-ring">
              <svg viewBox="0 0 100 100">
                <circle class="progress-bg" cx="50" cy="50" r="45"/>
                <circle class="progress-fill" cx="50" cy="50" r="45" :style="{ strokeDashoffset: progressOffset }"/>
              </svg>
              <span class="progress-text">{{ Math.round(progress) }}%</span>
            </div>
          </div>
          <h2 class="loading-title">Solving homework...</h2>
          <p class="loading-subtitle">Our AI is analyzing and completing the problem</p>
          <div class="loading-steps">
            <div class="step" :class="{ active: progress >= 0 }">
              <svg class="step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path v-if="progress >= 33" d="M9 12l2 2 4-4"/>
              </svg>
              <span>Analyzing image</span>
            </div>
            <div class="step" :class="{ active: progress >= 33 }">
              <svg class="step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path v-if="progress >= 66" d="M9 12l2 2 4-4"/>
              </svg>
              <span>Understanding problem</span>
            </div>
            <div class="step" :class="{ active: progress >= 66 }">
              <svg class="step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path v-if="progress >= 100" d="M9 12l2 2 4-4"/>
              </svg>
              <span>Writing solution</span>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Main Content -->
    <div class="hero-section">
      <div class="hero-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
        </svg>
      </div>
      <h1 class="hero-title">Homework Helper</h1>
      <p class="hero-subtitle">Take a photo of any homework problem and get step-by-step solutions written directly on the page</p>
    </div>

    <!-- Upload Section -->
    <div v-if="!resultImage" class="upload-section">
      <div
        class="upload-zone glass-card"
        :class="{ 'drag-over': isDragging }"
        @dragenter.prevent="isDragging = true"
        @dragleave.prevent="isDragging = false"
        @dragover.prevent
        @drop.prevent="handleDrop"
        @click="triggerFileInput"
        @keydown.enter="triggerFileInput"
        @keydown.space.prevent="triggerFileInput"
        role="button"
        tabindex="0"
        aria-label="Upload homework image"
      >
        <input
          ref="fileInput"
          type="file"
          accept="image/*"
          capture="environment"
          @change="handleFileSelect"
          class="file-input"
          aria-hidden="true"
        />
        <div class="upload-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>
        </div>
        <h3 class="upload-title">Upload homework photo</h3>
        <p class="upload-text">Drag and drop an image here, or click to browse</p>
        <div class="upload-formats">
          <span class="format-badge">JPG</span>
          <span class="format-badge">PNG</span>
          <span class="format-badge">HEIC</span>
        </div>
      </div>

      <div class="tips-section">
        <h3 class="tips-title">
          <svg class="tips-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 16v-4m0-4h.01"/>
          </svg>
          Tips for best results
        </h3>
        <ul class="tips-list">
          <li>
            <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 12l2 2 4-4"/>
            </svg>
            Ensure good lighting and clear focus
          </li>
          <li>
            <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 12l2 2 4-4"/>
            </svg>
            Capture the entire problem in frame
          </li>
          <li>
            <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 12l2 2 4-4"/>
            </svg>
            Keep the page flat and avoid shadows
          </li>
        </ul>
      </div>
    </div>

    <!-- Result Section -->
    <div v-else class="result-section">
      <div class="result-card glass-card">
        <div class="result-header">
          <h3 class="result-title">
            <svg class="result-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Solution Ready
          </h3>
          <button class="btn-new" @click="resetUpload" aria-label="Upload new image">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
            </svg>
            New Problem
          </button>
        </div>
        <div class="image-container">
          <img :src="resultImage" alt="Solved homework" class="result-image"/>
        </div>
        <div class="result-actions">
          <button class="btn-primary" @click="downloadImage">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
            </svg>
            Download
          </button>
          <button class="btn-secondary" @click="shareImage">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
            </svg>
            Share
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const fileInput = ref(null)
const isDragging = ref(false)
const isProcessing = ref(false)
const progress = ref(0)
const uploadedImage = ref(null)
const resultImage = ref(null)

const progressOffset = computed(() => {
  const circumference = 2 * Math.PI * 45
  return circumference - (progress.value / 100) * circumference
})

function triggerFileInput() {
  fileInput.value?.click()
}

function handleFileSelect(event) {
  const file = event.target.files?.[0]
  if (file) processFile(file)
}

function handleDrop(event) {
  isDragging.value = false
  const file = event.dataTransfer?.files?.[0]
  if (file && file.type.startsWith('image/')) {
    processFile(file)
  }
}

function processFile(file) {
  const reader = new FileReader()
  reader.onload = (e) => {
    uploadedImage.value = e.target?.result
    startProcessing()
  }
  reader.readAsDataURL(file)
}

function startProcessing() {
  isProcessing.value = true
  progress.value = 0

  // Simulate 10 second processing time
  const duration = 10000
  const interval = 50
  const increment = 100 / (duration / interval)

  const timer = setInterval(() => {
    progress.value += increment
    if (progress.value >= 100) {
      progress.value = 100
      clearInterval(timer)
      setTimeout(() => {
        isProcessing.value = false
        // For now, return the same image - AI feature will be added later
        resultImage.value = uploadedImage.value
      }, 500)
    }
  }, interval)
}

function resetUpload() {
  uploadedImage.value = null
  resultImage.value = null
  progress.value = 0
  if (fileInput.value) {
    fileInput.value.value = ''
  }
}

function downloadImage() {
  if (!resultImage.value) return
  const link = document.createElement('a')
  link.href = resultImage.value
  link.download = 'homework-solved.png'
  link.click()
}

async function shareImage() {
  if (!resultImage.value) return

  if (navigator.share) {
    try {
      const response = await fetch(resultImage.value)
      const blob = await response.blob()
      const file = new File([blob], 'homework-solved.png', { type: 'image/png' })
      await navigator.share({
        title: 'Solved Homework',
        files: [file]
      })
    } catch (err) {
      // User cancelled or share failed
      console.log('Share cancelled')
    }
  } else {
    // Fallback: copy to clipboard or show message
    alert('Sharing is not supported on this device. Please use the download button.')
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

.homework-container {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  min-height: 100%;
}

/* Hero Section */
.hero-section {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2.5rem 2rem;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.hero-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 1.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  color: white;
}

.hero-icon svg {
  width: 100%;
  height: 100%;
}

.hero-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.75rem;
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.85);
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Upload Section */
.upload-section {
  display: grid;
  gap: 2rem;
}

.upload-zone {
  padding: 3rem 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.06);
  border: 2px dashed rgba(255, 255, 255, 0.2);
}

.upload-zone:hover,
.upload-zone:focus {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-2px);
}

.upload-zone:focus-visible {
  outline: 3px solid rgba(255, 255, 255, 0.8);
  outline-offset: 3px;
}

.upload-zone.drag-over {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.5);
  transform: scale(1.02);
}

.file-input {
  display: none;
}

.upload-icon {
  width: 72px;
  height: 72px;
  margin: 0 auto 1.5rem;
  padding: 1.25rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  color: rgba(255, 255, 255, 0.9);
}

.upload-icon svg {
  width: 100%;
  height: 100%;
}

.upload-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
}

.upload-text {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
}

.upload-formats {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.format-badge {
  padding: 0.35rem 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Tips Section */
.tips-section {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.tips-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
}

.tips-icon {
  width: 20px;
  height: 20px;
  color: rgba(255, 255, 255, 0.8);
}

.tips-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.75rem;
}

.tips-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
}

.check-icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  color: #4ade80;
}

/* Loading Overlay */
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #1a2634 0%, #2c3e50 50%, #1a2634 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.loading-content {
  text-align: center;
  padding: 2rem;
  max-width: 400px;
}

.loading-animation {
  position: relative;
  margin-bottom: 2rem;
}

.pencil-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

.pencil-icon {
  width: 40px;
  height: 40px;
  color: white;
  animation: pencil-write 1.5s ease-in-out infinite;
}

.writing-line {
  position: absolute;
  bottom: -8px;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, white, transparent);
  animation: line-write 1.5s ease-in-out infinite;
}

@keyframes pencil-write {
  0%, 100% { transform: translateX(-5px) rotate(-5deg); }
  50% { transform: translateX(5px) rotate(5deg); }
}

@keyframes line-write {
  0% { width: 0; transform: translateX(-50%); }
  50% { width: 30px; transform: translateX(-50%); }
  100% { width: 0; transform: translateX(-50%); }
}

.progress-ring {
  width: 140px;
  height: 140px;
  margin: 0 auto;
  position: relative;
}

.progress-ring svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.progress-bg {
  fill: none;
  stroke: rgba(255, 255, 255, 0.1);
  stroke-width: 6;
}

.progress-fill {
  fill: none;
  stroke: white;
  stroke-width: 6;
  stroke-linecap: round;
  stroke-dasharray: 283;
  transition: stroke-dashoffset 0.1s ease;
}

.progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
}

.loading-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
}

.loading-subtitle {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  margin-bottom: 2rem;
}

.loading-steps {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  text-align: left;
}

.step {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.step.active {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.step-icon {
  width: 22px;
  height: 22px;
  flex-shrink: 0;
}

/* Result Section */
.result-section {
  animation: slide-up 0.5s ease;
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.result-card {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.08);
}

.result-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.result-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
}

.result-icon {
  width: 24px;
  height: 24px;
  color: #4ade80;
}

.btn-new {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-new svg {
  width: 18px;
  height: 18px;
}

.btn-new:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

.image-container {
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 1.5rem;
  background: rgba(0, 0, 0, 0.2);
}

.result-image {
  width: 100%;
  height: auto;
  display: block;
}

.result-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  flex: 1;
  min-width: 140px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #34495e, #2c3e50);
  color: white;
  box-shadow: 0 8px 25px rgba(44, 62, 80, 0.4);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 35px rgba(44, 62, 80, 0.5);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

.btn-primary svg,
.btn-secondary svg {
  width: 20px;
  height: 20px;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-section {
    padding: 2rem 1.5rem;
  }

  .hero-title {
    font-size: 1.75rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .upload-zone {
    padding: 2rem 1.5rem;
  }

  .upload-icon {
    width: 56px;
    height: 56px;
  }

  .loading-content {
    padding: 1.5rem;
  }

  .progress-ring {
    width: 120px;
    height: 120px;
  }

  .result-actions {
    flex-direction: column;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
  }
}
</style>
