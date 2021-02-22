<template>
  <div class="bg-white w-full h-24">
    <a class="clickable"
      ><img
        class="w-full h-full"
        src="/cover/banner.jpg"
        alt="Placeholder image"
    /></a>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: 'Marketplace',
    },
  },
}
</script>

<style scoped></style>
