import type { tailWindCSSAspectRatios } from '../data'

export type DemoCarousel = {
  display: 'window' | 'phone'
  sourceImageAspectRatio: keyof typeof tailWindCSSAspectRatios
  carouselImageAspectRatio: keyof typeof tailWindCSSAspectRatios
  thumbnailAspectRatio: keyof typeof tailWindCSSAspectRatios
  thumbsPerView: number
  imageMaxHeight: number
  imagesCount: number
}
