export interface TextSegment {
  text: string
  color?: string
  style?: string[]
}

export interface Padding {
  top: number
  right: number
  bottom: number
  left: number
}

export interface ImageGenerationOptions {
  fontSize?: number
  lineHeight?: number
  padding?: number | Partial<Padding>
  backgroundColor?: string
  textColor?: string
  cornerRadius?: number
}
