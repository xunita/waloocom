<template>
  <div
    id="listcateg"
    class="h-full bg-white lbig absolute border-l rounded-tr rounded-br top-0 z-20 overflow-y-auto overflow-x-auto asider scrollnonemoz"
    @mouseleave="outlistingbig"
    @mouseover="inlistingbig"
  >
    <figure class="image rounded-tr h-32x w-full">
      <img
        class="h-32x w-full rounded-tr"
        src="/computer.jpg"
        alt="Placeholder image"
      />
    </figure>
    <div class="w-full py-4 px-6">
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
    <div class="w-full"></div>
  </div>
</template>

<script>
export default {
  methods: {
    outlistingbig() {
      this.$store.commit('SET_LISTBIG_MOD', false)
    },
    inlistingbig() {
      this.$store.commit('SET_LISTBIG_MOD', true)
    },
  },
}
</script>

<style scoped>
.list {
  flex-flow: column !important;
  align-content: flex-start !important;
}
.lbig {
  min-width: 780px !important;
}
</style>
