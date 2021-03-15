<template>
  <div class="d-spec relative border-t pt-1 bg-white">
    <div class="d-spec size-125 relative font-semibold logo-color px-2">
      <nav class="m-0-auto">
        <ul class="nav-desc w-fit font-semibold flex align-center">
          <li>
            <nuxt-link
              to="#"
              class="text-center ant"
              :class="{
                'list-active':
                  curoute.includes('Today Deals') ||
                  curoute.includes('Today%20Deals'),
              }"
              >Today Deals</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="#"
              class="text-center ant"
              :class="{
                'list-active':
                  curoute.includes('Best Deals') ||
                  curoute.includes('Best%20Deals'),
              }"
              >Best Deals</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="#"
              class="text-center ant"
              :class="{ 'list-active': curoute.includes('Featured') }"
              >Featured</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="#"
              class="text-center ant"
              :class="{
                'list-active':
                  curoute.includes('Top Categories') ||
                  curoute.includes('Top%20Categories'),
              }"
              >Top Categories</nuxt-link
            >
          </li>

          <li class="h-full">
            <span class="text-center tiret">|</span>
          </li>
          <li>
            <nuxt-link to="#" class="text-center ant">Food & Grocery</nuxt-link>
          </li>
          <li v-for="(categ, i) in category" :key="i">
            <nuxt-link
              v-if="categ !== ''"
              to="#"
              class="text-center over ant"
              >{{ categ }}</nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="#" class="text-center ant">DIY</nuxt-link>
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
    curoute() {
      return this.$route.path
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
