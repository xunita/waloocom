<template>
  <div
    class="clickable article cartart bg-white h-fit flex relative hover:shadow-xs"
  >
    <button
      class="absolute z-10 right-0 bg-black-trs p-1 mr-1 mt-1 h-10 w-10 rounded-full no-outlines outline-none"
    >
      <i class="far fa-heart logo-color size-18"></i>
    </button>
    <figure class="image is-240x200s">
      <img
        class="is-240x200s vertical-center"
        src="/b.jpg"
        alt="Placeholder image"
      />
      <div class="w-fit absolute top-0 left-0 z-10">
        <!-- <span
          class="px-2 py-1 block bg-004e66 rounded-br text-white font-semibold size-125"
          >Out of stock</span
        > -->
        <span
          class="px-2 py-1 block bg-004e66 rounded-br text-white font-bold size-125"
          >72% OFF</span
        >
      </div>
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
        class="absolute appearZ preview hidden top-0 left-0 w-full h-full bg-black-tre"
      >
        <div
          class="w-fit h-fit prev-d -mt-3 both-centers text-center flex flex-col"
          @mousedown="prevarticle"
        >
          <button class="px-3 pb-1 btn-004e66 m-0-auto rounded no-outlines">
            <span class="font-semibold size-125 text-white">Preview</span>
          </button>
        </div>
      </div>
      <div class="w-fit d-bestp absolute top-0 right-0">
        <span
          class="px-2 py-1 block rounded-full bg-transparent checked font-bold size-12"
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
    <div class="flex w-full flex-col pl-4 pr-12 pt-3 pb-3">
      <span class="size-14 pb-1 logo-color font-semibold twoline"
        >Samsung Galaxy S20+ (2020 Edition + 5G) with galaxy airpods in bonus
        Samsung Galaxy S20+ (2020 Edition + 5G) with galaxy airpods in bonus
        Samsung Galaxy S20+ (2020 Edition + 5G) with galaxy airpods in bonus
        Samsung Galaxy S20+ (2020 Edition + 5G) with galaxy airpods in bonus
        Samsung Galaxy S20+ (2020 Edition + 5G) with galaxy airpods in
        bonus</span
      >
      <div class="relative flex align-center space-x-10 py-08">
        <p class="flex align-center self-start space-x-2">
          <span class="font-semibold size-14 color-004e66">$ 365,475.4</span>
          <span class="line-through font-semibold size-13 color-363636"
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
        <span class="size-14 block w-fit text-red-600 font-semibold twoline"
          >Out of stock</span
        >
        <!-- <span
          class="px-4 py-1 block text-green-700 w-fit rounded bg-green-100 font-semibold size-11"
          >Added to cart
          <svg
            class="w-4 h-4 text-green-700 inline-block -mt-01"
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
            ></path></svg
        ></span> -->
      </div>
      <div class="flex align-center justify-between">
        <span
          class="px-2 py-1 block w-fit rounded btn-004e66s color-004e66 font-semibold size-11 my-1"
          >Free shipping</span
        >
        <div class="flex align-center space-x-4">
          <Attributdrop
            class="self-start"
            :title="'Color'"
            :content="['ccc', '004e66', '000', '041e95']"
            :left="true"
          />
          <Attributdrop :title="'Size'" />
          <a href="#" class="underline-hover hover-004e66">+3 More options</a>
        </div>
      </div>
      <div class="flex w-fit align-center hover-underchild justify-between">
        <div class="flex w-fit align-center space-x-2 py-08">
          <span class="size-12">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star color-6d6d6d"></span>
            <span class="fa fa-star color-6d6d6d"></span>
          </span>
          <span
            class="color-004e66 underline-meparent size-13 font-semibold underline-hover"
            >8745</span
          >
        </div>
      </div>
      <!-- <span class="size-12 py-01 self-start twoline">Ships to Ivory Coast</span> -->
      <!-- <span class="size-12 py-01 self-start twoline">Available in 4 color</span> -->
      <div class="w-fit flex align-center space-x-5 pt-3 self-end">
        <div class="self-start"><Qtedrop /></div>
        <span class="self-end"
          ><button
            class="btn-004e66 m-0-auto no-outlines rounded flex align-center space-x-2 px-10 py-1 text-white"
          >
            <span
              ><i class="fas fa-cart-plus text-white"></i>
              <span class="size-125 font-medium text-white"
                >Add to cart</span
              ></span
            >
          </button></span
        >
        <span class="self-end"
          ><button
            class="bg-gray-800 m-0-auto hover:bg-gray-700 no-outlines px-10 rounded flex align-center space-x-2 px-5 py-1 text-white"
          >
            <span class="m-0-auto">
              <span class="size-125 font-medium text-white">Buy NOW</span></span
            >
          </button></span
        >
        <div class="self-end">
          <span
            ><button
              class="button dfds is-light rounded flex align-center space-x-2 px-4 py-1 text-white"
            >
              <span class="m-0-auto flex align-center space-x-1"
                ><svg
                  class="w-4 h-4 logo-color"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="size-125 font-medium logo-color"
                  >Remove</span
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
export default {
  methods: {
    prevarticle() {
      this.$store.commit('SET_ARTICLEMODAL', true)
      document.body.style.overflow = 'hidden'
    },
  },
}
</script>

<style scoped>
.cartart {
  max-width: 1150px !important;
}
.dfds:hover svg,
.dfds:hover span {
  color: #c53030 !important;
}
.wselmin {
  min-width: 64px !important;
}
.article:hover .preview {
  animation: 0.3s appearZ;
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
