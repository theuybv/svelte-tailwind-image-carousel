<script lang='ts'>
  import type { CarouselImage } from '../data'
  import { AspectRatio } from '../data'
  import ImageThumb from './ImageThumb.svelte'

  export let images: CarouselImage[], onImageThumbClick: (event: MouseEvent, index: number) => void,
    imageContainerWidth: number, thumbsPerView: number, thumbnailAspectRatio: AspectRatio,
    imageThumbsRefs: HTMLElement[], ref: HTMLElement = undefined, thumbsContainerHeight: number = 0

  let onResize = (_event: HTMLElement) => {
    thumbsContainerHeight = ref.offsetHeight
  }

</script>

<svelte:window on:resize={onResize} />

<section class='flex flex-row gap-x-2 overflow-hidden w-full' bind:this={ref} on:scroll>
  {#each images as { imageSrc, thumbSrc, alt }, index (thumbSrc)}
    <ImageThumb on:click={(e) =>  onImageThumbClick(e, index)} bind:ref={imageThumbsRefs[index]}
                on:load={() => {
                    thumbsContainerHeight = ref.offsetHeight
                }}
                width={imageContainerWidth / thumbsPerView - 5}
                src={thumbSrc} {alt} ratio={thumbnailAspectRatio} />
  {/each}
</section>
