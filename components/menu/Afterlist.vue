<template>
  <div
    class="h-full bg-color-white border-2 px-8"
    @mouseleave="outlisting"
    @mouseover="inlisting"
  >
    <div class="w-full h-full">
      <div class="flex space-x-10 py-3 w-full h-full">
        <Itemlist class="w-full" :list="departement.one" />
        <div class="w-2 border-r"></div>
        <Itemlist class="w-full" :list="departement.two" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    departement: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    outlisting() {
      this.$store.commit('SET_AFTERLIST_MOD', false)
    },
    inlisting() {
      this.$store.commit('SET_AFTERLIST_MOD', true)
    },
  },
}
</script>

<style scoped>
.list {
  flex-flow: column !important;
  align-content: flex-start !important;
}
</style>
