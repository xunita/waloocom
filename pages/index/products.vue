<template>
  <div class="w-full">
    <div class="bg-white px-8 w-full border-t border-b py-2">
      <div class="flex align-center justify-between">
        <div class="flex flex-col space-y-0">
          <span class="size-13 font-semibold logo-color"
            >1-20 of 1 000 results</span
          >
          <span class="size-16 font-semibold pt-1"
            >Computers & Electronics</span
          >
        </div>
        <div class="flex align-center self-end">
          <span class="size-13 logo-color">Sort by:</span> <Language />
        </div>
      </div>
    </div>
    <div
      class="w-full relative mt-3 flex space-x-3"
      :class="{
        'px-0': size > 1500,
        'px-6': size <= 1500,
      }"
    >
      <div class="w180sst">
        <div class="bg-white w180sst px-6">
          <div v-for="y in 4" :key="y" class="border-b py-4"><Categcard /></div>
          <!-- <div class="border-b py-5"></div> -->
        </div>
      </div>
      <div class="bg-white h449 w-full"></div>
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
    }
  },
  computed: {
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
