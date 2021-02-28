<template>
  <div class="d-spec relative border-t pt-1 bg-white">
    <div
      v-show="listing"
      class="absolute mt-8 left-0 px-8 z-20"
      @mouseleave="outlisting"
      @mouseover="inlistings"
    >
      <Afterlist :departement="categlist" />
    </div>
    <div class="d-spec size-125 relative font-semibold logo-color px-2">
      <nav>
        <ul
          class="nav-desc w-fit font-semibold flex align-center overflow-x-auto"
        >
          <li>
            <nuxt-link to="#" class="text-center anty">Today's deals</nuxt-link>
          </li>
          <li>
            <nuxt-link to="#" class="text-center anty">Best deals</nuxt-link>
          </li>
          <li>
            <nuxt-link to="#" class="text-center anty"
              >Top categories</nuxt-link
            >
          </li>
          <li class="h-full">
            <span class="text-center tiret">|</span>
          </li>
          <li>
            <nuxt-link to="#" class="text-center anty"
              >Food & Grocery</nuxt-link
            >
          </li>
          <li v-for="(categ, i) in category" :key="i">
            <nuxt-link
              v-if="categ !== ''"
              to="#"
              class="text-center over ant"
              @mouseleave.native="outlisting"
              @mouseover.native="inlisting(i)"
              >{{ categ }}</nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="#" class="text-center anty">DIY</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      lan: [
        'Computers & Electronics',
        'Phones',
        'Fashions',
        'Beauty & Health',
        '',
        'Toys',
        '',
        'Sports',
        '',
        '',
        'Automotive',
        '',
      ],
    }
  },
  computed: {
    categlist() {
      return this.$store.state.allcateg[this.index]
    },
    category() {
      return this.lan
    },
    listing() {
      return this.$store.state.afterlist === true
    },
    size() {
      return this.$store.state.size
    },
    scroll() {
      return this.$store.state.scroll
    },
  },
  methods: {
    outlisting() {
      this.$store.commit('SET_AFTERLIST_MOD', false)
    },
    inlisting(i) {
      this.$store.commit('SET_AFTERLIST_MOD', true)
      this.index = i
    },
    inlistings() {
      this.$store.commit('SET_AFTERLIST_MOD', true)
    },
  },
}
</script>

<style scoped></style>
