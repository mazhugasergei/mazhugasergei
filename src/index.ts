import { getAsciiArtData } from "@/utils/content"
import { generateImageFromAscii } from "@/utils/image"

async function main() {
  const styledLines = await getAsciiArtData({ debug: false })
  generateImageFromAscii(styledLines, "image.svg")
}

main()
