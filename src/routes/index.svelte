<script lang="ts">
    import ImageCarousel from '../components/ImageCarousel.svelte';
    import {AspectRatio, type CarouselImage, getDemoImages, tailWindCSSAspectRatios} from "../data";
    import {onMount} from "svelte";
    import {Circle3 as Loader} from "svelte-loading-spinners";

    let demoImages: CarouselImage[] = []
    $: isLoading = demoImages.length <= 0
    const imagesCount = 10
    const ratio = '3/2'
    const sourceImageAspectRatio: AspectRatio = AspectRatio[ratio];

    const demoCarousels = [
        {
            sourceImageAspectRatio: ratio,
            carouselImageAspectRatio: '3/2',
            thumbnailAspectRatio: '4/3',
            thumbsPerView: 6,
            imageMaxHeight: 600,
            imagesCount,
        },
        {
            sourceImageAspectRatio: ratio,
            carouselImageAspectRatio: '4/3',
            thumbnailAspectRatio: '1/1',
            thumbsPerView: 4,
            imageMaxHeight: 400,
            imagesCount,
        },
        {
            sourceImageAspectRatio: ratio,
            carouselImageAspectRatio: '1/1',
            thumbnailAspectRatio: '3/2',
            thumbsPerView: 2,
            imageMaxHeight: 200,
            imagesCount,
        }
    ]


    onMount(async () => {
        demoImages = await Promise.all(getDemoImages(imagesCount, sourceImageAspectRatio));
        console.log(demoImages)
    })
</script>


{#if isLoading}
    <div class="flex flex-col justify-center items-center w-[100vw] h-[100vh] gap-1">
        <h1 class="text-1xl">please wait...</h1>
        <Loader size="60" color="#FF3E00" unit="px" duration="1s"/>
    </div>
{:else}
    <div class="container mx-auto px-4 sm:px-0 pt-4 pb-10">
        <h1 class="text-4xl mb-10 text-center">Slideshow Carousel with Svelte</h1>
        <div class="flex flex-col gap-6">
            {#each demoCarousels as carousel, index}
                <div class="flex flex-row gap-4 items-center">
                    <ImageCarousel images={demoImages} {...carousel}/>
                    <pre><code class="text-base">{JSON.stringify(carousel, null, 2)}</code></pre>
                </div>
            {/each}
        </div>
    </div>
{/if}



