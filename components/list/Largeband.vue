<template>
  <div class="bg-white w-full h-24">
    <img
      class="w-full h-full"
      src="/cover/banner.jpg"
      alt="Placeholder image"
    />
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
