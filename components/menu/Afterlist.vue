<template>
  <div
    class="h-full bg-color-white border-2 w-full px-8"
    @mouseleave="outlisting"
    @mouseover="inlisting"
  >
    <div class="w-full flex">
      <div class="w-full py-4">
        <a class="clickable flex align-center justify-between pb-1 border-b">
          <h4 class="font-semibold w-fit m-0-auto color-004e66 size-13">
            Computers & Electronics
          </h4>
        </a>
        <div class="flex space-x-10 pt-3 w-full m-0-auto">
          <Itemlist />
          <Itemlist class="border-l pl-5" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
