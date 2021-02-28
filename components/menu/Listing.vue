<template>
  <div
    id="listcateg"
    class="h-full bg-white listfull flex-shrink absolute min-w-full top-0 z-20"
    @mouseleave="outlisting"
    @mouseover="inlisting"
  >
    <div class="w-full flex space-x-10">
      <div
        class="w-full"
        :class="{ 'px-0': size > 1366, 'px-6': size <= 1366 }"
      >
        <div
          class="flex space-x-10 pt-3 w-full m-0-auto"
          :class="{ 'pl-5': size > 1366 }"
        >
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
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 99999,
    },
    departement: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    outlisting() {
      this.$store.commit('SET_LIST_MOD', false)
    },
    inlisting() {
      this.$store.commit('SET_LIST_MOD', true)
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
