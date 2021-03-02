<template>
  <div class="w-full">
    <div class="flex align-center justify-between">
      <span class="font-semibold size-15">Discount</span>
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
    <div v-show="expanded" class="mt-2 appearyh">
      <div class="w-fit">
        <div
          v-if="hasselect"
          class="flex align-center clickable mb-1 hover-004e66 w-fit"
          @click="notselect"
        >
          <svg
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
          <span class="size-14 makeme-004e66">Any price</span>
        </div>
        <div>
          <a
            v-for="(price, j) in prices"
            :key="j"
            class="hover-004e66 block w-fit size-14 mb4px"
            :class="{
              hidden: current !== '' && price !== current,
              block: current === '' || (current !== '' && price === current),
              'font-semibold color-004e66 ml-2': mesub,
              clickable: !mesub,
            }"
            @click="select(price)"
            >{{ price }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      max: '',
      selected: false,
      min: '',
      current: '',
      expand: true,
      hiddensub: false,
      prices: ['70% & Up', '50% & Up', '30% & Up', '20% & Up', '10% & Up'],
    }
  },
  computed: {
    expanded() {
      return this.expand === true
    },
    mesub() {
      return this.hiddensub === true
    },
    hasselect() {
      return this.selected === true
    },
  },
  methods: {
    notselect() {
      this.selected = false
      this.hiddensub = false
      this.current = ''
    },
    select(value) {
      this.selected = true
      this.hiddensub = true
      this.current = value
    },
    tryingexpand() {
      this.expand = !this.expand
    },
    hidesub(value) {
      return this.prices.includes(value)
    },
  },
}
</script>

<style scoped></style>
