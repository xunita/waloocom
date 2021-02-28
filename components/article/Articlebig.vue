<template>
  <a class="clickable bg-white h-fit flex relative hover:shadow-xs"
    ><button
      class="absolute z-10 right-0 bg-black-trs p-1 mr-1 mt-1 h-10 w-10 rounded-full no-outlines outline-none"
    >
      <i class="far fa-heart logo-color size-20"></i>
    </button>
    <figure class="image is-240x200s">
      <img
        class="is-240x200s vertical-center"
        src="/b.jpg"
        alt="Placeholder image"
      />
      <div class="w-fit absolute top-0 left-0 py-08">
        <span class="px-2 py-1 block bg-004e66 text-white font-bold size-125"
          >72% OFF</span
        >
      </div>
      <div class="w-fit d-bestp absolute top-0 right-0 p-2">
        <span
          class="px-2 py-1 block rounded-full btn-004e66s color-004e66 font-bold size-12"
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
          class="bg-trt ml-1 mt-1 absolute bestp w-16 rounded color-004e66 p-1 size-11 font-semibold text-center right-0"
          >Best deal</span
        >
      </div>
    </figure>
    <div class="flex w-full flex-col pl-4 pr-12 pt-3 pb-3">
      <div class="pb-1">
        <button
          class="bg-white px-3 py-01 rounded-full border flex align-center space-x-1 no-outlines outline-none"
        >
          <span class="size-12 font-semibold logo-color">Jumia</span>
        </button>
      </div>
      <span class="size-13 logo-color font-semibold twoline"
        >Samsung Galaxy S20+ (2020 Edition + 5G) with galaxy airpods in bonus
        Samsung Galaxy S20+ (2020 Edition + 5G) with galaxy airpods in bonus
        Samsung Galaxy S20+ (2020 Edition + 5G) with galaxy airpods in bonus
        Samsung Galaxy S20+ (2020 Edition + 5G) with galaxy airpods in bonus
        Samsung Galaxy S20+ (2020 Edition + 5G) with galaxy airpods in
        bonus</span
      >
      <div class="relative flex align-center justify-between pt-1">
        <p class="flex align-center self-start space-x-2">
          <span class="font-bold size-125 color-004e66">$ 365,475.4</span>
          <span class="line-through font-semibold size-125 color-363636"
            >$ 499,987.9</span
          >
        </p>
        <!-- <span
          class="size-14 self-start color-004e66 font-semibold twoline"
          >Available in stock</span
        >
        <span
          class="size-14 self-start color-004e66 font-semibold twoline"
          >Available soon</span
        >
        <span
          class="size-14 self-start text-red-600 font-semibold twoline"
          >106 in stock</span
        > 
        -->
        <span class="size-14 self-start text-red-600 font-semibold twoline"
          >Out of stock</span
        >
      </div>
      <span
        class="px-2 py-1 block w-fit rounded btn-004e66s color-004e66 font-semibold size-11 my-1"
        >Free shipping</span
      >
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
      <!-- <span class="size-12 py-01 self-start twoline">Ships to Ivory Coast</span>
      <span class="size-12 py-01 self-start twoline">Available in 4 color</span> -->
      <div class="flex align-center justify-between">
        <div>
          <div class="flex align-center space-x-10 py-1">
            <div>
              <span class="block size-13 font-semibold logo-color">Size</span>
              <select
                class="my-1 pl-1 wselmin size-13 no-outlines bg-e6e6e6 border font-semibold"
                name="taille"
              >
                <option value="1">38</option>
                <option value="1">39</option>
                <option value="1">40</option>
                <option value="1">41</option>
                <option value="1">42</option>
              </select>
            </div>
            <div>
              <span class="block size-13 font-semibold logo-color">Qte</span>
              <input
                class="my-1 pl-1 w-12 size-13 no-outlines bg-e6e6e6 border font-semibold"
                name="qte"
                type="number"
                min="1"
                value="1"
              />
            </div>
          </div>
        </div>

        <div class="py-08 self-end">
          <span class="w-full"
            ><button
              class="btn-004e66 w-full rounded flex align-center space-x-2 px-12 py-1 text-white"
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
      </div>
    </div>
  </a>
</template>

<script>
export default {}
</script>

<style scoped>
.wselmin {
  min-width: 64px !important;
}
</style>
