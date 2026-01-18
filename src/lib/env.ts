import { config } from "dotenv"

// Load .env files in order of precedence
config({ path: ".env", quiet: true })
config({ path: ".env.local", override: true, quiet: true })

export const NODE_ENV = process.env.NODE_ENV || "development"

export const isDevelopment = NODE_ENV === "development"
export const isProduction = NODE_ENV === "production"
export const isTest = NODE_ENV === "test"

export const GITHUB_TOKEN = process.env.TOKEN || ""
export const GITHUB_USERNAME = process.env.USERNAME
