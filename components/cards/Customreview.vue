<template>
  <div class="w-full">
    <div class="flex align-center justify-between">
      <span class="font-semibold size-15">Customer's Review</span>
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
    <div v-show="expanded" class="mt-3 appearyh">
      <div class="w-fit">
        <div
          v-if="hasselect"
          class="flex align-center clickable hover-004e66 w-fit mb-1"
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
          <span class="size-14 makeme-004e66">Any review</span>
        </div>
        <div class="flex flex-col space-y-1">
          <div
            class="flex align-center space-x-2 w-fit hover-004e66"
            :class="{
              hidden: current !== '' && current !== '4',
              block: current === '' || (current !== '' && current === '4'),
              'font-semibold color-004e66': mesub,
              clickable: !mesub,
            }"
            @click="select('4')"
          >
            <span class="size-14">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star color-6d6d6d"></span>
            </span>
            <span
              class="size-14"
              :class="{
                'color-004e66': mesub,
              }"
              >& Up</span
            >
          </div>
          <div
            class="flex align-center space-x-2 w-fit hover-004e66"
            :class="{
              hidden: current !== '' && current !== '3',
              block: current === '' || (current !== '' && current === '3'),
              'font-semibold color-004e66': mesub,
              clickable: !mesub,
            }"
            @click="select('3')"
          >
            <span class="size-14">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star color-6d6d6d"></span>
              <span class="fa fa-star color-6d6d6d"></span> </span
            ><span
              class="size-14"
              :class="{
                'color-004e66': mesub,
              }"
              >& Up</span
            >
          </div>
          <div
            class="flex align-center space-x-2 w-fit hover-004e66"
            :class="{
              hidden: current !== '' && current !== '2',
              block: current === '' || (current !== '' && current === '2'),
              'font-semibold color-004e66': mesub,
              clickable: !mesub,
            }"
            @click="select('2')"
          >
            <span class="size-14">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star color-6d6d6d"></span>
              <span class="fa fa-star color-6d6d6d"></span>
              <span class="fa fa-star color-6d6d6d"></span>
            </span>
            <span
              class="size-14"
              :class="{
                'color-004e66': mesub,
              }"
              >& Up</span
            >
          </div>
          <div
            class="flex align-center space-x-2 w-fit hover-004e66"
            :class="{
              hidden: current !== '' && current !== '1',
              block: current === '' || (current !== '' && current === '1'),
              'font-semibold color-004e66': mesub,
              clickable: !mesub,
            }"
            @click="select('1')"
          >
            <span class="size-14">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star color-6d6d6d"></span>
              <span class="fa fa-star color-6d6d6d"></span>
              <span class="fa fa-star color-6d6d6d"></span>
              <span class="fa fa-star color-6d6d6d"></span> </span
            ><span
              class="size-14"
              :class="{
                'color-004e66': mesub,
              }"
              >& Up</span
            >
          </div>
        </div>
        <div class="flex align-center space-x-2 mt-3">
          <label for="maxpricecateg" class="size-13">
            <span class="block mb-1">Stars Number</span>
            <input
              v-model="max"
              type="text"
              placeholder="0 to 5"
              class="border size-13 w-20 text-center py-1 no-outlines hover:shadow-sm"
            />
          </label>
          <div class="pl-2 self-end justify-end">
            <button class="btn-004e66 px-3 py-01x rounded no-outlines">
              <span class="text-white size-11 h-fit font-semibold">APPLY</span>
            </button>
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
