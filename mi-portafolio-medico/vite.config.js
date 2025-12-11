import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    // Asegurar que copia TODOS los archivos de public
    copyPublicDir: true,
    // Configuración para archivos estáticos
    assetsInclude: ['**/*.pdf'],
    rollupOptions: {
      output: {
        // Mantener estructura de directorios
        preserveModules: false,
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.pdf')) {
            return 'files/[name][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  }
})