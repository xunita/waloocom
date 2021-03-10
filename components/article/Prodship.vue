<template>
  <div class="w-full">
    <div class="w-fit flex flex-col space-y-1">
      <Attributdrop :title="'Ships to'" :left="true" :search="true" />
      <div>
        <figure class="image is-240x200sse relative">
          <img
            class="h-full w-full"
            src="/jupress.png"
            alt="Placeholder image"
          />
        </figure>
        <div class="wordbreaking w180max pr-6">
          <p class="size-125 leading-4">
            Free delivery on all articles from $ 150 Free deliver on all
            articles from $ 150.
            <a
              class="clickable ml-1 inline-block size-14 underline-hover color-004e66"
              >Infos</a
            >
          </p>
        </div>
      </div>
      <!-- <span
              class="size-125 py-01 self-start text-red-800 font-semibold twoline"
              >This item can't be shipped to Ivory coast</span
            > -->
      <div class="w-full w180max pr-6 wordbreaking">
        <p class="size-125">
          <i class="fas fa-shipping-fast text-gray-800 mr-1"></i>
          Shipping Fees:
          <span class="size-14 font-semibold inline-block">$ 45.</span>
          <a
            class="clickable size-14 ml-1 underline-hover inline-block color-004e66"
            >Infos</a
          >
        </p>
      </div>
      <div class="w-full w180max pr-6 wordbreaking">
        <span class="size-125 inline-block">Expected arrival date:</span>
        <span class="size-14 font-semibold inline-block"
          >September 14, 2016</span
        >
      </div>
      <div class="wordbreaking w180max pr-6">
        <p class="size-125">
          Ship from
          <a
            class="clickable ml-1 inline-block size-14 underline-hover color-004e66"
            >jumia.com.tn</a
          >
        </p>
      </div>
    </div>
    <div class="mt-2 w-full">
      <span
        class="size-16 py-01 self-start text-green-800 font-semibold twoline"
        >Available in stock</span
      >
      <div class="flex flex-col space-y-3 mt-2">
        <Attributdrop
          class="self-start"
          :title="'Size'"
          :content="['L', 'S', 'M', 'XL']"
          :left="true"
        />
        <Attributdrop
          class="self-start"
          :title="'Color'"
          :content="['fff', '004e66', '000', '041e95']"
          :left="true"
        />
        <div class="self-start"><Qtedrop /></div>
      </div>
      <div class="flex flex-col space-y-4 mt-5">
        <div class="flex flex-col space-y-4">
          <span class="w-full"
            ><button
              class="btn-004e66 m-0-auto no-outlines w-full rounded flex align-center space-x-2 py-1 text-white"
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
              class="bg-gray-800 m-0-auto hover:bg-gray-700 no-outlines w-full rounded flex align-center space-x-2 py-1 text-white"
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
              class="bg-gray-800 m-0-auto hover:bg-gray-700 no-outlines w-full rounded flex align-center space-x-2 py-1"
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
      <div class="h-32 w-full mt-5 text-center border rounded">
        <div class="w-fit h-fit vertical-center m-0-auto">
          <span class="size-14 block pb-1">Want to sell one ?</span>
          <span class="w-fit"
            ><button
              class="btn-004e66 no-outlines w-full rounded flex align-center space-x-2 px-10 py-1 text-white"
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
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
