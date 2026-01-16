export interface StyledText {
  text: string
  color?: string
  style: string[]
}

export type ArtLine = StyledText[]

export interface GetAsciiArtDataOptions {
  debug?: boolean
}

export type Info = StyledText[][]
export type Art = StyledText[][]
