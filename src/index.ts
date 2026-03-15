import { getAsciiArtData } from "@/utils/content"
import { generateImageFromAscii } from "@/utils/image"

async function main() {
  const styledLines = await getAsciiArtData({ debug: false, infoOffset: 8 })
  generateImageFromAscii(styledLines, "image.svg", {
    padding: {
      top: 80,
      bottom: 80,
      left: 80,
      right: 450,
    },
  })
}

main()
