import type { ANSIColors } from "@/types/ansi"

export const COLORS: ANSIColors = {
  // Dark theme colors
  black: "#161b22",
  red: "#e06c75",
  green: "#98c379",
  yellow: "#e5c07b",
  blue: "#61afef",
  magenta: "#c678dd",
  cyan: "#56b6c2",
  white: "#dcdfe4",
  gray: "#5a6374",

  // Bright colors
  brightRed: "#e06c75",
  brightGreen: "#98c379",
  brightYellow: "#e5c07b",
  brightBlue: "#61afef",
  brightMagenta: "#c678dd",
  brightCyan: "#56b6c2",
  brightWhite: "#ffffff",

  // Theme specific
  background: "#161b22",
  text: "#cccccc",
  accent: "#61afef",

  // Status
  success: "#98c379",
  warning: "#e5c07b",
  error: "#e06c75",
  info: "#61afef",
} as const

export const INFO_OFFSET = 4
