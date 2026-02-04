import { COLORS } from "@/lib/constants"
import type { ImageGenerationOptions, Padding, TextSegment } from "@/types/image"
import { logger } from "@/utils/logger"
import { createCanvas } from "canvas"
import fs from "fs"

type Line = TextSegment[]

export async function generateImageFromAscii(
  lines: Line[],
  outputPath: string,
  options: ImageGenerationOptions = {}
): Promise<void> {
  // Set default options with proper typing
  const {
    fontSize = 16,
    lineHeight = 1.35,
    padding = 50,
    backgroundColor = COLORS.background,
    textColor = COLORS.text,
    cornerRadius = 18,
  } = options

  // Handle padding - can be a number or an object
  const paddingObj: Padding = (() => {
    if (typeof padding === "number") {
      return { top: padding, right: padding, bottom: padding, left: padding }
    }
    return {
      top: (padding as Partial<Padding>).top ?? 50,
      right: (padding as Partial<Padding>).right ?? 50,
      bottom: (padding as Partial<Padding>).bottom ?? 50,
      left: (padding as Partial<Padding>).left ?? 50,
    }
  })()

  // Validate input
  if (!Array.isArray(lines) || lines.length === 0) {
    throw new Error("No lines provided to generate image from")
  }

  // Filter out any empty lines or invalid line entries
  const validLines: Line[] = lines.filter(
    (line): line is Line =>
      Array.isArray(line) &&
      line.length > 0 &&
      line.every(
        (segment) => segment && typeof segment === "object" && "text" in segment && typeof segment.text === "string"
      )
  )
  if (validLines.length === 0) {
    throw new Error("No valid text content to render")
  }

  // Create temporary canvas for measurement
  const tempCanvas = createCanvas(1, 1)
  const tempCtx = tempCanvas.getContext("2d")

  // Set up font for measurements
  tempCtx.font = `${fontSize}px monospace`
  // Calculate line height in pixels - ensure it's at least font size + 2px
  const lineHeightPx = Math.max(fontSize + 2, Math.ceil(fontSize * lineHeight))

  // Calculate content dimensions
  let maxLineWidth = 0
  const lineWidths = validLines.map((line) => {
    const width = line.reduce((sum: number, seg: TextSegment) => {
      return sum + (tempCtx.measureText(seg.text).width || 0)
    }, 0)
    maxLineWidth = Math.max(maxLineWidth, width)
    return width
  })

  // Calculate canvas dimensions with padding
  const contentWidth = Math.max(1, maxLineWidth)
  const contentHeight = Math.max(1, validLines.length * lineHeightPx)

  const width = Math.max(1, Math.ceil(paddingObj.left + contentWidth + paddingObj.right))
  const height = Math.max(1, Math.ceil(paddingObj.top + contentHeight + paddingObj.bottom))

  // Create final canvas with minimum size of 1x1
  const canvas = createCanvas(width, height)
  const ctx = canvas.getContext("2d")

  // Draw background
  ctx.fillStyle = backgroundColor
  ctx.fillRect(0, 0, width, height)

  // Set default font with Cascadia Mono as primary monospace font
  const fontFamily = '"Cascadia Mono", "Cascadia Code", Consolas, "Courier New", monospace'
  ctx.font = `${fontSize}px ${fontFamily}`
  ctx.textBaseline = "top"

  // Draw each line with consistent line height
  validLines.forEach((line, row) => {
    let x = paddingObj.left
    // Add half the line height to the y-position to center the text vertically in its line
    const y = paddingObj.top + row * lineHeightPx + (lineHeightPx - fontSize) / 2

    // Draw each segment
    line.forEach((segment) => {
      const { text, color = textColor, style = [] } = segment

      // Set font style
      const isBold = style.includes("bold")
      const isItalic = style.includes("italic")
      const isUnderline = style.includes("underline")

      // Build font string with consistent family and style
      let font = []
      if (isBold) font.push("bold")
      if (isItalic) font.push("italic")
      font.push(`${fontSize}px ${fontFamily}`)

      ctx.font = font.join(" ")
      ctx.fillStyle = color

      // Draw text
      ctx.fillText(text, x, y)

      // Draw underline if needed
      if (isUnderline) {
        const metrics = ctx.measureText(text)
        const textWidth = metrics.actualBoundingBoxRight - metrics.actualBoundingBoxLeft
        const underlineY = y + fontSize + 2
        ctx.beginPath()
        ctx.moveTo(x, underlineY)
        ctx.lineTo(x + textWidth, underlineY)
        ctx.strokeStyle = color
        ctx.lineWidth = 1
        ctx.stroke()
      }

      x += ctx.measureText(text).width
    })
  })

  // Save SVG
  try {
    // Create SVG content with rounded corners
    let svgContent = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n`
    // Add a clip path for rounded corners
    svgContent += `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">\n`
    svgContent += `  <defs>\n`
    svgContent += `    <clipPath id="rounded-corners">\n`
    svgContent += `      <rect width="100%" height="100%" rx="${cornerRadius}" ry="${cornerRadius}" />\n`
    svgContent += `    </clipPath>\n`
    svgContent += `  </defs>\n`

    // Add background with rounded corners
    svgContent += `  <rect width="100%" height="100%" fill="${backgroundColor}" rx="${cornerRadius}" ry="${cornerRadius}" clip-path="url(#rounded-corners)" />\n`

    // Add text elements with proper line height
    validLines.forEach((line, row) => {
      let x = paddingObj.left
      // Center text vertically in its line, accounting for the font's baseline
      const y = paddingObj.top + row * lineHeightPx + (lineHeightPx + fontSize) / 2

      // Process each segment in the line
      line.forEach((segment) => {
        const { text, color = textColor, style = [] } = segment
        const isBold = style.includes("bold")
        const isItalic = style.includes("italic")
        const isUnderline = style.includes("underline")

        let fontWeight = isBold ? "bold" : "normal"
        let fontStyle = isItalic ? "italic" : "normal"
        let textDecoration = isUnderline ? "underline" : "none"

        // Only add text element if there's actual content and text is defined
        if (text && typeof text === "string" && (text.trim() !== "" || text.includes(" "))) {
          // Replace spaces with &nbsp; to ensure they're preserved
          const escapedText = text.replace(/ /g, "&#160;")

          svgContent += `  <text x="${x}" y="${y}" `
          svgContent += `font-family="'Cascadia Mono', 'Cascadia Code', Consolas, 'Courier New', monospace" `
          svgContent += `font-size="${fontSize}px" `
          svgContent += `font-weight="${fontWeight}" font-style="${fontStyle}" `
          svgContent += `text-decoration="${textDecoration}" `
          svgContent += `fill="${color}" `
          svgContent += `xml:space="preserve">` // Preserve whitespace
          svgContent += `${escapedText}</text>\n`
        }

        // Update x position for next segment
        const tempCtx = canvas.getContext("2d")
        const tempFont = []
        if (isBold) tempFont.push("bold")
        if (isItalic) tempFont.push("italic")
        tempFont.push(`${fontSize}px ${fontFamily}`)
        tempCtx.font = tempFont.join(" ")
        x += tempCtx.measureText(text).width
      })
    })

    svgContent += `</svg>`

    // Write SVG file
    fs.writeFileSync(outputPath, svgContent)
    logger.done(`Generated ${outputPath} (${width}x${height}px)`)
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Failed to generate SVG"
    logger.error(errorMessage, error as Error)
    throw error
  }
}
