import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // JSDOM provides a browser like environment for testing
    environment: 'jsdom',
    // Enables the use of global variables like `describe` and `it` in tests
    globals: true,
    setupFiles: ['./src/tests/setup.js'],
    css: true
  }
})
