import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  server: {
    host: '0.0.0.0',   // biar bisa diakses dari HP
    port: 5173,        // port default, bisa ganti kalau bentrok
    allowedHosts: true // izinkan semua host
  }
})
