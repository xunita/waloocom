<template>
  <a class="clickable h-fit pb-2 article relative hover:shadow-lg">
    <figure class="image is-240x200 relative">
      <img class="h-full w-full" src="/b.jpg" alt="Placeholder image" />
      <div class="w-fit absolute top-0 left-0 py-08">
        <span class="px-2 py-1 block bg-004e66 text-white font-bold size-125"
          >72% OFF</span
        >
      </div>
      <div class="w-fit d-bestp absolute left-0 bottom-0 pb-2 pl-2">
        <span
          class="px-2 py-1 block rounded-full btn-004e66s text-orange-600 font-bold size-12"
          ><svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            ></path></svg
        ></span>
        <span
          class="bg-trt ml-1 mt-1 absolute bestp w-16 rounded text-orange-600 p-1 size-11 font-semibold text-center left-0"
          >Best deal</span
        >
      </div>
      <button
        class="absolute z-10 right-0 top-0 bg-black-trs p-1 mr-1 mt-1 h-8 w-8 rounded-full no-outlines outline-none"
      >
        <i class="far fa-heart logo-color size-16"></i>
      </button>
    </figure>
    <div class="flex flex-col px-2 mt-1">
      <div class="py-08">
        <button
          class="bg-white px-3 py-01 rounded-full border flex align-center space-x-1 no-outlines outline-none"
        >
          <span class="size-11 font-semibold logo-color">Jumia</span>
        </button>
      </div>
      <span class="size-13 logo-color font-semibold twoline my-1"
        >Samsung Galaxy S20+ (2020 Edition + 5G) with galaxy airpods in
        bonus</span
      >
      <div class="py-01 relative">
        <p class="flex align-center space-x-2">
          <span class="font-bold size-125 color-004e66">$ 365,475.4</span>
          <span class="line-through font-semibold size-125 color-363636"
            >$ 499,987.9</span
          >
        </p>
        <span
          class="px-2 py-1 block w-fit rounded btn-004e66s color-004e66 font-semibold size-11 my-1"
          >Free shipping</span
        >
        <!-- <span
          class="size-14 py-01 self-start color-004e66 font-semibold twoline"
          >Available in stock</span
        >
        <span
          class="size-14 py-01 self-start color-004e66 font-semibold twoline"
          >Available soon</span
        >
        <span
          class="size-14 py-01 self-start text-red-600 font-semibold twoline"
          >106 in stock</span
        > 
        -->
        <!-- <span
          class="size-14 py-01 self-start text-red-600 font-semibold twoline"
          >Out of stock</span
        > -->
      </div>
      <div class="flex align-center hover-underchild justify-between">
        <div class="flex align-center space-x-2 py-08">
          <span class="size-11">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star color-6d6d6d"></span>
            <span class="fa fa-star color-6d6d6d"></span>
          </span>
          <span
            class="color-004e66 underline-meparent size-125 font-semibold underline-hover"
            >8745</span
          >
        </div>
      </div>
      <!-- <span class="size-12 py-01 self-start twoline">Ships to Ivory Coast</span> -->
      <!-- <span class="size-12 py-01 self-start twoline">Available in 4 color</span> -->
      <span class="w-full my-2"
        ><button
          class="btn-004e66 w-full rounded flex align-center space-x-2 px-8 py-08 text-white"
        >
          <span class="m-0-auto"
            ><i class="fas fa-cart-plus text-white"></i>
            <span class="size-125 font-medium text-white"
              >Add to cart</span
            ></span
          >
        </button></span
      >
    </div>
  </a>
</template>

<script>
export default {}
</script>

<style scoped>
@media screen and (max-width: 1500px) {
  .article {
    width: 25% !important;
  }
}
@media screen and (max-width: 1215px) {
  .article {
    width: 33.33% !important;
  }
}
</style>
