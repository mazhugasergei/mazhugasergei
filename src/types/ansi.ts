export type ANSIColor =
  // Dark theme colors
  | "black"
  | "red"
  | "green"
  | "yellow"
  | "blue"
  | "magenta"
  | "cyan"
  | "white"
  | "gray"

  // Bright colors
  | "brightRed"
  | "brightGreen"
  | "brightYellow"
  | "brightBlue"
  | "brightMagenta"
  | "brightCyan"
  | "brightWhite"

  // Theme specific
  | "background"
  | "text"
  | "accent"
  | "success"

  // Status
  | "warning"
  | "error"
  | "info"

export type ANSIColors = {
  [K in ANSIColor]: string
}

export type ANSIStyle = "reset" | "bold" | "dim" | "italic" | "underline" | "inverse" | "hidden" | "strikethrough"
