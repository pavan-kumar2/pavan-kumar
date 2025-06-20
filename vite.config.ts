import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@style': path.resolve(__dirname, 'src/style')
    }
  },
  server: {
    port: 3000,
    host: true
  },
})