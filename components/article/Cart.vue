<template>
  <div class="bg-white w-full px-6 pt-4 pb-4">
    <h4 class="font-semibold size-16 logo-color">Shopping Cart (5 items)</h4>
    <div class="flex max1452 space-x-5 pt-4 justify-center">
      <div>
        <div class="flex flex-col space-y-5 border-b pb-4 mb-4">
          <Articlecart
            v-for="i in 1"
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
      <div class="border w180e rounded h-fit sticky top-12xs px-3 pt-3 pb-5">
        <h4 class="font-semibold size-16 logo-color">Summary (5)</h4>
        <div>
          <div class="flex space-x-1 align-center">
            <h4 class="size-16 logo-color">Total Price:</h4>
            <p class="flex align-center self-start space-x-2 mt-1">
              <span class="font-semibold size-14 color-004e66"
                >$ 365,475.4</span
              >
              <span class="line-through font-semibold size-13 color-363636"
                >$ 499,987.9</span
              >
            </p>
          </div>
          <div class="wordbreaking w180max pt-1">
            <p class="size-125 leading-4">
              Free delivery on all articles from $ 150.
              <a
                class="clickable ml-1 inline-block size-14 underline-hover color-004e66"
                >Infos</a
              >
            </p>
          </div>
          <div class="mt-4">
            <span class="w-full"
              ><button
                class="btn-004e66 w-full rounded flex align-center space-x-2 px-10 py-1 text-white"
              >
                <span class="m-0-auto">
                  <span class="size-125 font-medium text-white"
                    >Proceed to Checkout</span
                  ></span
                >
              </button></span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.max1452 {
  max-width: 1452px !important;
}
</style>
