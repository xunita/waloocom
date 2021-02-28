<template>
  <Article v-if="normal" class="appearZ" />
  <Articlebig v-else class="appearZ appearyb" />
</template>

<script>
export default {
  props: {
    little: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    normal() {
      return this.little === true
    },
  },
}
</script>

<style scoped></style>
