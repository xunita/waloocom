<template>
  <div class="h-full max1260 d-spec m-0-auto relative scroll-1400">
    <Menu v-show="modaled" class="z-40 appearxhx" />
    <Header
      class="sticky d-spec px-5 top-0 z-30"
      :class="{
        'my-shadow': scroll > 37,
      }"
    />
    <div class="d-spec">
      <Afterheader class="d-spec px-5" />
      <div class="p-1">
        <div>
          <div
            class="mt-2"
            :class="{
              'px-0': size > 1500,
              'px-6': size <= 1500,
            }"
          >
            <div class="w-full flex flex-col space-y-4">
              <div class="h449 w-full flex align-center">
                <div class="h-full relative"><Welcomemenu /></div>
                <div class="w-full h-full relative flex -ml-1">
                  <div class="w-full pl-4 pr-3 h-full relative"><Bigads /></div>
                  <Listing
                    v-show="listing"
                    :departement="computer"
                    :size="size"
                  />
                  <div class="h-full relative"><Adscateg /></div>
                </div>
              </div>
              <div class="w-full">
                <Squaresix />
              </div>
              <div>
                <div
                  class="bg-white px-4 pt-3 flex align-center justify-between"
                >
                  <h4 class="font-semibold size-16 logo-color">
                    Our best deals
                  </h4>
                  <button
                    class="z-10 bg-black-trs p-1 h-8 w-8-full no-outlines outline-none"
                  >
                    <svg
                      class="w-6 h-6 color-363636f"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                <Adspetit />
              </div>
              <div class="w-full">
                <Largeband />
              </div>
              <div class="w-full">
                <Square />
              </div>
              <!-- <div>
                <div
                  class="bg-white px-4 pt-3 flex align-center justify-between flex align-center justify-between"
                >
                  <h4 class="font-semibold size-16 logo-color">
                    Similar to your favorites list
                  </h4>
                  <button
                    class="z-10 bg-black-trs p-1 h-8 w-8-full no-outlines outline-none"
                  >
                    <svg
                      class="w-6 h-6 color-363636f"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                <Adspetit />
              </div> -->
              <div>
                <div
                  class="bg-white px-4 pt-3 flex align-center justify-between"
                >
                  <h4 class="font-semibold size-16 logo-color">
                    Our trending products
                  </h4>
                  <button
                    class="z-10 bg-black-trs p-1 h-8 w-8-full no-outlines outline-none"
                  >
                    <svg
                      class="w-6 h-6 color-363636f"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                <Adspetit />
              </div>
              <div class="w-full">
                <Twoband />
              </div>
              <div class="w-full">
                <Two />
              </div>
              <!-- <div>
                <div
                  class="bg-white px-4 pt-3 flex align-center justify-between"
                >
                  <h4 class="font-semibold size-16 logo-color">
                    Because you searched "Iphone"
                  </h4>
                  <button
                    class="z-10 bg-black-trs p-1 h-8 w-8-full no-outlines outline-none"
                  >
                    <svg
                      class="w-6 h-6 color-363636f"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                <Adspetit />
              </div> -->
              <!-- <div>
                <div
                  class="bg-white px-4 pt-3 flex align-center justify-between"
                >
                  <h4 class="font-semibold size-16 logo-color">
                    From the same category
                  </h4>
                  <button
                    class="z-10 bg-black-trs p-1 h-8 w-8-full no-outlines outline-none"
                  >
                    <svg
                      class="w-6 h-6 color-363636f"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                <Adspetit />
              </div> -->
              <!-- <div>
                <div
                  class="bg-white px-4 pt-3 flex align-center justify-between"
                >
                  <h4 class="font-semibold size-16 logo-color">You may like</h4>
                </div>
                <Adspetit />
              </div> -->
              <div>
                <div
                  class="bg-white px-4 pt-3 flex align-center justify-between"
                >
                  <h4 class="font-semibold size-16 logo-color">
                    Our recommendations
                  </h4>
                  <button
                    class="z-10 bg-black-trs p-1 h-8 w-8-full no-outlines outline-none"
                  >
                    <svg
                      class="w-6 h-6 color-363636f"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                <Adspetit />
              </div>
              <div class="bg-white h-fit">
                <div
                  class="bg-white px-4 pt-3 flex align-center justify-between"
                >
                  <h4 class="font-semibold size-16 logo-color">
                    All the categories
                  </h4>
                  <button
                    class="z-10 bg-black-trs p-1 h-8 w-8-full no-outlines outline-none"
                  >
                    <svg
                      class="w-6 h-6 color-363636f"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                <Categorielist :size="size" />
              </div>
              <div>
                <div
                  class="bg-white px-4 pt-3 flex align-center justify-between"
                >
                  <h4 class="font-semibold size-16 logo-color">
                    Recently viewed
                  </h4>
                  <button
                    class="z-10 bg-black-trs p-1 h-8 w-8-full no-outlines outline-none"
                  >
                    <svg
                      class="w-6 h-6 color-363636f"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                <Adspetit />
              </div>
              <div>
                <Brandlogo />
              </div>
              <div>
                <Walootour />
              </div>
              <div>
                <Waloofo />
              </div>
              <!-- <div>
                <div class="bg-white px-6 pt-3">
                  <h4 class="font-semibold size-16 logo-color">
                    Waloo recommendations
                  </h4>
                </div>
                <Ads />
              </div>
              <div class="pb-10"><Transi /></div> -->
            </div>
          </div>
        </div>
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
            class="w-6 h-6 transform rotate-180 color-004e66 relative"
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
</template>

<script>
import Square from '~/components/list/Square.vue'
export default {
  components: { Square },
  data() {
    return {
      width: 99999,
      scrollsize: 0,
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
    computer() {
      return this.$store.state.computer
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
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.large)
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
