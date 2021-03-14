<template>
  <Articlebig v-if="!normal" class="appearZ" />
  <Article v-else class="appearZ" />
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
