<template>
  <div class="header pb-5 bglogo-color">
    <nav class="flex w-full justify-between border-b pb-5 px-8">
      <div class="w-fit flex space-x-12">
        <div class="flex flex-col">
          <Logofoot />
          <div class="flex flex-col space-y-1 mt-2">
            <p class="text-white used-on size-14 mb-1">Connect with us</p>
            <p class="flex align-center space-x-3 color-363636">
              <i class="fab fa-twitter size-20 clickable"></i>
              <i class="fab fa-facebook size-20 clickable"></i>
              <i class="fab fa-instagram size-20 clickable"></i>
              <i class="fab fa-tiktok size-20 clickable"></i>
              <i class="fab fa-youtube size-20 clickable"></i>
              <i class="fab fa-snapchat-ghost size-20 clickable"></i>
              <i class="fab fa-linkedin-in size-20 clickable"></i>
            </p>
          </div>
        </div>
        <div>
          <div class="flex align-center space-x-1">
            <i class="far fa-question-circle text-white size-20"></i>
            <span class="size-17 pl-1 text-white font-semibold block w-fit"
              >Need Help ?</span
            >
          </div>
          <div class="flex flex-col">
            <a class="clickable underline-hover w-fit size-14 text-white"
              >Need assistance ?</a
            >
            <a class="clickable underline-hover w-fit size-14 text-white"
              >FAQs ?</a
            >
            <a class="clickable underline-hover w-fit size-14 text-white"
              >Returns and refunds</a
            >
            <a class="clickable underline-hover w-fit size-14 text-white"
              >Order's cancellation & payment</a
            >
          </div>
        </div>
      </div>
      <div class="w-fits self-end">
        <span class="text-white block w-fit font-semibold size-15"
          >Subscribe to our Newsletter</span
        >
        <span class="text-white block w-fit size-125 mt-1"
          >Keep me updated on new products and the best offers from Waloo.</span
        >
        <div class="mt-2 h-10 w-fit flex align-center space-x-2">
          <input
            class="w512 rounded h-10 size-16 outline-none px-2 bg-white font-normal"
            type="text"
            placeholder="Email adress"
          />
          <span class="h-full"
            ><button
              class="btn-004e66 rounded h-full no-outlines px-12 text-white"
            >
              <span class="size-12 block font-medium text-white"
                >Subscribe</span
              >
            </button></span
          >
        </div>
      </div>
    </nav>
    <nav class="flex align-center mt-3 justify-around px-5">
      <div v-for="i in 6" :key="i">
        <span class="block size-17 text-white font-semibold py-2"
          >About Waloo</span
        >
        <div class="flex flex-col">
          <a
            v-for="j in 5"
            :key="j"
            class="clickable underline-hover w-fit size-14 text-white"
            >Contact us</a
          >
        </div>
      </div>
    </nav>
    <div class="flex align-center mt-5 justify-between">
      <div class="w-full h-1 border-b"></div>
      <div class="w-fit mx-2 flex align-center space-x-1 size-14 text-white">
        <span class="text-white">{{ toyear }}</span>
        <span class="text-white">•</span>
        <span class="text-white">Waloo.com</span>
      </div>
      <div class="w-full h-1 border-b"></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    toyear() {
      return new Date().getFullYear().toString()
    },
  },
}
</script>
<style scoped></style>
