import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
base: '/',
server: {
  historyApiFallback: true
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
