import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Validate environment variables at build/dev-server startup.
 * Throws with a descriptive message so misconfiguration is caught immediately
 * rather than silently falling back to a wrong default.
 *
 * Add every new env var here and to .env.example so that the two stay in sync.
 */
function validateEnv(env: Record<string, string>): void {
  const errors: string[] = []

  // PORT is optional but must be a valid TCP port number when supplied.
  if (env.PORT !== undefined && env.PORT !== '') {
    const port = Number(env.PORT)
    if (!Number.isInteger(port) || port < 1 || port > 65535) {
      errors.push(`PORT="${env.PORT}" is not a valid port number (1–65535).`)
    }
  }

  // VITE_APP_TITLE is optional; must not be an empty string when provided.
  if (env.VITE_APP_TITLE !== undefined && env.VITE_APP_TITLE.trim() === '') {
    errors.push('VITE_APP_TITLE must not be an empty string when set.')
  }

  if (errors.length > 0) {
    throw new Error(
      `\n[env validation] Invalid environment variable(s):\n  • ${errors.join('\n  • ')}\n` +
      `See .env.example for the full list of supported variables.\n`,
    )
  }
}

export default defineConfig(({ mode }) => {
  // Load all env vars from .env files (no prefix filter so PORT is included).
  const env = loadEnv(mode, process.cwd(), '')

  // Fail fast — do not swallow misconfiguration silently.
  validateEnv(env)

  const port = parseInt(env.PORT || process.env.PORT || '5173', 10)

  return {
    plugins: [react()],
    server: {
      port,
    },
    preview: {
      port,
      // Azure Container Apps' ingress presents the app's own FQDN as the Host header.
      // Vite's preview server rejects unrecognized hosts by default (403 "Blocked request"),
      // which looks identical to a TCP-level failure from outside but is purely an app-layer check.
      allowedHosts: true,
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
    },
  }
})
