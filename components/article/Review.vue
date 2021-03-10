<template>
  <div>
    <h4 class="font-semibold size-16 logo-color">Reviews</h4>
    <div class="w-full h-fit">
      <div
        class="text-center flex flex-col align-center border-b pb-4 text-center h-centers"
      >
        <span class="font-bold size-20">4.5</span>
        <span class="size-16 block -mt-1">Out of 5</span>
        <span class="size-18 block mt-1">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star color-6d6d6d"></span>
          <span class="fa fa-star color-6d6d6d"></span>
        </span>
        <span class="size-14 font-semibold block pt-2">2,457 Ratings</span>
      </div>
      <div class="mt-5 flex flex-col space-y-3 border-b pb-5">
        <div class="flex align-center space-x-1">
          <span class="block w-12"> 5 stars</span>
          <div class="h-5 w-40 bg-trt rounded">
            <span
              id="spanfive"
              class="block rounded-tl rounded-bl h-5 w-10 bg-checked"
              :class="{ 'rounded-tr rounded-br': fill5all }"
            ></span>
          </div>
          <span class="block pl-2">58</span>
        </div>
        <div class="flex align-center space-x-1">
          <span class="block w-12"> 4 stars</span>
          <div class="h-5 w-40 bg-trt rounded">
            <span
              id="spanfour"
              class="block rounded-tl rounded-bl h-5 w-10 bg-checked"
              :class="{ 'rounded-tr rounded-br': fill4all }"
            ></span>
          </div>
          <span class="block pl-2">17</span>
        </div>
        <div class="flex align-center space-x-1">
          <span class="block w-12"> 3 stars</span>
          <div class="h-5 w-40 bg-trt rounded">
            <span
              id="spanthree"
              class="block rounded-tl rounded-bl h-5 w-10 bg-checked"
              :class="{ 'rounded-tr rounded-br': fill3all }"
            ></span>
          </div>
          <span class="block pl-2">23</span>
        </div>
        <div class="flex align-center space-x-1">
          <span class="block w-12"> 2 stars</span>
          <div class="h-5 w-40 bg-trt rounded">
            <span
              id="spantwo"
              class="block rounded-tl rounded-bl h-5 w-10 bg-checked"
              :class="{ 'rounded-tr rounded-br': fill2all }"
            ></span>
          </div>
          <span class="block pl-2">14</span>
        </div>
        <div class="flex align-center space-x-1">
          <span class="block w-12"> 1 star</span>
          <div class="h-5 w-40 bg-trt rounded">
            <span
              id="spanone"
              class="block rounded-tl rounded-bl h-5 w-10 bg-checked"
              :class="{ 'rounded-tr rounded-br': fill1all }"
            ></span>
          </div>
          <span class="block pl-2">2</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fill5all: false,
      fill4all: false,
      fill3all: false,
      fill2all: false,
      fill1all: false,
      rep: false,
      subcom: false,
      review: false,
    }
  },
  computed: {
    replying() {
      return this.rep === true
    },
    subcoming() {
      return this.subcom === true
    },
  },
  mounted() {
    this.setwidth()
  },
  methods: {
    focus() {},
    setwidth() {
      let el = document.getElementById('spanfive')
      el.style.width = '58%'
      el = document.getElementById('spanfour')
      el.style.width = '17%'
      el = document.getElementById('spanthree')
      el.style.width = '23%'
      el = document.getElementById('spantwo')
      el.style.width = '14%'
      el = document.getElementById('spanone')
      el.style.width = '2%'
    },
  },
}
</script>

<style scoped></style>
