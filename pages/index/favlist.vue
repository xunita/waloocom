<template>
  <div
    class="py-4"
    :class="{
      'px-0': size > 1500,
      'px-6': size <= 1500,
    }"
  >
    <Favorites />
  </div>
</template>
<script>
export default {
  computed: {
    size() {
      return this.$store.state.size
    },
  },
}
</script>
