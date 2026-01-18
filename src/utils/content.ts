import { INFO_OFFSET } from "@/lib/constants"
import { ART, INFO } from "@/lib/content"
import type { ANSIColor } from "@/types/ansi"
import type { ArtLine, GetAsciiArtDataOptions, StyledTextWithHEXColor } from "@/types/content"
import { bold, normal } from "@/utils/ansi"
import { getGitHubContributions } from "@/utils/github"
import { logger } from "@/utils/logger"

interface Props {
  debug?: boolean
}

export async function getInfo({ debug = false }: Props = {}) {
  const info = [...INFO]

  // GitHub
  try {
    const stats = await getGitHubContributions()
    info.push([
      bold("GitHub", "brightWhite"),
      normal(": +" + stats.linesChanged.total.toLocaleString() + " ("),
      normal("+" + stats.linesChanged.additions.toLocaleString(), "brightGreen"),
      normal(", "),
      normal("-" + stats.linesChanged.deletions.toLocaleString(), "brightRed"),
      normal(")"),
    ])
  } catch (error) {
    logger.error("Failed to fetch GitHub contributions:", error as Error)
    process.exit(1)
  }

  // Debug
  if (debug) {
    const now = new Date()
    const timeString = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    })
    info.push([bold("Last updated", "brightWhite"), normal(`: ${timeString}`)])
  }

  return info
}

export async function getAsciiArtData({ debug = false }: GetAsciiArtDataOptions = {}): Promise<ArtLine[]> {
  const info = await getInfo({ debug })

  let infoToUse: ArtLine[] = [...info]

  const MAX_LENGTH = Math.max(
    ...ART.map((line: StyledTextWithHEXColor[]) =>
      line.reduce((sum: number, part: StyledTextWithHEXColor) => sum + part.text.length, 0)
    )
  )
  const result: ArtLine[] = []

  for (let i = 0; i < Math.max(ART.length, infoToUse.length); i++) {
    const artLine = ART[i] || []
    const infoLine = infoToUse[i] || []

    const artLength = artLine.reduce((sum: number, part: StyledTextWithHEXColor) => sum + part.text.length, 0)
    let padWidth = MAX_LENGTH - artLength + INFO_OFFSET
    if (padWidth < 1) padWidth = 1

    // Combine art and info with padding
    const combined = [
      ...artLine,
      { text: " ".repeat(padWidth), color: "background" as ANSIColor, style: [] },
      ...infoLine,
    ]

    result.push(combined)
  }

  return result
}
