import { STYLES } from "@/lib/constants/ansi"
import type { StyledText } from "@/types/ansi"

export const style = (text: string, color?: string, style?: string): StyledText => {
  // If color is undefined, it will use the default textColor from options
  const styleObj: StyledText = { text, style: style ? [style] : [] }
  if (color !== undefined) {
    styleObj.color = color
  }
  return styleObj
}

export const bold = (text: string, color?: string): StyledText => style(text, color, STYLES.BOLD)
export const normal = (text: string, color?: string): StyledText => style(text, color)
