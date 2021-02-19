<template>
  <div class="relative slider flex justify-between h-full w-full">
    <div class="h-full w-16 leftag z-10 relative left-0 px-3">
      <button
        class="button btn-004e66 shadow-sm h-11 w-11 rounded-full no-outlines outline-none vertical-center z-10 gotop hvme hvme-left border-2 border-transparent"
      >
        <svg
          class="w-6 h-6 transform rotate-90 color-white me-white"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
    <div
      class="d-dot block h-fit z-10 self-end mb-5 flex align-center space-x-3"
    >
      <span class="ads-dot clickable block bg-004e66 rounded-full"></span>
      <span
        v-for="i in 5"
        :key="i"
        class="ads-dot clickable block bg-dot rounded-full border-none"
      ></span>
    </div>
    <div class="bg-white h-full w-full absolute rounded"><slot></slot></div>
    <div class="h-full relative w-16 rightag z-10 right-0">
      <button
        class="button btn-004e66 shadow-sm ml-1 h-11 w-11 rounded-full no-outlines outline-none vertical-center z-10 gotop hvme hvme-right border-2 border-transparent"
      >
        <svg
          class="w-6 h-6 transform -rotate-90 color-white relative me-white"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
/* .hvme {
  background-color: #004e66;
  animation: 0.2s appearZ;
} */

.ads-dot {
  width: 10px !important;
  height: 10px !important;
}
.leftag,
.rightag {
  visibility: hidden;
  /* border-color: white; */
}
.slider:hover .leftag {
  visibility: visible !important;
  animation: 0.2s appearxh !important;
}
.slider:hover .rightag {
  visibility: visible !important;
  animation: 0.2s appearxhz !important;
}
</style>
