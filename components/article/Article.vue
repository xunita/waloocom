<template>
  <a class="clickable h-fit pb-2 article relative px-3 hover:shadow-lg">
    <figure class="image is-240x200 relative">
      <img class="h-full w-full" src="/b.jpg" alt="Placeholder image" />
      <div
        class="absolute flex flex-center space-x-1 px-3 rounded-tl bottom-0 py-1 bg-004e66 bottom-0 right-0 z-10"
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
        <!-- <svg
          class="w-4 h-4 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          ></path>
        </svg> -->
      </div>
      <div
        class="absolute preview hidden top-0 left-0 w-full h-full bg-black-tre"
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
          <span class="font-semibold size-13 text-white">Preview</span>
        </div>
      </div>
      <div class="w-fit absolute top-0 left-0">
        <span
          class="px-2 py-1 block bg-004e66 rounded-br text-white font-bold size-125"
          >72% OFF</span
        >
        <!-- <span
          class="px-2 py-1 block bg-004e66 rounded-br text-white font-semibold size-125"
          >Out of stock</span
        > -->
      </div>
      <div class="w-fit d-bestp absolute left-0 bottom-0 pl-2">
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
          class="bg-e6e6e6s ml-1 mt-1 z-10 absolute bestp w-16 rounded text-white p-1 size-11 font-semibold text-center left-0"
          >Top Article</span
        >
      </div>
      <button
        class="absolute z-10 right-0 top-0 bg-black-trs p-1 mr-1 mt-1 h-8 w-8 rounded-full no-outlines outline-none"
      >
        <i class="far fa-heart logo-color size-16"></i>
      </button>
    </figure>
    <div class="flex flex-col px-2 mt-1">
      <div class="pt-1">
        <button
          class="bg-white px-3 rounded-full border flex align-center space-x-1 no-outlines outline-none"
        >
          <span class="size-11 font-semibold logo-color">Jumia</span>
        </button>
      </div>
      <span class="size-13 logo-color font-semibold twoline my-1"
        >Samsung Galaxy S20+ (2020 Edition + 5G) with galaxy airpods in
        bonus</span
      >
      <div class="py-01 relative">
        <p class="flex pb-1 align-center space-x-2">
          <span class="font-bold size-14 color-004e66">$ 365,475.4</span>
          <span class="line-through font-semibold size-13 color-363636"
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
        <div class="flex align-center space-x-2 py-01">
          <span class="size-12">
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
      <span class="w-full mt-2 invisible cartadd"
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
.article:hover .fa-heart {
  color: white !important;
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
.bg-black-trs:hover {
  animation: 0.1s appearZ;
  background-color: #004e66 !important;
}
.prev-d:hover .bg-black-trs {
  animation: 0.1s appearZ;
  background-color: #004e66 !important;
}

#chevron {
  text-align: center;
  padding: 12px;
  margin-bottom: 6px;
  height: 60px;
  width: 200px;
}
#chevron:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 51%;
  background: red;
  transform: skew(0deg, 6deg);
}
#chevron:after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
  background: red;
  transform: skew(0deg, -6deg);
}

@media screen and (max-width: 1500px) {
  .article {
    width: 25% !important;
  }
}
@media screen and (max-width: 1230px) {
  .article {
    width: 33.33% !important;
  }
}
</style>
