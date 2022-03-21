<script lang='ts'>
  export let thumbsContainerHeight: number, onPrevClick: (event: MouseEvent) => void,
    onNextClick: (event: MouseEvent) => void, showPrev: boolean, showNext: boolean

</script>

<nav>
  <button style={`top: ${thumbsContainerHeight / 2 - 16}px`} type='button'
          class={`absolute -left-0 top-[${thumbsContainerHeight / 2}] bg-white p-1 opacity-75`}
          on:click={onPrevClick}
          class:hidden={!showPrev}>
    <svg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' fill='none' viewBox='0 0 24 24'
         stroke='currentColor' stroke-width='2'>
      <path stroke-linecap='round' stroke-linejoin='round' d='M15 19l-7-7 7-7' />
    </svg>
  </button>
  <button style={`top: ${thumbsContainerHeight / 2 - 16}px`} type='button'
          class={`absolute right-0 bg-white p-1 opacity-75`} on:click={onNextClick}
          class:hidden={!showNext}>
    <svg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' fill='none' viewBox='0 0 24 24'
         stroke='currentColor' stroke-width='2'>
      <path stroke-linecap='round' stroke-linejoin='round' d='M9 5l7 7-7 7' />
    </svg>
  </button>
</nav>
