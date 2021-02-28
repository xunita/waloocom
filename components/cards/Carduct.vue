<template>
  <div>
    <div class="bg-white px-4 pt-3 flex align-center justify-between">
      <h4 class="font-semibold size-16 logo-color">{{ titles }}</h4>
      <button
        class="z-10 bg-black-trs p-1 h-8 w-8-full no-outlines outline-none"
      >
        <svg
          class="w-6 h-6 logo-color"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
    <Adspetit />
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: String,
      default: 'Products',
    },
  },
}
</script>

<style scoped></style>
