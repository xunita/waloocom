<template>
  <div class="w-full flex flex-col space-y-3">
    <div class="bg-white px-8 w-full border-t border-b py-2">
      <div class="flex align-center justify-between">
        <div class="flex flex-col space-y-0">
          <div class="flex align-center pb-2">
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
          <span class="size-13 font-semibold logo-color"
            >1-20 of 1 000 results</span
          >
          <span class="size-16 font-semibold pt-1"
            >Computers & Electronics</span
          >
        </div>
        <div class="flex align-center self-end rounded-full border px-2">
          <div class="flex space-x-4 px-3">
            <button
              class="no-outlines"
              :class="{ 'd-actlist': normal }"
              @click="
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
              @click="
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
    <div
      class="w-full h-fit flex"
      :class="{
        'px-0': size > 1500,
        'px-6': size <= 1500,
      }"
    >
      <div class="w180sst h-full relative">
        <div class="bg-white w180sst px-6 h-fit pb-2">
          <div class="border-b py-3"><Categcard /></div>
          <div class="border-b py-3">
            <Mixcategcard
              :toremove="removed"
              @choiced="choiced"
              @welldone="welldone"
            />
          </div>
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
            class="bg-white px-2 py-1 text-center w-64 h-full mt-5 mb-2 rounded"
          >
            <span class="font-semibold size-14">Top Recommendations</span>
          </div>
          <div class="w180sst h-full flex flex-col space-y-4">
            <div v-for="t in 4" :key="t" class="bg-white w-64 h-fit rounded">
              <Article />
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-full h-full flex flex-col border-l-2"
        :class="{ 'space-y-4': currentcateg.length !== 0 }"
      >
        <Pricerange />
        <div v-if="currentcateg.length !== 0" class="relative h-5">
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
    <div
      class="flex flex-col space-y-5 pt-5"
      :class="{
        'px-0': size > 1500,
        'px-6': size <= 1500,
      }"
    >
      <Categfo />
      <Carduct titles="You may like" />
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
