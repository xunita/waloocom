<template>
  <div
    class="py-4"
    :class="{
      'px-0': size > 1500,
      'px-6': size <= 1500,
    }"
  >
    <Favorites />
    <div class="flex flex-col space-y-5 mt-5">
      <Carduct titles="You may like" />
      <Carduct titles="Recently Viewed" />
    </div>
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
