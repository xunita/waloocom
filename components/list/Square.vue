<template>
  <div class="h320">
    <div
      class="flex align-center space-x-3 m-0-auto"
      :class="{ 'w-fit': size > 1310 }"
    >
      <div
        v-for="i in 4"
        :key="i"
        class="bg-white h320 px-6"
        :class="{ w320: size > 1310, 'w-full': size <= 1310 }"
      >
        <div class="flex flex-col space-y-2 vertical-center">
          <span class="size-15 font-semibold">Fashion style</span>
          <img
            class="w-full h-full"
            src="/cover/fashion.jpg"
            alt="Placeholder image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Marketplace',
    },
  },
  computed: {
    size() {
      return this.$store.state.size
    },
    nbr() {
      if (this.size <= 1310) return 4
      else return 6
    },
    nbrbig() {
      if (this.size <= 1310) return 1
      else return 2
    },
  },
}
</script>

<style scoped></style>
