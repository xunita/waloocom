<template>
  <div>
    <h4 class="font-semibold size-18 logo-color mt-4">
      Customer Reviews & Questions
    </h4>
    <!-- <div class="w-full h-48 border rounded mt-5">
      <div class="w-fit h-fit both-centers text-center -mt-16">
        <h4 class="font-semibold size-16 logo-color">
          Any Questions or Thoughts to Share ?
        </h4>
        <span class="size-15 block mt-4"
          >Do you have a question or have a thought to share about this product
          ? Let's other customers know about it.</span
        >
        <span class="w-full block mt-2"
          ><button
            class="btn-004e66 m-0-auto no-outlines w-full rounded flex align-center space-x-2 py-2 text-white"
          >
            <span class="m-0-auto">
              <i class="fas fa-feather-alt text-white mr-1"></i>
              <span class="size-14 font-medium text-white"
                >Write a review or Ask a question</span
              ></span
            >
          </button></span
        >
      </div>
    </div> -->
    <div class="mt-5 w-full flex">
      <div class="w2x320s h-full pr-6">
        <Review />
        <div class="pt-3 pb-5 border-b">
          <h4 class="font-semibold size-16 logo-color">Rate this product</h4>
          <span class="w-full block mt-2"
            ><button
              class="btn-004e66 m-0-auto no-outlines w-full rounded flex align-center space-x-2 py-1 text-white"
              @click="
                {
                  review = !review
                }
              "
            >
              <span class="m-0-auto">
                <i class="fas fa-feather-alt text-white mr-1"></i>
                <span class="size-13 font-medium text-white"
                  >Write a review or Ask a question</span
                ></span
              >
            </button></span
          >
        </div>
      </div>
      <div class="w-full px-6 pb-6">
        <div class="flex align-center justify-between">
          <h4 class="font-semibold size-16 logo-color">
            Comments(145) & Questions(45)
          </h4>
          <Sortreview />
        </div>
        <div class="mt-2 mb-4">
          <div v-if="!review" class="pt-2 border-b pb-5">
            <span class="w360 block"
              ><button
                class="btn-004e66 m-0-auto no-outlines w-full rounded flex align-center space-x-2 py-1 text-white"
                @click="
                  {
                    review = !review
                  }
                "
              >
                <span class="m-0-auto">
                  <i class="fas fa-feather-alt text-white mr-1"></i>
                  <span class="size-13 font-medium text-white"
                    >Write a review or Ask a question</span
                  ></span
                >
              </button></span
            >
          </div>
          <div v-else class="appearZ">
            <Revquestfill />
          </div>
        </div>
        <div class="w512max wordbreaking flex flex-col space-y-5 clear-both">
          <Onereview v-for="i in 4" :key="i" />
          <Onequest />
        </div>
        <a
          class="clickable block relative top-08x w-fit underline-hover color-004e66 font-semibold"
          >See all comments and questions</a
        >
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
