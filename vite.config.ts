import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Listen on all addresses, including LAN and public IP addresses
    port: 5173, // Ensure it matches the EXPOSE port in Dockerfile
  }
})
