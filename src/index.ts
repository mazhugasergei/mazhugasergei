import { getAsciiArtData } from "@/utils/art"
import { generateImageFromAscii } from "@/utils/image"

// Get the ASCII art data with styling
const styledLines = getAsciiArtData({ debug: false })

// Generate the image
generateImageFromAscii(styledLines, "image.svg")
