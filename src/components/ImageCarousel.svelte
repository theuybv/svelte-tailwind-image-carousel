<script lang='ts'>
  import { onMount, tick } from 'svelte'
  import { intersectRect } from '../utils'
  import type { CarouselImage } from '../data'
  import { tailWindCSSAspectRatios } from '../data'
  import ImageDisplay from './ImageDisplay.svelte'
  import ThumbsContainer from './ThumbsContainer.svelte'
  import ThumbsNavigator from './ThumbsNavigator.svelte'

  export let images: CarouselImage[] = [], imageAspectRatio: keyof typeof tailWindCSSAspectRatios = '3/2',
    thumbnailAspectRatio: keyof typeof tailWindCSSAspectRatios = '4/3', thumbsPerView: number = 6,
    imageMaxHeight = 400


  type ThumbElement = {
    index: number,
    element: HTMLElement,
    isInView: boolean
  }

  let _thumbElements: ThumbElement[] = []
  let _thumbElementsInView: ThumbElement[]
  let _thumbElementsNotInView: ThumbElement[]

  let _imageContainerWidth: number
  let _thumbsContainer: HTMLElement
  let _thumbsContainerHeight: number
  let _imageThumbsRefs: HTMLElement[] = []
  let _showPrev: boolean
  let _showNext: boolean

  let _currentImage = images[0]

  const checkAndUpdateThumbsInOutView = () => {
    _thumbElements = _imageThumbsRefs.map((imageThumb, index) => {
      return {
        index,
        element: imageThumb,
        isInView: intersectRect(
          imageThumb,
          _thumbsContainer,
        ),
      }
    })
    _thumbElementsInView = _thumbElements.filter(value => {
      return value.isInView
    })
    _thumbElementsNotInView = _thumbElements.filter(value => {
      return !value.isInView
    })
  }

  const getThumbsIterator = () => {
    checkAndUpdateThumbsInOutView()
    const lastInView = _thumbElementsInView[_thumbElementsInView.length - 1]
    const firstInView = _thumbElementsInView[0]
    const nextInToView = lastInView && _thumbElements[lastInView.index + 1]
    const prevInToView = firstInView && _thumbElements[firstInView.index - 1]
    return {
      lastInView,
      firstInView,
      nextInToView,
      prevInToView,
    }
  }

  let updateNav = (_event: MouseEvent) => {
    const { prevInToView, nextInToView } = getThumbsIterator()
    _showPrev = prevInToView !== undefined
    _showNext = nextInToView !== undefined
  }


  onMount(async () => {
    await tick()
    checkAndUpdateThumbsInOutView()
    const { prevInToView } = getThumbsIterator()
    _showNext = thumbsPerView < images.length
    _showPrev = prevInToView !== undefined
  })


  const onNextClick = async (e) => {
    e.stopPropagation()
    const { nextInToView } = getThumbsIterator()
    if (nextInToView) {
      _thumbsContainer.scrollTo({
        left: _thumbsContainer.scrollLeft + nextInToView.element.offsetWidth + 8,
        behavior: 'smooth',
      })
    }
  }

  const onPrevClick = (e) => {
    e.stopPropagation()
    const { prevInToView } = getThumbsIterator()

    if (prevInToView) {
      _thumbsContainer.scrollTo({
        left: _thumbsContainer.scrollLeft - prevInToView.element.offsetWidth - 8,
        behavior: 'smooth',
      })
    }
  }

  const onImageThumbClick = (e, index) => {
    e.stopPropagation()
    const { lastInView, nextInToView, prevInToView, firstInView } = getThumbsIterator()

    if (lastInView.element === e.currentTarget && nextInToView) {
      _thumbsContainer.scrollTo({
        left: _thumbsContainer.scrollLeft + nextInToView.element.offsetWidth + 8,
        behavior: 'smooth',
      })
    } else if (firstInView.element === e.currentTarget && prevInToView) {
      _thumbsContainer.scrollTo({
        left: _thumbsContainer.scrollLeft - prevInToView.element.offsetWidth - 8,
        behavior: 'smooth',
      })
    }
    _currentImage = images[index]
  }


</script>

<section class='flex flex-col gap-2'>
  <ImageDisplay
    bind:imageContainerWidth={_imageContainerWidth}
    imageAspectRatio={imageAspectRatio}
    image={_currentImage}
    imageMaxHeight={imageMaxHeight}
  />
  <div class='relative' style={`width: ${_imageContainerWidth}px; max-width: ${_imageContainerWidth}px;`}>
    <ThumbsNavigator onNextClick={onNextClick} onPrevClick={onPrevClick} showNext={_showNext} showPrev={_showPrev}
                     thumbsContainerHeight={_thumbsContainerHeight} />

    <ThumbsContainer bind:thumbsContainerHeight={_thumbsContainerHeight} bind:ref={_thumbsContainer} images={images}
                     on:scroll={updateNav}
                     imageContainerWidth={_imageContainerWidth}
                     onImageThumbClick={onImageThumbClick}
                     bind:imageThumbsRefs={_imageThumbsRefs} thumbnailAspectRatio={thumbnailAspectRatio}
                     thumbsPerView={thumbsPerView} />
  </div>
</section>
