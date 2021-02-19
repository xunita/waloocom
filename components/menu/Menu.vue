<template>
  <div class="flex h-full w-full fixed">
    <div
      class="w180ee relative h-full bg-white overflow-y-auto asider scrollnonemoz"
    >
      <div class="h-12 w-full bg-004e66">
        <Logosmen class="vertical-center m-0-auto" />
      </div>
      <Menucontent class="h-full" />
    </div>
    <div class="w-full relative h-full">
      <div class="w-full h-full bg-black-tr relative" @click="close"></div>

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
      <div class="">
        <Listingbig v-show="listing" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    listing() {
      return this.$store.state.listingbig === true
    },
  },
  methods: {
    close() {
      this.$store.commit('SET_MEN_MOD', false)
      document.body.style.overflow = 'visible'
    },
  },
}
</script>

<style scoped></style>
