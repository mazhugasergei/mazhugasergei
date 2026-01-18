import { ANSIColor, ANSIStyle } from "./ansi"

export interface GetAsciiArtDataOptions {
  debug?: boolean
}

type StyledTextBase = {
  text: string
  style: ANSIStyle[]
}

export type StyledTextWithANSIColor = StyledTextBase & {
  color?: ANSIColor
}

export type StyledTextWithHEXColor = StyledTextBase & {
  color?: string
}

export type ArtLine = StyledTextWithHEXColor[]
export type Info = StyledTextWithHEXColor[][]
export type Art = StyledTextWithHEXColor[][]
