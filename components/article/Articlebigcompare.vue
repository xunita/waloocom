<template>
  <a class="clickable article bg-white h-fit flex relative"
    ><button
      class="absolute z-10 right-0 bg-black-trs p-1 mr-1 mt-1 h-8 w-8 rounded-full no-outlines outline-none"
    >
      <i class="far fa-heart logo-color size-16"></i>
    </button>
    <figure class="image is-128x128 relative">
      <img src="/b.jpg" alt="Placeholder image" />
      <div class="w-fit absolute top-0 left-0 z-10">
        <span
          class="px-2 py-1 block bg-004e66 rounded-br text-white font-semibold size-10"
          >72% OFF</span
        >
      </div>
      <div
        class="absolute z-0 preview hidden top-0 left-0 w-full h-full bg-black-tre"
      >
        <div
          class="w-fit h-fit prev-d -mt-6 both-centers text-center flex flex-col"
        >
          <button class="p-2 bg-black-trs m-0-auto rounded-full no-outlines">
            <svg
              class="w-6 h-6 text-white eyes"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268
2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              ></path>
            </svg>
          </button>
          <span class="font-semibold size-14 text-white">Preview</span>
        </div>
      </div>
      <div class="w-fit d-bestp absolute bottom-0 left-0">
        <span
          class="px-2 py-1 block rounded-full bg-transparent text-orange-600 font-bold size-12"
          ><svg
            class="w-5 h-5 starss"
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
          class="bg-e6e6e6s ml-1 mt-1 absolute bestp w-16 rounded text-white p-1 size-11 font-semibold text-center left-0"
          >Top Article</span
        >
      </div>
    </figure>
    <div class="flex flex-col pl-4 pr-12 pt-3 pb-3">
      <span class="size-12 pb-1 logo-color font-semibold twoline"
        >Samsung Galaxy S20+ (2020 Edition + 5G) with galaxy airpods in bonus
        Samsung Galaxy S20+ (2020 Edition + 5G) with galaxy airpods in bonus
        Samsung Galaxy S20+ (2020 Edition + 5G) with galaxy airpods in bonus
        Samsung Galaxy S20+ (2020 Edition + 5G) with galaxy airpods in bonus
        Samsung Galaxy S20+ (2020 Edition + 5G) with galaxy airpods in
        bonus</span
      >
      <div class="relative flex align-center space-x-10 py-01">
        <p class="flex align-center self-start space-x-2">
          <span class="font-bold size-125 color-004e66">$ 365,475.4</span>
          <span class="line-through font-semibold size-125 color-363636"
            >$ 499,987.9</span
          >
        </p>
      </div>
      <div class="flex align-center w-fit hover-underchild justify-between">
        <div class="flex align-center space-x-2 py-01 w-fit">
          <span class="size-11">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star color-6d6d6d"></span>
            <span class="fa fa-star color-6d6d6d"></span>
          </span>
          <span
            class="color-004e66 underline-meparent size-11 font-semibold underline-hover"
            >8745</span
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
.article:hover .preview {
  animation: 0.1s appearZ;
  display: block;
}
.article:hover .cartadd {
  animation: 0.1s appearZ;
  visibility: visible;
}
.article:hover .starss {
  color: #ffa807;
}
.prev-d:hover .bg-black-trs {
  animation: 0.1s appearZ;
  background-color: #004e66 !important;
}
</style>
