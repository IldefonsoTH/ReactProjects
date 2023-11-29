import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ReactProjects/twitter-app/', // Ruta relativa al repositorio
  plugins: [react()],
})
