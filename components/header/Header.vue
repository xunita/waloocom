<template>
  <!-- <div v-if="loading"></div> -->
  <div class="header bg-white py-15">
    <nav class="flex align-center space-x-5">
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
      searching: false,
      lang: true,
    }
  },
  computed: {
    size() {
      return this.$store.state.size
    },
    notsearch() {
      return this.searching === false
    },
    haslang() {
      return this.lang === true
    },
  },
}
</script>

<style scoped>
.header {
  min-width: min-content !important;
}
</style>
