<template>
  <div class="bg-white w-full h-fit">
    <div class="flex align-center is-mobile flex-wrap">
      <div
        v-for="i in 6"
        :key="i"
        class="column is-2 border-b h-32"
        :class="{ 'border-l': i <= 6, 'border-r': i === 6 }"
      >
        <div class="vertical-center w-fit m-0-auto">
          <span class="size-13 font-semibold">{{ name }} </span>
        </div>
      </div>
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
