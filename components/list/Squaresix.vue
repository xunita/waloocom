<template>
  <div class="flex space-x-3 h320">
    <div class="flex align-center space-x-3">
      <div
        v-for="(img, j) in nbrbig"
        :key="j"
        class="bg-white h320 w320 px-6 py-5"
      >
        <div class="flex flex-col space-y-2">
          <a class="clickable"
            ><span class="size-15 font-semibold">{{ img.name }}</span>
            <img
              class="w-full h-full pt-1"
              :src="img.img"
              alt="Placeholder image"
          /></a>
        </div>
      </div>
    </div>
    <div class="flex self-start w-full flex-wrap">
      <div
        v-for="(img, i) in nbr"
        :key="i"
        class="h160 bg-white column is-one-third relative border-4 px-6"
      >
        <div class="flex flex-col space-y-2 vertical-center">
          <a class="clickable"
            ><img class="w-full" :src="img.img" alt="Placeholder image" />
            <span class="block size-14 h-fit font-semibold text-center">{{
              img.name
            }}</span></a
          >
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
    size() {
      return this.$store.state.size
    },
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
        five: {
          link: '',
          name: 'Home',
          img: '/cover/home.jpg',
        },
        six: {
          link: '',
          name: 'Tv',
          img: '/cover/camera.jpg',
        },
      }
    },
    nbrbig() {
      if (this.size <= 1310)
        return {
          one: {
            name: 'Phones & Accessories',
            img: '/cover/phone.jpg',
          },
        }
      else
        return {
          one: {
            name: 'Phones & Accessories',
            img: '/cover/phone.jpg',
          },
          two: {
            name: 'Fashion styles',
            img: '/cover/fashion.jpg',
          },
        }
    },
  },
}
</script>

<style scoped></style>
