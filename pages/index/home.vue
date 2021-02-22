<template>
  <div class="w-full flex flex-col space-y-4">
    <div class="h449 w-full flex align-center">
      <div class="h-full relative"><Welcomemenu /></div>
      <div class="w-full h-full relative flex -ml-1">
        <div class="w-full pl-4 h-full relative"><Bigads /></div>
        <Listing v-show="listing" :departement="computer" :size="size" />
      </div>
    </div>
    <div class="w-full">
      <Squaresix />
    </div>
    <div>
      <div class="bg-white px-4 pt-3 flex align-center justify-between">
        <h4 class="font-semibold size-16 logo-color">Today's deals</h4>
        <button
          class="z-10 bg-black-trs p-1 h-8 w-8-full no-outlines outline-none"
        >
          <svg
            class="w-6 h-6 color-363636f"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <Adspetit />
    </div>
    <div class="w-full">
      <Largeband />
    </div>
    <div>
      <div class="bg-white px-4 pt-3 flex align-center justify-between">
        <h4 class="font-semibold size-16 logo-color">Featured</h4>
        <button
          class="z-10 bg-black-trs p-1 h-8 w-8-full no-outlines outline-none"
        >
          <svg
            class="w-6 h-6 color-363636f"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <Adspetit />
    </div>
    <div class="w-full">
      <Square />
    </div>
    <div>
      <div class="bg-white px-4 pt-3 flex align-center justify-between">
        <h4 class="font-semibold size-16 logo-color">Our best deals</h4>
        <button
          class="z-10 bg-black-trs p-1 h-8 w-8-full no-outlines outline-none"
        >
          <svg
            class="w-6 h-6 color-363636f"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <Adspetit />
    </div>
    <div class="w-full">
      <Two />
    </div>
    <div>
      <div class="bg-white px-4 pt-3 flex align-center justify-between">
        <h4 class="font-semibold size-16 logo-color">Trending products</h4>
        <button
          class="z-10 bg-black-trs p-1 h-8 w-8-full no-outlines outline-none"
        >
          <svg
            class="w-6 h-6 color-363636f"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <Adspetit />
    </div>
    <div class="w-full">
      <Twoband />
    </div>
    <div>
      <div class="bg-white px-4 pt-3 flex align-center justify-between">
        <h4 class="font-semibold size-16 logo-color">Our recommendations</h4>
        <button
          class="z-10 bg-black-trs p-1 h-8 w-8-full no-outlines outline-none"
        >
          <svg
            class="w-6 h-6 color-363636f"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <Adspetit />
    </div>
    <div class="bg-white h-fit">
      <div class="bg-white px-4 pt-3 flex align-center justify-between">
        <h4 class="font-semibold size-16 logo-color">All the categories</h4>
        <button
          class="z-10 bg-black-trs p-1 h-8 w-8-full no-outlines outline-none"
        >
          <svg
            class="w-6 h-6 color-363636f"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <Categorielist :size="size" />
    </div>
    <div>
      <div class="bg-white px-4 pt-3 flex align-center justify-between">
        <h4 class="font-semibold size-16 logo-color">New selected products</h4>
        <button
          class="z-10 bg-black-trs p-1 h-8 w-8-full no-outlines outline-none"
        >
          <svg
            class="w-6 h-6 color-363636f"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <Adspetit />
    </div>
    <div>
      <div class="bg-white px-4 pt-3 flex align-center justify-between">
        <h4 class="font-semibold size-16 logo-color">Waloo Marketplace</h4>
      </div>
      <Brandlogo />
    </div>
    <div class="z-10">
      <div class="bg-white px-4 pt-3 flex align-center justify-between">
        <h4 class="font-semibold size-16 logo-color">Recently viewed</h4>
        <button
          class="z-10 bg-black-trs p-1 h-8 w-8-full no-outlines outline-none"
        >
          <svg
            class="w-6 h-6 color-363636f"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <Adspetit />
    </div>
    <div>
      <Walootour />
    </div>
    <div>
      <Waloofo />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    computer() {
      return this.$store.state.computer
    },
    listing() {
      return this.$store.state.listing === true
    },
    size() {
      return this.$store.state.size
    },
  },
}
</script>

<style scoped></style>
