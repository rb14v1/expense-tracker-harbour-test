/// <reference types="vite/client" />
/**
 * Centralised runtime environment configuration.
 *
 * All VITE_* variables are declared and validated here so that missing or
 * malformed configuration is surfaced immediately when the app boots rather
 * than causing silent failures deep in component trees.
 *
 * To add a new variable:
 *   1. Add it to .env.example with a comment.
 *   2. Declare it in this file (required or optional as appropriate).
 *   3. Reference it via this module — never via import.meta.env directly.
 */

/**
 * Returns the value of a VITE_ env var.
 * Throws at runtime if the variable is marked required and absent/empty.
 */
function getEnv(key: string, defaultValue: string): string
function getEnv(key: string): string
function getEnv(key: string, defaultValue?: string): string {
  // import.meta.env is populated by Vite at build time from .env files.
  const value = (import.meta.env as Record<string, string | undefined>)[key]
  if (value === undefined || value === '') {
    if (defaultValue !== undefined) return defaultValue
    throw new Error(
      `[env] Required environment variable "${key}" is not set. ` +
      `See .env.example for the full list of required variables.`,
    )
  }
  return value
}

export const env = {
  /**
   * Human-readable application title displayed in the page header.
   * Set VITE_APP_TITLE in your .env file to override the default.
   * Default: "Expense Tracker"
   */
  APP_TITLE: getEnv('VITE_APP_TITLE', 'Expense Tracker'),
} as const
