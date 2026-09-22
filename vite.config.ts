import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Load all env vars from .env files (no prefix filter so PORT is included)
  const env = loadEnv(mode, process.cwd(), '')

  const port = parseInt(env.PORT || process.env.PORT || '5173', 10)

  return {
    plugins: [react()],
    server: {
      port,
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
    },
  }
})
