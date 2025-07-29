import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          aos: ['aos'],
          'three-vendor': [
            '@react-three/fiber',
            '@react-three/drei',
            'three'
          ]
          // Adicione outras libs grandes se necessário
        }
      }
    }
  }
})
