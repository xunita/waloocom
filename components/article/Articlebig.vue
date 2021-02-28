<template>
  <a class="clickable bg-white h-fit flex relative hover:shadow-lg"
    ><button
      class="absolute z-10 right-0 bg-black-trs p-1 mr-1 mt-1 h-10 w-10 rounded-full no-outlines outline-none"
    >
      <i class="far fa-heart logo-color size-20"></i>
    </button>
    <figure class="image is-240x200s">
      <img class="is-240x200s" src="/b.jpg" alt="Placeholder image" />
    </figure>
    <div class="flex w-full flex-col pl-4 pr-12 pt-2">
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
      <div class="relative flex align-center justify-between pt-1 pb-1">
        <p class="flex align-center self-start space-x-2">
          <span class="font-bold size-125 color-004e66">$ 365,475.4</span>
          <span class="line-through font-semibold size-125 color-363636"
            >$ 499,987.9</span
          >
        </p>
        <span class="size-13 self-start logo-color font-semibold twoline"
          >87 in stock</span
        >
      </div>
      <div class="flex align-center justify-between">
        <div class="flex align-center space-x-2 self-start">
          <span class="size-11">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star color-6d6d6d"></span>
            <span class="fa fa-star color-6d6d6d"></span>
          </span>
          <span class="color-004e66 size-125 font-semibold">(87)</span>
        </div>
      </div>
      <div class="flex align-center justify-between">
        <div>
          <div class="flex align-center space-x-10 py-1">
            <div>
              <span class="block size-13 font-semibold logo-color"
                >Size</span
              >
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

        <div class="py-08">
          <span
            ><button
              class="btn-004e66 flex align-center space-x-2 px-16 py-1 text-white"
            >
              <span class="size-13 font-medium">Add to cart</span>
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg></button
          ></span>
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
