import { NODE_ENV } from "@/lib/env"

type LogLevel = "info" | "success" | "warn" | "error"

export const LOG_COLORS = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  underscore: "\x1b[4m",
  blink: "\x1b[5m",
  reverse: "\x1b[7m",
  hidden: "\x1b[8m",
  black: "\x1b[30m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  bgBlack: "\x1b[40m",
  bgRed: "\x1b[41m",
  bgGreen: "\x1b[42m",
  bgYellow: "\x1b[43m",
  bgBlue: "\x1b[44m",
  bgMagenta: "\x1b[45m",
  bgCyan: "\x1b[46m",
  bgWhite: "\x1b[47m",
} as const

interface LogOptions {
  level?: LogLevel
  message: string
  data?: any
}

export function log({ level = "info", message, data }: LogOptions): void {
  const levelUpper = level.toUpperCase()

  let logMethod = console.log
  let prefix = ""

  switch (level) {
    case "success":
      prefix = `${LOG_COLORS.bgGreen}${LOG_COLORS.black} ${levelUpper} ${LOG_COLORS.reset} `
      break
    case "warn":
      logMethod = console.warn
      prefix = `${LOG_COLORS.bgYellow}${LOG_COLORS.black} ${levelUpper} ${LOG_COLORS.reset} `
      break
    case "error":
      logMethod = console.error
      prefix = `${LOG_COLORS.bgRed}${LOG_COLORS.white} ${levelUpper} ${LOG_COLORS.reset} `
      break
    default: // info
      prefix = `${LOG_COLORS.bgBlue}${LOG_COLORS.white} ${levelUpper} ${LOG_COLORS.reset} `
  }

  logMethod(`${prefix}${message}`)

  if (data) {
    logMethod(data)
  }
}

// Helper methods for common log types
export const logger = {
  info: (message: string, data?: any) => log({ level: "info", message, data }),
  success: (message: string, data?: any) => log({ level: "success", message, data }),
  warn: (message: string, data?: any) => log({ level: "warn", message, data }),
  error: (message: string, error?: Error | string) => {
    const errorMessage =
      error instanceof Error ? `${message}: ${error.message}` : error ? `${message}: ${error}` : message

    log({
      level: "error",
      message: errorMessage,
      data: error instanceof Error ? error.stack : undefined,
    })

    if (error instanceof Error && NODE_ENV === "development") {
      console.error(error.stack)
    }
  },
}
