<template>
  <div
    class="border rounded flex align-center my-1 d-search flex align-center w-full h-10"
    :class="{ 'shadow-sm': focused }"
    @mouseover="
      {
        focused = true
      }
    "
    @mouseleave="manageleave"
  >
    <Searchdrop v-show="size > 480" />
    <input
      class="w-full outline-none pl-2 bg-transparent font-normal"
      type="search"
      placeholder="Search a product, a brand, a category..."
      @focus="managefocus"
      @blur="manageblur"
    />
    <button
      class="btn-004e66 no-outlines rounded-tr rounded-br btn-search flex align-center space-x-2 h-10 px-3"
      @click="goprod"
    >
      <span class="w-fit h-fit"
        ><svg
          class="w-4 h-4 font-semibold text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          ></path></svg
      ></span>
    </button>
  </div>
</template>
<script>
export default {
  props: {
    size: {
      type: Number,
      default: 99999,
    },
  },
  data() {
    return {
      focused: false,
      inputfoc: false,
    }
  },
  methods: {
    goprod() {
      location.assign('/products')
    },
    manageleave() {
      if (this.inputfoc !== true) this.focused = false
    },
    managefocus() {
      this.focused = true
      this.inputfoc = true
    },
    manageblur() {
      this.focused = false
      this.inputfoc = false
    },
  },
}
</script>
<style scoped>
.d-search {
  min-width: 380px;
}
</style>
