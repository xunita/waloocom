<template>
  <div class="w-full">
    <div class="bg-white py-3 px-4 w-full">
      <span class="font-semibold size-14 border-b pb-1 mb-3 w-full block"
        >Price</span
      >
      <div class="flex align-center space-x-2">
        <label for="minpricecateg" class="size-13">
          Min (ZAR)
          <input
            v-model="min"
            placeholder="Min price"
            type="text"
            class="border size-13 w-20 text-center p-1 no-outlines hover:shadow-sm"
          />
        </label>
        <span class="font-semibold">-</span>
        <label for="maxpricecateg" class="size-13">
          <input
            v-model="max"
            type="text"
            placeholder="Max price"
            class="border size-13 w-20 text-center p-1 no-outlines hover:shadow-sm"
          />
          Max (ZAR)
        </label>
        <div class="pl-2">
          <button class="btn-004e66 px-3 py-01x rounded no-outlines">
            <span class="text-white size-11 h-fit font-semibold">APPLY</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      max: '',
      min: '',
    }
  },
}
</script>

<style scoped></style>
