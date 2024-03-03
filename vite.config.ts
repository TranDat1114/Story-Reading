import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@data': '/src/data',
      "@languages": "/src/languages",
      "@types": "/src/types",
      "@share": "/src/share",
    }
  }
})
