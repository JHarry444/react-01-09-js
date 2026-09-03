import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vitest picks configuration from Vite, so test setup lives here.
  test: {
    // jsdom provides a browser-like DOM so React components can render in tests.
    environment: 'jsdom',
    // setupFiles runs before each test file to register shared test utilities.
    setupFiles: './src/tests/setup.js',
    // globals allows using describe/it/expect without importing in every file.
    globals: true,
    // Enable CSS handling so component imports that include styles do not fail.
    css: true,
  },
})
