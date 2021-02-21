<template>
  <div class="flex space-x-3 h320">
    <div class="flex align-center space-x-3">
      <div v-for="j in nbrbig" :key="j" class="bg-white h320 w320">
        <div class="flex align-center space-x-2 vertical-center w-fit m-0-auto">
          <figure class="image is-40x40 rounded-full relative">
            <img
              class="is-40x40 rounded-full"
              src="/t.jpg"
              alt="Placeholder image"
            />
          </figure>
          <span class="size-13 font-semibold">{{ name }}</span>
        </div>
      </div>
    </div>
    <div class="flex self-start w-full flex-wrap">
      <div
        v-for="i in 6"
        :key="i"
        class="h160 bg-white column is-one-third border-4"
      ></div>
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
