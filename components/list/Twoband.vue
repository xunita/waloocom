<template>
  <div class="w-full flex align-center space-x-3 h-24">
    <div class="bg-white w-full h-full">
      <a class="clickable"
        ><img
          class="w-full h-full"
          src="/cover/banner.jpg"
          alt="Placeholder image"
      /></a>
    </div>
    <div class="bg-white w-full h-full">
      <a class="clickable"
        ><img
          class="w-full h-full"
          src="/cover/banner.jpg"
          alt="Placeholder image"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Marketplace',
    },
  },
}
</script>

<style scoped></style>
