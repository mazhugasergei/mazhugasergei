import { getAsciiArtData } from "@/utils/content"
import { generateImageFromAscii } from "@/utils/image"

async function main() {
  const styledLines = await getAsciiArtData({ debug: false, infoOffset: 6 })
  generateImageFromAscii(styledLines, "image.svg", {
    padding: {
      top: 60,
      bottom: 60,
      left: 70,
      right: 420,
    },
  })
}

main()
