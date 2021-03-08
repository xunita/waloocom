<template>
  <div class="px-5">
    <div class="border-b pb-3">
      <span class="size-20 block font-medium lineh"
        >Samsung Galaxy S20+ (2020 Edition + 5G) with galaxy airpods in bonus
        Samsung Galaxy S20+ (2020 Edition + 5G) with galaxy airpods in
        bonus</span
      >
      <a class="clickable flex flex-col w-fit h-fit select-none mt-2">
        <span class="size-14 color-004e66">Visit the Marketplace</span>
        <img
          class="is-max transform scale-75 mt-1"
          :src="'/logo/ju.png'"
          alt="Placeholder image"
      /></a>
      <a class="clickable w-fit h-fi select-none mt-2">
        <span class="size-13 color-004e66 font-semibold underline-hover"
          >Philips & Johnson</span
        ></a
      >
      <div class="flex align-center w-fit hover-underchild space-x-2 mt-1">
        <span class="size-13 clickable">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star color-6d6d6d"></span>
          <span class="fa fa-star color-6d6d6d"></span>
        </span>
        <span
          class="color-004e66 block mt-1 clickable self-end underline-meparent size-13 font-semibold underline-hover"
          >8745 Reviews</span
        >
      </div>
      <div class="w-fit flex align-center space-x-2">
        <div
          class="relative clickable flex flex-center space-x-1 px-3 w-fit left-0 mt-2 py-1 bg-004e66"
        >
          <span class="w-fit size-11 h-fit text-white">Waloo's selection</span>
          <svg
            class="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <span class="mt-2 size-13 cursor-default"
          >Waloo's choice and suggestion</span
        >
      </div>
    </div>
    <div class="pt-3 relative border-b pb-4">
      <div class="flex align-center justify-between">
        <p class="flex pb-1 align-center space-x-2">
          <span class="font-semibold block size-18 color-004e66"
            >$ 365,475</span
          >
          <span class="line-through block font-semibold size-16 color-363636"
            >$ 499,987</span
          >
        </p>
        <!-- <span class="size-16 self-start text-green-800 font-semibold twoline"
          >In stock</span
        > -->
      </div>
      <div class="flex align-center space-x-4">
        <span class="size-14 font-semibold"
          >You save <span class="color-004e66">$ 139,000</span></span
        >
        <div class="w-fit top-0 left-0">
          <span
            class="px-2 py-1 block bg-004e66 text-white font-semibold size-13"
            >72% OFF</span
          >
        </div>
      </div>
    </div>
    <div class="pt-3">
      <h4 class="font-semibold size-14 logo-color">
        This item is compared with
      </h4>
      <div class="pt-2">
        <Articlebigcompare />
      </div>
    </div>
    <!-- <div class="mt-3"><Qtedrop /></div> -->
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
