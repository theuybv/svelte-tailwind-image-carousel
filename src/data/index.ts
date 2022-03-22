import { faker } from '@faker-js/faker'

export enum AspectRatio {
  '16/9' = 16 / 9,
  '9/16' = 9 / 16,
  '3/2' = 3 / 2,
  '3/4' = 3 / 4,
  '4/3' = 4 / 3,
  '1/1' = 1,
}

export type CarouselImage = {
  imageSrc: string
  thumbSrc: string
  alt?: string
}

export const tailWindCSSAspectRatios: Record<keyof typeof AspectRatio, string> =
  {
    '16/9': 'aspect-[16/9]',
    '9/16': 'aspect-[9/6]',
    '3/2': 'aspect-[3/2]',
    '3/4': 'aspect-[3/4]',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-[1/1]',
  }

export const getDemoImages = (
  numberOfImages: number,
  aspectRatio: AspectRatio
) => {
  return [...Array(numberOfImages)].map((_value, index) => {
    const maxWidth = 1024
    const height = Math.round(aspectRatio * maxWidth)
    const width = Math.round(height * aspectRatio)
    const imageSrc = `https://picsum.photos/${width}/${height}?random=${index}`

    return {
      thumbSrc: imageSrc,
      imageSrc: imageSrc,
      alt: faker.name.lastName(),
    }
  })
}
