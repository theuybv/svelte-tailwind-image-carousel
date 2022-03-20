<script lang="ts">
    import {onMount, tick} from 'svelte';
    import ImageThumb from './ImageThumb.svelte';
    import {intersectRect} from "../utils";
    import type {CarouselImage} from "../data";
    import {tailWindCSSAspectRatios} from "../data";
    import {fade} from 'svelte/transition';
    import {sineIn} from "svelte/easing";


    export let images: CarouselImage[] = [], imageAspectRatio: keyof typeof tailWindCSSAspectRatios = "3/2",
        thumbnailAspectRatio: keyof typeof tailWindCSSAspectRatios = "4/3", thumbsPerView: number = 6,
        imageMaxHeight = 400

    let _imageContainer: HTMLElement;
    let _imageContainerWidth: number
    let _thumbElements: {
        index: number,
        element: HTMLElement,
        isInView: boolean
    }[] = []
    let _thumbElementsInView: typeof _thumbElements = []
    let _thumbElementsNotInView: typeof _thumbElements = []
    let _thumbsContainer: HTMLElement
    let _thumbsContainerHeight: number
    let _imageThumbs: HTMLElement[] = []

    const checkAndUpdateThumbsInOutView = () => {
        _thumbElements = _imageThumbs.map((imageThumb, index) => {
            return {
                index,
                element: imageThumb,
                isInView: intersectRect(
                    imageThumb,
                    _thumbsContainer
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
        const nextInToView = lastInView && _thumbElements[lastInView.index + 1];
        const prevInToView = firstInView && _thumbElements[firstInView.index - 1];
        return {
            lastInView,
            firstInView,
            nextInToView,
            prevInToView
        }
    }

    let _showPrev
    let _showNext

    $: currentImage = images[0]
    $: imageContainerWidth = _imageContainerWidth
    $: thumbWidth = imageContainerWidth / thumbsPerView - 6.7

    let updateNav = (_event: HTMLElement) => {
        const {prevInToView, nextInToView} = getThumbsIterator()
        _showPrev = prevInToView !== undefined
        _showNext = nextInToView !== undefined
    }


    let onResize = (_event: HTMLElement) => {
        _imageContainerWidth = _imageContainer.offsetWidth
    }
    onMount(async () => {

        _imageContainerWidth = _imageContainer.offsetWidth

        await tick()
        checkAndUpdateThumbsInOutView()
        const {prevInToView} = getThumbsIterator()
        _showNext = thumbsPerView < images.length
        _showPrev = prevInToView !== undefined

    });


    const onNextClick = async (e) => {
        e.stopPropagation()
        const {nextInToView} = getThumbsIterator()
        if (nextInToView) {
            _thumbsContainer.scrollTo({
                left: _thumbsContainer.scrollLeft + nextInToView.element.offsetWidth + 8,
                behavior: "smooth"
            })
        }
    }

    const onPrevClick = (e) => {
        e.stopPropagation()
        const {prevInToView} = getThumbsIterator()

        if (prevInToView) {
            _thumbsContainer.scrollTo({
                left: _thumbsContainer.scrollLeft - prevInToView.element.offsetWidth - 8,
                behavior: "smooth"
            })
        }
    }

    const onImageThumbClick = (e, index) => {
        e.stopPropagation()
        const {lastInView, nextInToView, prevInToView, firstInView} = getThumbsIterator()

        if (lastInView.element === e.currentTarget && nextInToView) {
            _thumbsContainer.scrollTo({
                left: _thumbsContainer.scrollLeft + nextInToView.element.offsetWidth + 8,
                behavior: "smooth"
            })
        } else if (firstInView.element === e.currentTarget && prevInToView) {
            _thumbsContainer.scrollTo({
                left: _thumbsContainer.scrollLeft - prevInToView.element.offsetWidth - 8,
                behavior: "smooth"
            })
        }
        currentImage = {
            ...images[index]
        }
    }
</script>

<svelte:window on:resize={onResize}/>
<section class="flex flex-col gap-2">
    <div style={`max-height: ${imageMaxHeight}px`} class={`${tailWindCSSAspectRatios[imageAspectRatio]}`}
         bind:this={_imageContainer}>
        {#key currentImage.imageSrc}
            <img in:fade={{delay: 10, duration: 150, easing: sineIn}}
                 on:load={() => _imageContainerWidth = _imageContainer.offsetWidth}
                 width="100%"
                 height="100%"
                 src={currentImage.imageSrc}
                 alt={currentImage.alt}
                 class={`${tailWindCSSAspectRatios[imageAspectRatio]} object-contain bg-black`}
            />
        {/key}
    </div>
    <div class="relative">
        <nav class="px-2">
            <button style={`top: ${_thumbsContainerHeight / 2 - 16}px`} type="button"
                    class={`absolute -left-0 top-[${_thumbsContainerHeight / 2}] bg-white p-1 opacity-75`} on:click={onPrevClick}
                    class:hidden={!_showPrev}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
                </svg>
            </button>
            <button style={`top: ${_thumbsContainerHeight / 2 - 16}px`} type="button"
                    class={`absolute right-0 bg-white p-1 opacity-75`} on:click={onNextClick}
                    class:hidden={!_showNext}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
                </svg>
            </button>
        </nav>
        <section on:scroll={updateNav} style={`max-width: ${imageContainerWidth}px;`}
                 class="flex flex-row gap-x-2 overflow-hidden "
                 bind:this={_thumbsContainer} bind:offsetHeight={_thumbsContainerHeight}>


            {#each images as {imageSrc, thumbSrc, alt}, index (thumbSrc)}
                <ImageThumb on:click={(e) =>  onImageThumbClick(e, index)} bind:ref={_imageThumbs[index]}
                            width={thumbWidth}
                            src={thumbSrc} {alt} ratio={thumbnailAspectRatio}/>
            {/each}
        </section>
    </div>
</section>
