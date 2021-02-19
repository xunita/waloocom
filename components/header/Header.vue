<template>
  <div class="header bg-white py-15">
    <nav class="flex align-center space-x-3">
      <div class="flex align-center space-x-3">
        <div class="flex align-center space-x-2"><Burger /> <Logos1 /></div>
        <Language v-show="haslang && size > 1184" />
      </div>
      <div class="w-full" :class="{ 'ml-4i': !haslang || size <= 1184 }">
        <Headersearch />
      </div>
      <div class="flex align-center space-x-3">
        <Rightheader :size="size" />
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      width: 99999,
      searching: false,
      lang: true,
    }
  },
  computed: {
    size() {
      return this.width
    },
    notsearch() {
      return this.searching === false
    },
    haslang() {
      return this.lang === true
    },
  },
  beforeMount() {
    // window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.large)
  },
  beforeDestroy() {
    // window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.large)
  },
  mounted() {
    this.large()
  },
  methods: {
    large() {
      this.width = window.innerWidth
    },
  },
}
</script>

<style scoped>
.header {
  min-width: min-content !important;
}
</style>
