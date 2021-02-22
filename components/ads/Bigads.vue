<template>
  <div class="bg-e6e6e6 h-full w-full relative">
    <slider
      :index="index"
      :adslength="ads.length"
      @gowhere="goexact"
      @goindex="goindex"
    >
      <figure class="image h-full w-full">
        <img
          v-for="(img, i) in ads"
          :key="i"
          class="h-full hiddenmox w-full"
          :class="{ slide: index === i + 1 }"
          :src="img"
          alt="Placeholder image"
        /></figure
    ></slider>
  </div>
</template>

<script>
import Slider from '~/components/slider/Slider.vue'
export default {
  components: { Slider },
  data() {
    return {
      hasimage: true,
      index: 1,
      ads: ['/cover/gaming.jpg', '/cover/training.jpg', '/cover/home.jpg'],
    }
  },
  computed: {
    imaging() {
      return this.hasimage === true
    },
  },
  methods: {
    goexact(where) {
      this.hasimage = false
      if (where === 'left') {
        if (this.index <= 1) {
          this.index = this.ads.length
        } else this.index = this.index - 1
      } else if (where === 'right') {
        if (this.index >= this.ads.length) {
          this.index = 1
        } else this.index = this.index + 1
      }
      this.hasimage = true
    },
    goindex(value) {
      this.hasimage = false
      this.index = value
      this.hasimage = true
    },
  },
}
</script>

<style scoped>
.slide {
  display: block !important;
  animation: 1s appearZ;
}
</style>
