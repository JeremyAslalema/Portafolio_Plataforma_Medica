import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    // CONFIGURACIÓN BÁSICA - ya no necesitas manejar PDFs
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // Configuración estándar para Vite + React
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    }
  },
  // Optimizar para producción
  server: {
    port: 3000
  }
})