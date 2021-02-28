<template>
  <div class="h-auto px-3 flex align-center space-x-5">
    <p
      v-for="i in 3"
      :key="i"
      class="flex align-center space-x-1 rounded-full bg-white px-3 shadow-sm py-08 w-fit"
    >
      <span class="size-12 font-semibold">Bags, Cases, Cover & Sleeves1</span>
      <a class="delete is-small"></a>
    </p>
    <a
      class="clickable color-004e66 w-fit underline-hover size-13 font-semibold"
    >
      <span>Remove all</span>
    </a>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
