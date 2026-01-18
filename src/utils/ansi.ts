import { COLORS } from "@/lib/ansi"
import type { ANSIColor, ANSIStyle } from "@/types/ansi"
import { StyledTextWithHEXColor } from "@/types/content"

export const style = (text: string, color?: ANSIColor, style?: ANSIStyle): StyledTextWithHEXColor => {
  const styleObj: StyledTextWithHEXColor = { text, style: style ? [style] : [] }
  styleObj.color = COLORS[color ?? "text"]
  return styleObj
}

export const bold = (text: string, color?: ANSIColor): StyledTextWithHEXColor => style(text, color, "bold")
export const normal = (text: string, color?: ANSIColor): StyledTextWithHEXColor => style(text, color)
