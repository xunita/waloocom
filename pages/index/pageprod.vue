<template>
  <div class="w-full flex flex-col space-y-3">
    <div class="bg-white px-8 w-full border-t border-b py-2">
      <div class="flex align-center justify-between">
        <div class="flex flex-col space-y-0">
          <div class="flex align-center pb-1">
            <a
              v-for="p in 4"
              :key="p"
              class="clickable flex align-center hover-004e66"
              :class="{
                clickable: p !== 4,
                'cursor-default color-004e66': p === 4,
              }"
            >
              <span
                class="size-12 font-semibold over maxwidth"
                :class="{
                  'makeme-004e66 ': p !== 4,
                  'color-004e66': p === 4,
                }"
                >Bags, Cases, Cover & Sleeves</span
              ><svg
                v-if="p !== 4"
                class="w-3 h-3 mt-1 logo-color cursor-default mx-px"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path></svg
            ></a>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-full h-fit flex"
      :class="{
        'px-0': size > 1500,
        'px-6': size <= 1500,
      }"
    >
      <div class="w-full h-fit bg-white px-6 py-4">
        <div class="flex pb-4">
          <div class="w-full">
            <div class="flex space-x-2">
              <div>
                <Pictures />
              </div>
              <Articledesc />
            </div>
            <div class="border-t border-b mt-6 mr-6">
              <Carductsame titles="From the same marketplace" />
            </div>
          </div>
          <div class="w180max border-l-2 pl-6">
            <Prodship />
          </div>
        </div>
        <Proddesc />
      </div>
    </div>
    <div class="px-6 flex flex-col space-y-5">
      <Carduct titles="You may like" />
      <Carduct titles="Recently Viewed" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      hidden: false,
      indexsub: 0,
      hiddensub: false,
      max: '',
      min: '',
      removed: 'nothing',
      little: true,
      current: [],
    }
  },
  computed: {
    currentcateg() {
      return this.current
    },
    normal() {
      return this.little === true
    },
    me() {
      return this.hidden === true
    },
    mesub() {
      return this.hiddensub === true
    },
    // hide(i) {
    //   return this.hidden === true && this.index !== i
    // },
    size() {
      return this.$store.state.size
    },
    scroll() {
      return this.$store.state.scroll
    },
  },
  methods: {
    choiced(value) {
      this.current = value
    },
    welldone() {
      this.removed = 'nothing'
    },
    removeall() {
      this.removed = 'all'
    },
    remove(value) {
      this.removed = value
    },
    extendme(i) {
      this.index = i
      this.hidden = true
    },
    reinit() {
      this.index = 0
      this.hidden = false
      this.indexsub = 0
      this.hiddensub = false
    },
    reinitsub() {
      this.indexsub = 0
      this.hiddensub = false
    },
    hide(i) {
      return this.hidden === true && this.index !== i
    },
    extendmesub(i) {
      this.indexsub = i
      this.hiddensub = true
    },
    hidesub(i) {
      return this.hiddensub === true && this.indexsub !== i
    },
  },
}
</script>

<style scoped>
.mtx {
  top: 4.5rem;
}
</style>
