<template>
  <div>
    <div v-show="loading"></div>
    <div
      v-show="!loading"
      class="h-full max1260 d-spec m-0-auto relative scroll-1400"
    >
      <Menu v-show="modaled" class="z-40 appearxhx" />
      <Header
        class="sticky d-spec px-5 top-0 z-30"
        :class="{
          'my-shadow': scroll > 37,
        }"
      />
      <div class="d-spec">
        <Afterheader class="d-spec px-5" />

        <div class="w-full flex flex-col space-y-4">
          <nuxt-child />
        </div>
        <div
          v-show="scroll > 728"
          class="sticky appearyh pos-right right-0 bottom-0 h-fit w-fit z-30 goright pr-2 pb-16 pt-5"
        >
          <button
            class="button bg-white rounded-full shadow h-11 w-11-full no-outlines outline-none gotop"
            @click="scrolltop"
          >
            <svg
              class="w-5 h-5 transform rotate-180 color-004e66 relative"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <Footer class="mt-16" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      width: 1500,
      scrollsize: 0,
      load: true,
      brand: [
        'Waloo Pay',
        'Waloo help',
        'Waloo partners',
        'Best deals',
        'Top categories',
        'Marketplace',
      ],
      brands: [
        'Waloo Pay',
        'Waloo help',
        'Sell on Waloo',
        'Best deals',
        'Top categories',
      ],
    }
  },
  computed: {
    loading() {
      return this.$store.state.pageload === true
    },
    modaled() {
      return this.$store.state.modalmenu === true
    },
    listing() {
      return this.$store.state.listing === true
    },
    size() {
      return this.width
    },
    scroll() {
      return this.scrollsize
    },
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.large)
    document.addEventListener('DOMContentLoaded', this.hidecontent, false)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.large)
    document.removeEventListener('DOMContentLoaded', this.hidecontent, false)
  },
  mounted() {
    this.large()
    this.handleScroll()
  },
  methods: {
    scrolltop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    },
    hidecontent() {
      this.$store.commit('SET_LOAD', false)
    },
    large() {
      this.width = window.innerWidth
      this.$store.commit('SET_RESIZE', window.innerWidth)
    },
    outlisting() {
      this.$store.commit('SET_LIST_MOD', false)
    },
    handleScroll() {
      this.scrollsize = window.scrollY
      this.$store.commit('SET_SCROLL', window.scrollY)
    },
  },
}
</script>

<style scoped></style>
