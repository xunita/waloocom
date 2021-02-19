<template>
  <div class="adlines w-full flex align-center justify-between">
    <div class="h-full bg-transparent w-16 leftag z-10 px-2">
      <button
        class="button bg-transparent shadow-sm h-11 w-11 rounded-full no-outlines outline-none vertical-centers z-10 gotop hvme border-2 border-transparent"
      >
        <svg
          class="w-6 h-6 transform rotate-90 color-white mr-1 me-white"
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
      class="bg-white h-full w-full absolute overflow-x-auto pt-5 pb-1 rounded"
    >
      <a v-for="i in 20" :key="i" class="h-full w180 hover:shadow">{{ i }}</a>
    </div>
    <div class="h-full bg-transparent w-16 rightag z-10 relative">
      <button
        class="button bg-transparent shadow-sm h-11 w-11 rounded-full no-outlines outline-none vertical-centers ml-2 z-10 gotop hvme border-2 border-transparent"
      >
        <svg
          class="w-6 h-6 transform -rotate-90 color-white relative ml-1 me-white"
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
.hvme {
  /* display: block !important; */
  animation: 0.2s appearZ !important;
  background-color: #004e66;
  /* border-color: white; */
}
.adlines {
  height: 300px;
}
::-webkit-scrollbar {
  width: 0;
  background: transparent; /* make scrollbar transparent */
}
.leftag:hover .hvme,
.rightag:hover .hvme {
  display: block !important;
}
</style>
