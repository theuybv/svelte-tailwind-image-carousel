<script lang='ts'>
  import ImageCarousel from '../components/ImageCarousel.svelte'
  import { AspectRatio, getDemoImages } from '../data'
  import { onMount } from 'svelte'
  import { Circle3 as Loader } from 'svelte-loading-spinners'
  import CarouselStats from '../components/CarouselStats.svelte'
  import type { DemoCarousel } from '../types'

  const demoCarousels: DemoCarousel[] = [
    {
      display: 'window',
      sourceImageAspectRatio: '1/1',
      carouselImageAspectRatio: '3/2',
      thumbnailAspectRatio: '4/3',
      thumbsPerView: 6,
      imageMaxHeight: 600,
      imagesCount: 10,
    },
    {
      display: 'phone',
      sourceImageAspectRatio: '3/2',
      carouselImageAspectRatio: '4/3',
      thumbnailAspectRatio: '1/1',
      thumbsPerView: 4,
      imageMaxHeight: 400,
      imagesCount: 20,
    },
    {
      display: 'phone',
      sourceImageAspectRatio: '3/2',
      carouselImageAspectRatio: '3/2',
      thumbnailAspectRatio: '3/2',
      thumbsPerView: 3,
      imageMaxHeight: 300,
      imagesCount: 10,
    },
  ]

  let _lightTheme: boolean = false
  let _isLoading: boolean = true
  let _demoImages = demoCarousels.map((value) => {
    return getDemoImages(value.imagesCount, AspectRatio[value.sourceImageAspectRatio])
  })
  let _imagesLoadPromises = _demoImages.map((value, index) => fetch(value[index].imageSrc))

  onMount(async () => {
    await Promise.all(_imagesLoadPromises)
    _isLoading = false
  })

</script>


{#if _isLoading}
  <div class='flex flex-col justify-center items-center w-[100vw] h-[100vh] gap-1'>
    <h1 class='text-1xl'>please wait...</h1>
    <Loader size='60' unit='px' duration='1s' />
  </div>
{:else}
  <div class='p-6' data-theme={_lightTheme === true ? 'light' : 'black'}>
    <h1 class='mb-10 text-4xl font-extrabold text-center'>Slideshow Carousel with Svelte and Tailwind.css</h1>
    <div class='flex flex-row justify-center mb-10'>
      <label class='swap swap-rotate'>

        <!-- this hidden checkbox controls the state -->
        <input type='checkbox' bind:checked={_lightTheme} />

        <!-- sun icon -->
        <svg class='swap-off fill-current w-10 h-10'
             xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
          <path
            d='M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z' />
        </svg>

        <!-- moon icon -->
        <svg class='swap-on fill-current w-10 h-10'
             xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'
        >
          <path
            d='M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z' />
        </svg>

      </label>
    </div>
    <div class={`grid sm:grid-cols-2 grid-cols-1 gap-x-6 grid-rows-${demoCarousels.length} gap-y-10`}>
      {#each demoCarousels as carousel, index}
        {#if carousel.display === 'phone'}
          <div class='mockup-phone'>
            <div class='camera'></div>
            <div class='display'>
              <div class='artboard artboard-demo phone-1'>
                <ImageCarousel
                  images={_demoImages[index]}
                  {...carousel} />
              </div>
            </div>
          </div>
        {:else}
          <div class='mockup-window border bg-base-300 p-4'>
            <div class='flex-none md:flex md:justify-center '>
              <ImageCarousel images={_demoImages[index]}
                             {...carousel} />
            </div>
          </div>
        {/if}
        <CarouselStats stats={demoCarousels[index]} />
      {/each}
    </div>
  </div>
{/if}



