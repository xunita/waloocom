<template>
  <div class="flex h-full max1260s fixed">
    <div
      class="w180ee z-5000 relative h-full bg-white overflow-y-auto asider scrollnonemoz"
    >
      <div class="h-12 w-full bg-004e66">
        <Logosmen class="vertical-center m-0-auto" />
      </div>
      <Menucontent class="h-full" @categdex="categdex" />
    </div>
    <div class="w-full relative h-full z-30">
      <div class="absolute top-0 left-0 ml-4 mt-2 z-30x">
        <button class="bg-transparent no-outlines outline-none" @click="close">
          <svg
            class="w-8 h-8 color-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </button>
      </div>
      <div class="relative h-full">
        <div
          v-show="!listing"
          class="bg-black-tr h-full max1220s"
          @click="close"
        ></div>
        <Listingbig v-show="listing" :departement="categ" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
    }
  },
  computed: {
    categ() {
      return this.$store.state.allcateg[this.index]
    },
    listing() {
      return this.$store.state.listingbig === true
    },
  },
  methods: {
    close() {
      this.$store.commit('SET_MEN_MOD', false)
      document.body.style.overflow = 'visible'
    },
    categdex(i) {
      this.index = i
    },
  },
}
</script>

<style scoped></style>
