<template>
  <div>
    <div class="flex align-center justify-between">
      <span class="font-semibold size-15">Category</span>
      <button
        class="border p-1 rounded bg-white no-outlines"
        @click="tryingexpand"
      >
        <svg
          v-if="!expanded"
          class="w-4 h-4 logo-color"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
        <svg
          v-else
          class="w-4 h-4 logo-color"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20 12H4"
          ></path>
        </svg>
      </button>
    </div>
    <div v-show="expanded" class="mt-1 appearyh">
      <div
        class="flex align-center w-fit"
        :class="{ clickable: me }"
        @click="reinit"
      >
        <svg
          v-show="me"
          class="w-4 h-4 logo-color"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
        <span
          class="size-14"
          :class="{
            'color-004e66 font-semibold': !me && !mesub,
            'normalfont hover-004e66': me || mesub,
          }"
          >Computers & Electronics</span
        >
      </div>
      <div class="px-3">
        <div
          v-for="i in 12"
          :key="i"
          class="w-fit size-14"
          :class="{ hidden: hide(i), block: !hide(i) }"
          @click="extendme(i)"
        >
          <div
            class="flex align-center w-fit"
            :class="{ clickable: mesub || !me }"
            @click="reinitsub"
          >
            <svg
              v-show="mesub"
              class="w-4 h-4 logo-color"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span
              class="size-14 block hover-004e66"
              :class="{ 'font-semibold color-004e66': me && !mesub }"
              >Bags, Cases, Cover & Sleeves{{ i }}</span
            >
          </div>
          <div v-show="me" class="px-3">
            <a
              v-for="j in 6"
              :key="j"
              class="hover-004e66 w-fit size-14"
              :class="{
                hidden: hidesub(j),
                block: !hidesub(j),
                'font-semibold color-004e66': mesub,
                clickable: !mesub,
              }"
              @click="extendmesub(j)"
              >Chargers & Power Bank{{ j }}</a
            >
          </div>
        </div>
      </div>
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
      expand: true,
    }
  },
  computed: {
    expanded() {
      return this.expand === true
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
    tryingexpand() {
      this.expand = !this.expand
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

<style scoped></style>
