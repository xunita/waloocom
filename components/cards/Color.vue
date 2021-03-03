<template>
  <div>
    <div class="flex align-center justify-between">
      <span class="font-semibold size-15">Color</span>
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
      <div v-if="id === null"></div>
      <div v-else class="flex flex-col space-y-2 w-full mt-3">
        <div class="mb-2">
          <label class="relative flex align-center">
            <input
              :id="'searchcategdd' + id"
              v-model="search"
              type="search"
              placeholder="Search a color"
              class="border border-gray-400 w-full no-outlines pl-2 pr-6 py-1 rounded size-145"
            />
            <svg
              class="w-5 h-5 absolute right-0 mr-1 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </label>
        </div>
        <div class="h-40max overflow-y-auto aside">
          <label
            v-for="(cat, i) in categ"
            :key="i"
            :for="'mix' + id + i"
            class="flex align-center container"
            ><span
              class="w-fit size-14 -mt-012x multichoice-categ"
              :class="{
                'font-semibold color-004e66': ischecked(cat),
              }"
              >{{ cat }}</span
            >
            <input
              :id="'mix' + id + i"
              v-model="checkedCateg"
              type="checkbox"
              :value="cat"
            />
            <span class="checkmark"></span>
          </label>
          <span v-if="categ.length === 0" class="size-14 h-centers oneline">
            No result for "{{ search }}"</span
          >
        </div>
        <!-- <input type="checkbox" class="clickable" />
          <span class="w-fit size-14">Computers & Electronics</span> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    toremove: {
      type: String,
      default: 'nothing',
    },
  },
  data() {
    return {
      index: 0,
      hidden: false,
      indexsub: 0,
      hiddensub: false,
      expand: true,
      id: null,
      checkedCateg: [],
      search: '',
      category: [
        'Nokia',
        'Samsung',
        'Philip',
        'Lenovo',
        'Asus',
        'Dell',
        'Xiaomi',
        'Htc',
      ],
    }
  },
  computed: {
    current() {
      return this.checkedCateg
    },
    categ() {
      return this.category.filter((x) =>
        x.toLowerCase().includes(this.search.toLowerCase())
      )
    },
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
  watch: {
    // whenever toremove changes, this function will run
    toremove(newcateg, oldcateg) {
      this.deletecateg(newcateg)
    },
  },
  mounted() {
    this.id = this._uid
  },
  methods: {
    deletecateg(value) {
      if (value === 'all') this.checkedCateg = []
      else if (value !== 'nothing')
        this.checkedCateg = this.checkedCateg.filter((x) => x !== value)
      this.$emit('welldone')
    },
    sendcateg() {
      this.$emit('choiced', this.current)
    },
    ischecked(value) {
      return this.checkedCateg.includes(value)
    },
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
