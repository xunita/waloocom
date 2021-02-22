<template>
  <div class="bg-white w-full h-20">
    <div class="flex align-center h-full">
      <div
        v-for="(br, i) in brand"
        :key="i"
        class="column is-one-fifth h-full relative hover:shadow-md px-5"
      >
        <a class="clickable"
          ><img
            class="vertical-center m-0-auto"
            :class="{
              'h-8':
                br.img !== '/logo/kili.png' &&
                br.img !== '/logo/konga.svg' &&
                br.img !== '/logo/bidor.png',
              'h-10': br.img === '/logo/bidor.png',
              'h-12': br.img === '/logo/konga.svg',
              'h-12': br.img === '/logo/kili.png',
            }"
            :src="br.img"
            alt="Placeholder image"
        /></a>
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
    brand() {
      return {
        one: {
          link: '',
          name: 'Computers',
          img: '/logo/takealot.png',
        },
        two: {
          link: '',
          name: 'Toys',
          img: '/logo/jumia.png',
        },
        three: {
          link: '',
          name: 'Consoles gaming',
          img: '/logo/konga.svg',
        },
        four: {
          link: '',
          name: 'Training',
          img: '/logo/kili.png',
        },
        five: {
          link: '',
          name: 'Bidorbuy',
          img: '/logo/bidor.png',
        },
      }
    },
  },
}
</script>

<style scoped></style>
