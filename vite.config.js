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
      external: ['vue', '@zxcvbn-ts/core', '@zxcvbn-ts/language-en'],
      output: {
        globals: {
          vue: 'Vue',
          '@zxcvbn-ts/core': 'zxcvbnTsCore',
          '@zxcvbn-ts/language-en': 'zxcvbnTsLanguageEn'
        }
      }
    }
  }
})