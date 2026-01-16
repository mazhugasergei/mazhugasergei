export interface Colors {
  // Dark theme colors
  BLACK: string
  RED: string
  GREEN: string
  YELLOW: string
  BLUE: string
  MAGENTA: string
  CYAN: string
  WHITE: string
  GRAY: string

  // Bright colors
  BRIGHT_RED: string
  BRIGHT_GREEN: string
  BRIGHT_YELLOW: string
  BRIGHT_BLUE: string
  BRIGHT_MAGENTA: string
  BRIGHT_CYAN: string
  BRIGHT_WHITE: string

  // Theme specific
  BACKGROUND: string
  TEXT: string
  ACCENT: string

  // Status
  SUCCESS: string
  WARNING: string
  ERROR: string
  INFO: string
}

export interface Styles {
  RESET: string
  BOLD: string
  DIM: string
  ITALIC: string
  UNDERLINE: string
  INVERSE: string
  HIDDEN: string
  STRIKETHROUGH: string
}

// Text formatting helper
export interface StyledText {
  text: string
  color?: string
  style: string[]
}
