<template>
  <div class="bg-color-008489 h-full w-full relative rounded">
    <slider>
      <figure class="image rounded h-full w-full">
        <img
          class="h-full w-full rounded"
          src="/t.jpg"
          alt="Placeholder image"
        /></figure
    ></slider>
  </div>
</template>

<script>
import Slider from '~/components/slider/Slider.vue'
export default { components: { Slider } }
</script>

<style scoped></style>
