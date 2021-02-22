<template>
  <div class="h-fit">
    <div class="flex align-center h-fit space-x-3">
      <div class="h-full">
        <div class="h-full">
          <div class="bg-white px-4 pt-3 flex align-center justify-between">
            <h4 class="font-semibold size-16 logo-color">Top categories</h4>
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
          <div class="bg-white px-2 w-full flex flex-wrap">
            <div v-for="(item, i) in nbr" :key="i" class="column is-half">
              <a class="clickable"
                ><img class="w-full" :src="item.img" alt="Placeholder image" />
                <h4 class="size-13 font-semibold block text-center py-15">
                  {{ item.name }}
                </h4></a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white h160max w-full">
        <div class="w-full">
          <a class="clickable"
            ><img
              class="h160max w-full"
              src="/cover/sale.jpg"
              alt="Placeholder image"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Marketplace',
    },
  },
  computed: {
    nbr() {
      return {
        one: {
          link: '',
          name: 'Computers',
          img: '/cover/computer.jpg',
        },
        two: {
          link: '',
          name: 'Toys',
          img: '/cover/toys.jpg',
        },
        three: {
          link: '',
          name: 'Consoles gaming',
          img: '/cover/gaming.jpg',
        },
        four: {
          link: '',
          name: 'Training',
          img: '/cover/training.jpg',
        },
      }
    },
    other() {
      return {
        one: {
          link: '',
          name: 'Computers',
          img: '/cover/computer.jpg',
        },
        two: {
          link: '',
          name: 'Toys',
          img: '/cover/toys.jpg',
        },
        three: {
          link: '',
          name: 'Consoles gaming',
          img: '/cover/gaming.jpg',
        },
        four: {
          link: '',
          name: 'Training',
          img: '/cover/training.jpg',
        },
      }
    },
  },
}
</script>

<style scoped></style>
