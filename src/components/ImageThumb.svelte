<script lang='ts'>
  import { tailWindCSSAspectRatios } from '../data'

  export let width, src, alt, ref = undefined, ratio: keyof typeof tailWindCSSAspectRatios = '4/3'
</script>
<div on:click class={`grid ${tailWindCSSAspectRatios[ratio]}`} style={`min-width: ${width}px;`}
     bind:this={ref}>
  <button>
    <img
      on:load
      width='100%'
      height='100%'
      {src}
      {alt}
      class={`${tailWindCSSAspectRatios[ratio]} object-cover bg-black`}
    />
  </button>
</div>
