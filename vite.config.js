import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // Assets must load from the task9-3d subdirectory on the Deakin server.
  base: './',
})
