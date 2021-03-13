<template>
  <div>
    <div v-show="loading"></div>
    <div
      v-show="!loading"
      class="h-full max1260 d-spec m-0-auto relative scroll-1400"
    >
      <Imgmodal v-if="imgmod" :imgs="imgs" />
      <Menu v-show="modaled" class="z-50 appearxhx" />
      <Header
        class="sticky d-spec px-5 top-0 z-40"
        :class="{
          'my-shadow': scroll > 37,
        }"
      />
      <div class="d-spec">
        <Afterheader class="d-spec px-5" />
        <nuxt-child />
        <div
          v-show="scroll > 728"
          class="sticky h-fits w-fit appearyh bottom-0x z-30 pb-16 pt-2 pr-4 pos-right"
        >
          <button
            class="button bg-white absolute rounded-full shadow h-11 w-11 no-outlines relative right-0 gotop"
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
      <div class="clear-both"><Footer /></div>
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
    imgs() {
      return this.$store.state.imgs
    },
    imgmod() {
      return this.$store.state.imgmodal === true
    },
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
