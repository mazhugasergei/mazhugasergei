import { getAsciiArtData } from "@/utils/content"
import { generateImageFromAscii } from "@/utils/image"

async function main() {
  const styledLines = await getAsciiArtData({ debug: false, infoOffset: 6 })
  generateImageFromAscii(styledLines, "image.svg", {
    padding: {
      left: 70,
      right: 280,
    },
  })
}

main()
