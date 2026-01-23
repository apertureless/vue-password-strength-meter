import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'VuePasswordStrengthMeter',
      fileName: 'vue-password-strength-meter'
    },
    rollupOptions: {
      external: ['vue', 'zxcvbn'],
      output: {
        globals: {
          vue: 'Vue',
          zxcvbn: 'zxcvbn'
        }
      }
    }
  }
})