<template>
  <div class="w-full">
    <div class="flex align-center justify-between">
      <span class="font-semibold size-15">Price</span>
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
    <div v-show="expanded" class="flex align-center space-x-2 mt-2 appearyh">
      <label for="minpricecateg" class="size-13">
        <span class="block mb-1">Min (ZAR)</span>
        <input
          v-model="min"
          placeholder="Min price"
          type="text"
          class="border size-13 w-18 text-center p-1 no-outlines hover:shadow-sm"
        />
      </label>
      <label for="maxpricecateg" class="size-13">
        <span class="block mb-1">Max (ZAR)</span>
        <input
          v-model="max"
          type="text"
          placeholder="Max price"
          class="border size-13 w-18 text-center p-1 no-outlines hover:shadow-sm"
        />
      </label>
      <div class="pl-2 self-end justify-end">
        <button class="btn-004e66 px-3 py-01x rounded no-outlines">
          <span class="text-white size-11 h-fit font-semibold">APPLY</span>
        </button>
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
      prices: [
        'Under 50 USD',
        '50 to 150 USD',
        '150 to 250 USD',
        '250 to 350 USD',
        '350 to 500 USD',
        '500 USD & Above',
      ],
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
