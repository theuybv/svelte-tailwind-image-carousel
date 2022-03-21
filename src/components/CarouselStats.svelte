<script lang='ts'>
  import type { DemoCarousel } from '../types'

  export let stats: DemoCarousel

</script>

<div class='stats stats-vertical lg:stats-horizontal shadow text-center sm:text-left'>

  <div class='stat'>
    <div class='stat-title'>sourceImageAspectRatio</div>
    <div class='stat-value'>{stats.sourceImageAspectRatio}</div>
  </div>

  <div class='stat'>
    <div class='stat-title'>carouselImageAspectRatio</div>
    <div class='stat-value'>{stats.carouselImageAspectRatio}</div>
  </div>

  <div class='stat'>
    <div class='stat-title'>thumbnailAspectRatio</div>
    <div class='stat-value'>{stats.thumbnailAspectRatio}</div>
  </div>

  <div class='stat'>
    <div class='stat-title'>thumbsPerView</div>
    <div class='stat-value'>{stats.thumbsPerView}</div>
  </div>


  <div class='stat'>
    <div class='stat-title'>imageMaxHeight</div>
    <div class='stat-value'>{stats.imageMaxHeight}</div>
  </div>

  <div class='stat'>
    <div class='stat-title'>imagesCount</div>
    <div class='stat-value'>{stats.imagesCount}</div>
  </div>



</div>
