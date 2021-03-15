<template>
  <div class="w-full flex flex-col space-y-3">
    <div class="bg-white px-8 w-full border-t border-b py-2">
      <div class="flex align-center justify-between">
        <div class="flex flex-col space-y-0">
          <span class="size-13 font-semibold logo-color"
            >1-20 of 1 000 results for "<a
              href="#"
              class="underline-hover hover-004e66"
              >Mixeur Samsung</a
            >"</span
          >
        </div>
        <div class="flex align-center self-end rounded-full border px-2">
          <div class="flex space-x-4 px-3">
            <button
              class="no-outlines"
              :class="{ 'd-actlist': normal }"
              @mousedown="
                {
                  little = true
                }
              "
            >
              <span> <i class="fas fa-th-large color-bgs actlist"> </i></span>
            </button>
            <button
              class="no-outlines"
              :class="{ 'd-actlist': !normal }"
              @mousedown="
                {
                  little = false
                }
              "
            >
              <span> <i class="fas fa-th-list color-bgs actlist"> </i></span>
            </button>
          </div>
          <Articlesort />
        </div>
      </div>
    </div>
    <div class="relative w-full h-6">
      <Categoriesug />
    </div>
    <!-- <Carduct titles="Featured" /> -->
    <!-- <div
      class="w-full flex pt-1"
      :class="{
        'px-0': size > 1500,
        'px-6': size <= 1500,
      }"
    >
      <div class="bg-white rounded m-0-auto">
        <div class="flex align-center -mt-16">
          <div>
            <svg
              class="transform scale-50"
              width="512"
              height="512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <rect
                  id="canvas_background"
                  fill="none"
                  height="402"
                  width="582"
                  y="-1"
                  x="-1"
                />
              </g>
              <g>
                <path
                  id="svg_3"
                  stroke-width="9"
                  stroke-miterlimit="10"
                  stroke="#FFD21F"
                  fill="none"
                  d="m246,249.48c0,-20.516 20,-20.516 20,-41.032c0,-20.518 -20,-20.518 -20,-41.035c0,-20.517 20,-20.517 20,-41.033c0,-20.52 -20,-20.52 -20,-41.039s20,-20.52 20,-41.039"
                />
                <path
                  id="XMLID_29_"
                  fill="#FFD21F"
                  d="m436.33,320.923c0,99.592 -80.738,180.334 -180.332,180.334c-99.592,0 -180.328,-80.742 -180.328,-180.334c0,-99.591 80.736,-180.329 180.328,-180.329c99.594,0 180.332,80.738 180.332,180.329z"
                />
                <circle
                  id="XMLID_27_"
                  r="33.56"
                  fill="#FFD21F"
                  cy="44.302"
                  cx="256"
                />
                <path
                  id="svg_4"
                  fill="#ED1C24"
                  d="m213.392,443.306c0,-0.01 0,-0.02 0,-0.02c1.01,-3.891 2.529,-7.58 4.5,-10.98c2.398,-4.15 5.449,-7.869 9.029,-11.01c2.289,-2.02 4.789,-3.811 7.471,-5.32c6.379,-3.609 13.74,-5.67 21.59,-5.67c0.01,0 0.01,0 0.02,0s0.01,0 0.02,0c7.871,0 15.26,2.07 21.65,5.7c2.66,1.511 5.141,3.28 7.41,5.29c3.58,3.141 6.629,6.859 9.029,11.01c1.971,3.4 3.49,7.09 4.5,10.98c0,0 0,0.01 0,0.02c0.451,1.74 0.791,3.52 1.031,5.33c-1.15,0.65 -86.131,0.62 -87.281,-0.029c0.24,-1.801 0.579,-3.571 1.031,-5.301z"
                />
                <path
                  id="svg_5"
                  fill="#ED1C24"
                  d="m279.507,224.964c1,3.9 2.529,7.6 4.5,11c2.39,4.141 5.439,7.85 9,10.99c2.289,2.029 4.8,3.82 7.49,5.34c6.379,3.609 13.75,5.67 21.6,5.67c0.01,0 0.01,0 0.02,0s0.01,0 0.021,0c7.87,0 15.25,-2.07 21.64,-5.689c2.67,-1.521 5.17,-3.301 7.45,-5.32c3.56,-3.141 6.61,-6.85 9,-10.99c1.97,-3.4 3.5,-7.1 4.5,-11c0.91,3.51 1.39,7.189 1.39,10.98c0,3.799 -0.479,7.479 -1.39,11c0,0.01 0,0.02 0,0.02c-1.011,3.891 -2.53,7.58 -4.5,10.98c-2.399,4.149 -5.45,7.869 -9.03,11.01c-3.25,2.88 -6.93,5.27 -10.93,7.08c-3.891,1.77 -8.08,2.979 -12.48,3.55c-1.85,0.239 -3.75,0.36 -5.67,0.36s-3.82,-0.121 -5.67,-0.36c-4.38,-0.57 -8.55,-1.771 -12.43,-3.521c-4.02,-1.82 -7.721,-4.22 -10.98,-7.109c-3.58,-3.141 -6.629,-6.86 -9.029,-11.01c-1.971,-3.4 -3.49,-7.09 -4.5,-10.98c0,0 0,-0.01 0,-0.02c-0.91,-3.521 -1.391,-7.201 -1.391,-11c-0.002,-3.792 0.479,-7.471 1.389,-10.981z"
                />
                <path
                  id="svg_6"
                  fill="#ED1C24"
                  d="m147.391,224.964c1,3.9 2.529,7.6 4.5,11c2.39,4.141 5.439,7.85 9,10.99c2.289,2.029 4.8,3.82 7.49,5.34c6.379,3.609 13.75,5.67 21.6,5.67c0.01,0 0.01,0 0.02,0s0.01,0 0.021,0c7.87,0 15.25,-2.07 21.64,-5.689c2.67,-1.521 5.17,-3.301 7.45,-5.32c3.56,-3.141 6.61,-6.85 9,-10.99c1.97,-3.4 3.5,-7.1 4.5,-11c0.91,3.51 1.39,7.189 1.39,10.98c0,3.799 -0.479,7.479 -1.39,11c0,0.01 0,0.02 0,0.02c-1.011,3.891 -2.53,7.58 -4.5,10.98c-2.399,4.149 -5.45,7.869 -9.03,11.01c-3.25,2.88 -6.93,5.27 -10.93,7.08c-3.891,1.77 -8.08,2.979 -12.48,3.55c-1.85,0.239 -3.75,0.36 -5.67,0.36s-3.82,-0.121 -5.67,-0.36c-4.38,-0.57 -8.55,-1.771 -12.43,-3.521c-4.02,-1.82 -7.721,-4.22 -10.98,-7.109c-3.58,-3.141 -6.629,-6.86 -9.029,-11.01c-1.971,-3.4 -3.49,-7.09 -4.5,-10.98c0,0 0,-0.01 0,-0.02c-0.91,-3.521 -1.391,-7.201 -1.391,-11c-0.002,-3.792 0.478,-7.471 1.389,-10.981z"
                />
              </g>
            </svg>
          </div>
          <div class="flex -ml-32 pr-32 flex-col justify-center space-y-4">
            <span class="size-18"
              >Sorry, We can't find any item matching your search "Mixeur
              Samsung"</span
            >
            <a
              href="#"
              class="button btn-004e66 w-fit px-10 text-white rounded"
            >
              Continue Shopping</a
            >
          </div>
        </div>
      </div>
    </div> -->
    <div
      class="w-full h-fit flex space-x-4 pt-1"
      :class="{
        'px-0': size > 1500,
        'px-6': size <= 1500,
      }"
    >
      <div class="w180sst h-full relative">
        <div class="bg-white w180sst px-6 h-fit pb-2">
          <div class="border-b py-3">
            <Pricerangecateg />
          </div>
          <div class="border-b py-3">
            <Brand />
          </div>
          <div class="border-b py-3">
            <Discount />
          </div>
          <div class="border-b py-3">
            <Customreview />
          </div>
          <div class="border-b py-3">
            <Delivery />
          </div>
          <div class="border-b py-3">
            <Basecard
              :category="[
                'Red',
                'Blue',
                'Magenta',
                'Yellow',
                'White',
                'Black',
                'Gray',
                'Orange',
              ]"
              :title="'Color'"
            />
          </div>
          <div class="border-b py-3">
            <Basecard
              :category="['Windows', 'Linux', 'Android', 'IOS', 'Other']"
              :title="'Operating System'"
            />
          </div>
          <div class="border-b py-3">
            <Basecard
              :category="[
                '1 TB',
                '2 TB',
                '3 TB',
                '730 GB',
                '512 GB',
                '256 GB',
                '128 GB',
                '64 GB',
              ]"
              :title="'Storage'"
            />
          </div>
          <div class="border-b py-3">
            <Basecard :category="['Sata', 'SSD']" :title="'Hard Drive Type'" />
          </div>
          <div class="border-b py-3">
            <Basecard
              :category="[
                '128 GB',
                '64 GB',
                '1 GB',
                '2 GB',
                '3 GB',
                '4 GB',
                '12 GB',
                '16 GB',
              ]"
              :title="'RAM'"
            />
          </div>
          <div class="border-b py-3">
            <Basecard
              :category="['In stock', 'Coming Soon']"
              :title="'Availability'"
            />
          </div>
          <div class="border-b py-3">
            <Basecard
              :category="[
                '32 Inches',
                '32 Inches',
                '32 Inches',
                '32 Inches',
                '32 Inches',
                '32 Inches',
                '32 Inches',
                '32 Inches',
              ]"
              :title="'Screen'"
            />
          </div>
        </div>
        <div class="h-fit w-fit relative bottom-0">
          <div
            class="bg-white px-2 py-1 h-centers text-center w-64 h-full mt-10 mb-2 rounded"
          >
            <span class="font-semibold size-14">Top Recommendations</span>
          </div>
          <div class="w180sst h-full flex flex-col space-y-4">
            <div
              v-for="t in 5"
              :key="t"
              class="bg-white h-centers w-64xse h-fit rounded"
            >
              <Article class="w-64xs" />
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-full h-full flex flex-col space-y-5"
        :class="{ 'space-y-4': currentcateg.length !== 0 }"
      >
        <div class="flex flex-col">
          <div v-if="currentcateg.length !== 0" class="relative h-8 mt-3">
            <Mixcateg
              :current="currentcateg"
              @removeall="removeall"
              @remove="remove"
            />
          </div>
          <div
            class="bg-white w-full h-full flex pt-1 pb-2 border-t-2"
            :class="{ 'flex-wrap': normal, 'flex-col space-y-3': !normal }"
          >
            <Articles
              v-for="i in 52"
              :key="i"
              :little="normal"
              :class="{ 'column is-one-quarter px-0': normal }"
            />
          </div>
          <div class="mt-2 relative w-full">
            <Pagination />
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col space-y-5 pt-5"
      :class="{
        'px-0': size > 1500,
        'px-6': size <= 1500,
      }"
    >
      <Carduct titles="You may like" />
    </div>
  </div>
</template>

<script>
export default {
  asyncData({ params }) {
    // Object.keys($route.query)[0]
    // called every time before loading the component
    return {
      slug: params,
    }
  },
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
