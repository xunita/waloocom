<template>
  <div>
    <div class="w-fit flex flex-col space-y-2">
      <Attributdrop :title="'Ships to'" :left="true" :search="true" />
      <!-- <span
              class="size-125 py-01 self-start text-red-800 font-semibold twoline"
              >This item can't be shipped to Ivory coast</span
            > -->
      <div class="flex align-center space-x-1">
        <i class="fas fa-shipping-fast text-gray-800"></i>
        <div class="flex align-center space-x-2">
          <span class="size-13">Shipping Fees:</span>
          <span class="size-14 font-semibold">$ 45</span>
          <a class="clickable size-14 underline-hover color-004e66">Infos</a>
        </div>
      </div>
      <div class="flex w-full align-center space-x-2">
        <span class="size-13 block">Expected arrival date:</span>
        <span class="size-14 font-semibold block">September 14, 2016</span>
      </div>
    </div>
    <div class="mt-2">
      <span
        class="size-16 py-01 self-start text-green-800 font-semibold twoline"
        >Available in stock</span
      >
      <div class="flex flex-col space-y-4 mt-3">
        <Attributdrop class="self-start" :title="'Size'" :left="true" />
        <Attributdrop class="self-start" :title="'Color'" :left="true" />
        <div class="self-start"><Qtedrop /></div>
      </div>
      <div class="flex flex-col space-y-4 mt-5">
        <div class="flex flex-col space-y-4">
          <span class="w-full"
            ><button
              class="btn-004e66 no-outlines w-full rounded flex align-center space-x-2 px-20 py-1 text-white"
            >
              <span class="m-0-auto"
                ><i class="fas fa-cart-plus text-white"></i>
                <span class="size-125 font-medium text-white"
                  >Add to cart</span
                ></span
              >
            </button></span
          >
          <span class="w-full"
            ><button
              class="bg-gray-800 hover:bg-gray-700 no-outlines w-full rounded flex align-center space-x-2 px-20 py-1 text-white"
            >
              <span class="m-0-auto">
                <span class="size-125 font-medium text-white"
                  >Buy NOW</span
                ></span
              >
            </button></span
          >
          <span class="w-full"
            ><button
              class="bg-gray-800 hover:bg-gray-700 no-outlines w-full rounded flex align-center space-x-2 py-1"
            >
              <span class="m-0-auto flex align-center space-x-1 h-full py-08">
                <!-- <svg
                        class="w-5 h-5 text-white text-whites"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clip-rule="evenodd"
                        ></path>
                      </svg> -->
                <svg
                  class="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
                <span class="size-125 font-medium text-white"
                  >Add to Favorites List</span
                ></span
              >
            </button></span
          >
        </div>
      </div>
      <div class="pt-8 w-fit m-0-auto text-center">
        <span class="size-14">Want to sell one ?</span>
        <span class="w-full"
          ><button
            class="btn-004e66 no-outlines w-full rounded flex align-center space-x-2 px-2 py-1 text-white"
          >
            <span class="m-0-auto">
              <span class="size-125 font-medium text-white"
                >Sell on Waloo</span
              ></span
            >
          </button></span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
