<template>
  <div class="w-full flex flex-col space-y-3">
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
      <div class="w180sst h-full">
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
            <Discount />
          </div>
          <div class="border-b py-3">
            <Delivery />
          </div>
          <div class="border-b py-3">
            <Customreview />
          </div>
        </div>
        <div
          class="bg-white px-2 py-1 text-center w-56 h-full mt-5 mb-2 both-centers rounded"
        >
          <span class="font-semibold size-14">Top Recommendations</span>
        </div>
        <div class="w180sst h-full flex flex-col space-y-4">
          <div class="bg-white w-56 h-full both-centers rounded p-1">
            <Article />
          </div>
          <div class="bg-white w-56 h-full both-centers rounded p-1">
            <Article />
          </div>
          <div class="bg-white w-56 h-full both-centers rounded p-1">
            <Article />
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
            v-for="i in 23"
            :key="i"
            :little="normal"
            :class="{ 'column is-one-quarter px-0': normal }"
          />
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
