<template>
  <div class="py-15 relative">
    <div class="flex align-center justify-between px-6 py-1 border-b">
      <h4 class="font-semibold logo-color size-14">Shop by category</h4>
    </div>
    <div class="w180ee border-b py-15">
      <a class="dropdown-item px-6 clickable flex align-center justify-between">
        <span class="size-125 font-medium logo-color">All categories</span>
      </a>
      <a
        v-for="(item, i) in lang"
        :key="i"
        class="dropdown-item px-6 clickable flex align-center justify-between"
        @mouseleave="outlistingbig"
        @mouseover="inlistingbig(i)"
      >
        <span class="size-125 font-medium logo-color">{{ item }}</span>
        <svg
          class="w-4 h-4 logo-color relative top-01x"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
      <a class="dropdown-item px-6 clickable flex align-center justify-between">
        <span class="size-125 font-medium logo-color">Other categories</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lan: [
        'Computers & Electronics',
        'Phones & Accessories',
        'Fashions & Jewellery',
        'Beauty & Health',
        'Gaming',
        'Baby, Kids & Toys',
        'Office & Books',
        'Sports',
        'Food & Grocery',
        'Home, Garden & Kitchen',
        'Automotive',
        'DIY',
      ],
    }
  },
  computed: {
    lang() {
      return this.lan
    },
  },
  methods: {
    outlistingbig() {
      this.$store.commit('SET_LISTBIG_MOD', false)
    },
    inlistingbig(i) {
      this.$store.commit('SET_LISTBIG_MOD', true)
      // this.$store.commit('SET_LISTBIG_CATEG', i)
      this.$emit('categdex', i)
    },
  },
}
</script>

<style scoped>
#listcateg {
  width: 847px;
}
</style>
