import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Укажите папку для билда
    rollupOptions: {
      input: resolve(__dirname, 'index.html'), // Используем resolve из path
    }
  }
})