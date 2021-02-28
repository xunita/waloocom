<template>
  <div
    class="h-full w-full z-40x bg-white border-l overflow-y-auto overflow-x-auto asider scrollnonemoz"
    @mouseleave="outlistingbig"
    @mouseover="inlistingbig"
  >
    <div class="w-full z-40x">
      <a class="clickable pb-1" :href="departement.link">
        <img
          class="h-12 w-full"
          :src="departement.image"
          alt="Placeholder image"
        />

        <h4 class="font-semibold pt-2 w-fit m-0-auto color-004e66 size-14">
          {{ departement.name }}
        </h4>
      </a>
      <div
        v-if="departement === undefined"
        class="flex py-15 px-6 space-x-10 pt-3 w-full m-0-auto"
      >
        Loading...
      </div>
      <div v-else class="flex py-15 px-6 space-x-10 pt-3 w-full m-0-auto">
        <Itemlist
          class="w-full"
          :parttwo="departement.two ? true : false"
          :list="departement.one"
        />
        <div v-if="departement.two" class="w-2 border-r"></div>
        <Itemlist
          v-if="departement.two"
          class="w-full"
          :list="departement.two"
        />
      </div>
    </div>
    <div class="w-full"></div>
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
