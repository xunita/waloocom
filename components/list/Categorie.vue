<template>
  <div class="bg-white w-full h-40 rounded">
    <div class="flex align-center space-x-2 vertical-center w-fit m-0-auto">
      <figure class="image is-40x40 rounded-full relative">
        <img
          class="is-40x40 rounded-full"
          src="/t.jpg"
          alt="Placeholder image"
        />
      </figure>
      <span class="size-13 font-semibold">{{ name }}</span>
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
