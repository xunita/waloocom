<template>
  <div class="bg-white w-full px-12 py-6">
    <h4 class="font-semibold size-16 logo-color">Favorites List (5 items)</h4>
    <div class="flex space-x-5 pt-5">
      <div class="h-centers">
        <div class="flex flex-col space-y-5 border-b pb-4 mb-4">
          <Articlefav
            v-for="i in 4"
            :key="i"
            class="border w-full rounded w-fit"
          />
        </div>
        <div class="pos-right">
          <div class="self-end">
            <span class="w-full"
              ><button
                class="bg-gray-800 hover:bg-gray-700 rounded flex align-center space-x-2 px-20 py-1 text-white"
              >
                <span class="m-0-auto">
                  <span class="size-125 font-medium text-white"
                    >Continue Shopping</span
                  ></span
                >
              </button></span
            >
          </div>
        </div>
        <div class="clear-both"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
