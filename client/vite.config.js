import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default{
  server: {
    proxy: {
      "/api": "http://localhost:3000"
    }
  }
}
