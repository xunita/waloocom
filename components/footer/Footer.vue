<template>
  <div class="pb-5 bg-foot">
    <nav class="flex w-full justify-between -mtdsd border-b pb-5 px-8">
      <div class="w-fit flex space-x-12">
        <div>
          <div class="flex align-center space-x-1">
            <i class="far fa-question-circle text-white size-20"></i>
            <span class="size-17 pl-1 text-white font-semibold block w-fit"
              >Need Help ?</span
            >
          </div>
          <div class="flex flex-col pt-1">
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
              >Order's cancellation</a
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
            class="w512 rounded h-8 size-16 outline-none px-2 bg-white font-normal"
            type="text"
            placeholder="Email adress"
          />
          <span class="h-8"
            ><button class="btn-004e66 rounded h-8 no-outlines px-8 text-white">
              <span class="size-12 block font-medium text-white"
                >Subscribe</span
              >
            </button></span
          >
        </div>
      </div>
    </nav>
    <nav class="flex px-5">
      <div class="column is-one-fifth">
        <div class="flex flex-col">
          <Logofoot />
          <div class="flex flex-col space-y-1 mt-1">
            <p class="text-white used-on size-14 mb-1">Connect with us</p>
            <p class="flex align-center space-x-3 color-363636">
              <a href="https://fb.com/saliistore" target="_blank"
                ><i class="fab fa-twitter size-20 clickable"></i
              ></a>
              <a href="https://fb.com/saliistore" target="_blank"
                ><i class="fab fa-facebook size-20 clickable"></i
              ></a>
              <a href="https://fb.com/saliistore" target="_blank"
                ><i class="fab fa-instagram size-20 clickable"></i
              ></a>
              <a href="https://fb.com/saliistore" target="_blank"
                ><i class="fab fa-tiktok size-20 clickable"></i
              ></a>
              <a href="https://fb.com/saliistore" target="_blank"
                ><i class="fab fa-youtube size-20 clickable"></i
              ></a>
              <a href="https://fb.com/saliistore" target="_blank"
                ><i class="fab fa-snapchat-ghost size-20 clickable"></i
              ></a>
              <a href="https://fb.com/saliistore" target="_blank"
                ><i class="fab fa-linkedin-in size-20 clickable"></i
              ></a>
            </p>
          </div>
        </div>
      </div>
      <div class="column is-one-fifth">
        <span class="block size-17 text-white font-semibold py-2">Account</span>
        <div class="flex flex-col">
          <a class="clickable underline-hover w-fit size-14 text-white"
            >My profile</a
          >
          <a class="clickable underline-hover w-fit size-14 text-white"
            >Orders</a
          >
          <a class="clickable underline-hover w-fit size-14 text-white"
            >Notifications</a
          >
          <a class="clickable underline-hover w-fit size-14 text-white"
            >Favorites List</a
          >
          <a class="clickable underline-hover w-fit size-14 text-white"
            >How to register</a
          >
          <a class="clickable underline-hover w-fit size-14 text-white"
            >Password Forgotten ?</a
          >
        </div>
      </div>
      <div class="column is-one-fifth">
        <span class="block size-17 text-white font-semibold py-2"
          >Shopping</span
        >
        <div class="flex flex-col">
          <a class="clickable underline-hover w-fit size-14 text-white"
            >Buy on Waloo</a
          >
          <a class="clickable underline-hover w-fit size-14 text-white"
            >Daily Deals</a
          >
          <a class="clickable underline-hover w-fit size-14 text-white"
            >Promotions Deals</a
          >
          <a class="clickable underline-hover w-fit size-14 text-white"
            >Top Categories</a
          >
          <a class="clickable underline-hover w-fit size-14 text-white"
            >Languages & Currencies</a
          >
          <a class="clickable underline-hover w-fit size-14 text-white"
            >Delivery's countries</a
          >
        </div>
      </div>
      <div class="column is-one-fifth">
        <span class="block size-17 text-white font-semibold py-2"
          >Payments</span
        >
        <div class="flex flex-col">
          <a class="clickable underline-hover w-fit size-14 text-white"
            >How to pay ?</a
          >
          <a class="clickable underline-hover w-fit size-14 text-white">Visa</a>
          <a class="clickable underline-hover w-fit size-14 text-white"
            >Mastercard</a
          >
          <a class="clickable underline-hover w-fit size-14 text-white"
            >Mobile Money</a
          >
          <a class="clickable underline-hover w-fit size-14 text-white"
            >Cryptocurrency</a
          >
          <a class="clickable underline-hover w-fit size-14 text-white"
            >Other payments methods</a
          >
        </div>
      </div>
      <div class="column is-one-fifth">
        <span class="block size-17 text-white font-semibold py-2"
          >About Waloo</span
        >
        <div class="flex flex-col">
          <a class="clickable underline-hover w-fit size-14 text-white"
            >About Us</a
          >
          <a class="clickable underline-hover w-fit size-14 text-white"
            >Our Partenairs</a
          >
          <a class="clickable underline-hover w-fit size-14 text-white"
            >Careers</a
          >
          <a class="clickable underline-hover w-fit size-14 text-white"
            >Sell on Waloo</a
          >
          <a class="clickable underline-hover w-fit size-14 text-white"
            >Conditions of Use</a
          >
          <a class="clickable underline-hover w-fit size-14 text-white"
            >Contact Us</a
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
        <span class="text-white inline-block whitespace-no-wrap"
          >- All rights reserved</span
        >
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
