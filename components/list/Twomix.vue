<template>
  <div class="h-fit">
    <div class="flex align-center h-fit space-x-3">
      <div class="bg-white w-full h-full">
        <div class="w-full h-full">
          <a class="clickable"
            ><img
              class="w-full h-full"
              src="/cover/sale.jpg"
              alt="Placeholder image"
          /></a>
        </div>
      </div>
      <div class="w-full flex flex-col space-y-4">
        <div class="w-full clickable bg-white">
          <img
            class="w-full h447"
            src="/ads/gaming.jpg"
            alt="Placeholder image"
          />
        </div>
        <div class="w-full clickable bg-white">
          <img
            class="w-full h447"
            src="/ads/gaming.jpg"
            alt="Placeholder image"
          />
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
