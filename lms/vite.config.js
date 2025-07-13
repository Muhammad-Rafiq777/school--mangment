import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    port: 5174,
    open: true,
    host: true,
    watch: {
      usePolling: true,
      interval: 1000
    }
  },
  hmr: {
    overlay: true
  }
})
