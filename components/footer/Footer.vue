<template>
  <div class="header py-5 bglogo-color">
    <div>
      <nav
        class="flex w-full align-center justify-between border-b pb-5"
        :class="{
          'px-6': size <= 1097,
          'px-12': size > 1097 && size < 1500,
          'px-6 ': size >= 1500,
        }"
      >
        <div class="w-full">
          <span class="text-white block font-semibold size-15"
            >Subscribe to our Newsletter</span
          >
          <span class="text-white block size-125 mt-1"
            >Subscribe to not miss new products and the best offers from
            Waloo.</span
          >
          <div class="mt-2 putmax h-10 flex align-center space-x-2">
            <input
              class="w-full h-10 rounded size-16 outline-none px-2 bg-white font-normal"
              type="text"
              placeholder="Email adress"
            />
            <span class="h-full w-full"
              ><button
                class="btn-004e66 h-full w-ful flex align-center no-outlines space-x-2 px-12 rounded text-white"
              >
                <span class="size-12 block font-medium">Subscribe</span>
              </button></span
            >
          </div>
        </div>
        <div class="w-full pr-5">
          <div class="pos-right flex flex-col">
            <Logofoot class="self-end" />
            <div class="flex flex-col space-y-1 mt-2">
              <p class="text-white used-on size-14 self-end mb-1">
                Connect with us
              </p>
              <p class="flex align-center space-x-2 used-img">
                <img src="/social/tiktok.png" alt="" /><img
                  src="/social/fb.png"
                  alt=""
                />
                <img src="/social/insta.png" alt="" />
                <img src="/social/tiktok.png" alt="" /><img
                  src="/social/fb.png"
                  alt=""
                />
              </p>
            </div>
          </div>
        </div>
      </nav>
      <nav
        class="flex align-center mt-3 justify-around"
        :class="{
          'px-6': size <= 1097,
          'px-12': size > 1097 && size < 1500,
          'px-6 ': size >= 1500,
        }"
      >
        <div v-for="i in 6" :key="i">
          <span class="block size-18 text-white font-semibold py-2"
            >About Waloo</span
          >
          <div class="flex flex-col">
            <a
              v-for="j in 5"
              :key="j"
              class="clickable w-fit size-14 text-white"
              >Contact us</a
            >
          </div>
        </div>
      </nav>
      <div class="flex align-center mt-5 justify-between">
        <div class="w-full h-1 border-b"></div>
        <div class="w-fit mx-2 flex align-center space-x-1 size-14 text-white">
          <span>{{ toyear }}</span>
          <span>•</span>
          <span>Waloo.com</span>
        </div>
        <div class="w-full h-1 border-b"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      width: 99999,
      searching: false,
      lang: true,
    }
  },
  computed: {
    size() {
      return this.width
    },
    notsearch() {
      return this.searching === false
    },
    haslang() {
      return this.lang === true
    },
    toyear() {
      return new Date().getFullYear().toString()
    },
  },
  beforeMount() {
    // window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.large)
  },
  beforeDestroy() {
    // window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.large)
  },
  mounted() {
    this.large()
  },
  methods: {
    large() {
      this.width = window.innerWidth
    },
  },
}
</script>
<style scoped>
.putmax {
  width: 750px !important;
}
.header {
  min-width: min-content !important;
}
</style>
