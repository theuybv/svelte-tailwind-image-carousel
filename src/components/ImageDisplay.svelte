<script lang='ts'>
  import type { CarouselImage } from '../data'
  import { AspectRatio, tailWindCSSAspectRatios } from '../data'
  import { fade } from 'svelte/transition'
  import { sineIn } from 'svelte/easing'
  import { onMount } from 'svelte'


  export let imageMaxHeight: number, imageAspectRatio: AspectRatio, image: CarouselImage, imageContainerWidth: number = 0

  let ref: HTMLElement

  let onResize = (_event: HTMLElement) => {
    imageContainerWidth = ref.offsetWidth
  }

  onMount(async () => {
    imageContainerWidth = ref.offsetWidth
  })
</script>
<svelte:window on:resize={onResize} />

<div style={`max-height: ${imageMaxHeight}px`} class={`${tailWindCSSAspectRatios[imageAspectRatio]}`}>
  {#key image.imageSrc}
    <img in:fade={{delay: 10, duration: 150, easing: sineIn}} bind:this={ref}
         on:load={() => imageContainerWidth = ref.offsetWidth}
         width='100%'
         height='100%'
         src={image.imageSrc}
         alt={image.alt}
         class={`${tailWindCSSAspectRatios[imageAspectRatio]} object-contain bg-black`}
    />
  {/key}
</div>
