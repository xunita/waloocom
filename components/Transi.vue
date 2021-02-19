<template>
  <div>
    <button
      @click="
        {
          trans = !trans
        }
      "
    >
      transitioner
    </button>
    <div>
      <Article v-show="transition" key="sddq" class="appearZ" />
      <Articlebig v-show="!transition" key="sddqs" class="appearZ" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      trans: false,
    }
  },
  computed: {
    transition() {
      return this.trans === true
    },
  },
}
</script>

<style scoped>
.trans {
  transition: transform ease-out 0.2s;
}
</style>
