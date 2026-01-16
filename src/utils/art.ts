import { COLORS } from "@/lib/constants/ansi"
import { ART, INFO } from "@/lib/constants/content"
import type { StyledText } from "@/types/ansi"
import type { ArtLine, GetAsciiArtDataOptions } from "@/types/content"
import { bold, normal } from "@/utils/ansi"

const OFFSET = 4

export function getAsciiArtData(options: GetAsciiArtDataOptions = {}): ArtLine[] {
  const { debug = false } = options

  // Start with a copy of the base INFO
  let infoToUse: ArtLine[] = [...INFO]

  // Add time info if debug is enabled
  if (debug) {
    const now = new Date()
    const timeString = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    })
    const timeInfo: ArtLine = [bold("Last updated", COLORS.BRIGHT_WHITE), normal(`: ${timeString}`)]
    infoToUse = [...infoToUse, [""].map((text) => ({ text, style: [] })), timeInfo]
  }

  const MAX_LENGTH = Math.max(
    ...ART.map((line: StyledText[]) => line.reduce((sum: number, part: StyledText) => sum + part.text.length, 0))
  )
  const result: ArtLine[] = []

  for (let i = 0; i < Math.max(ART.length, infoToUse.length); i++) {
    const artLine = ART[i] || []
    const infoLine = infoToUse[i] || []

    const artLength = artLine.reduce((sum: number, part: StyledText) => sum + part.text.length, 0)
    let padWidth = MAX_LENGTH - artLength + OFFSET
    if (padWidth < 1) padWidth = 1

    // Combine art and info with padding
    const combined = [...artLine, { text: " ".repeat(padWidth), color: COLORS.BACKGROUND, style: [] }, ...infoLine]

    result.push(combined)
  }

  return result
}
