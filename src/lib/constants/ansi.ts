import type { Colors, Styles } from "@/types/ansi"

export const COLORS: Colors = {
  // Dark theme colors
  BLACK: "#161b22",
  RED: "#e06c75",
  GREEN: "#98c379",
  YELLOW: "#e5c07b",
  BLUE: "#61afef",
  MAGENTA: "#c678dd",
  CYAN: "#56b6c2",
  WHITE: "#dcdfe4",
  GRAY: "#5a6374",

  // Bright colors
  BRIGHT_RED: "#e06c75",
  BRIGHT_GREEN: "#98c379",
  BRIGHT_YELLOW: "#e5c07b",
  BRIGHT_BLUE: "#61afef",
  BRIGHT_MAGENTA: "#c678dd",
  BRIGHT_CYAN: "#56b6c2",
  BRIGHT_WHITE: "#ffffff",

  // Theme specific
  BACKGROUND: "#161b22",
  TEXT: "#cccccc",
  ACCENT: "#61afef",

  // Status
  SUCCESS: "#98c379",
  WARNING: "#e5c07b",
  ERROR: "#e06c75",
  INFO: "#61afef",
}

// Text styles
export const STYLES: Styles = {
  RESET: "reset",
  BOLD: "bold",
  DIM: "dim",
  ITALIC: "italic",
  UNDERLINE: "underline",
  INVERSE: "inverse",
  HIDDEN: "hidden",
  STRIKETHROUGH: "strikethrough",
}
