<template>
  <div class="py-2 relative w-full">
    <div class="w180t">
      <a
        v-for="(item, i) in lang"
        :key="i"
        class="dropdown-item px-5 clickable flex align-center justify-between"
        @mouseover="inlisting(i)"
        @mouseleave="outlisting"
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
      <a class="dropdown-item px-5 clickable flex align-center justify-between">
        <span class="size-13 font-medium logo-color">Other categories</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oldwidth: 9999,
      width: 9999,
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
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.large)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.large)
  },
  mounted() {
    this.large()
  },
  methods: {
    large() {
      this.oldwidth = this.width
      //   this.width = window.innerWidth
      //   const el = document.getElementById('listcateg')
      //   const elwidth = el.getBoundingClientRect().width
      //   if (this.width < 1500 && this.width > 1160) {
      //     if (this.oldwidth < this.width) {
      //       el.style.width =
      //         (elwidth + (this.width - this.oldwidth)).toString() + 'px'
      //     } else if (this.oldwidth > this.width) {
      //       el.style.width =
      //         (elwidth - (this.oldwidth - this.width)).toString() + 'px'
      //     }
      //   } else if (this.width <= 1160) {
      //     el.style.width = 847.84 + 'px'
      //   }
      //   console.log(el.getBoundingClientRect().width)
    },
    inlisting(i) {
      this.$store.commit('SET_LIST_MOD', true)
      this.$store.commit('SET_LISTBIG_CATEG', i)
    },
    sleep(milliseconds) {
      const date = Date.now()
      let currentDate = null
      do {
        currentDate = Date.now()
      } while (currentDate - date < milliseconds)
    },
    outlisting() {
      this.$store.commit('SET_LIST_MOD', false)
    },
  },
}
</script>

<style scoped>
#listcateg {
  width: 847px;
}
</style>
