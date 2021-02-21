<template>
  <div class="flex space-x-3 h320">
    <div class="flex align-center space-x-3">
      <div
        v-for="(img, j) in nbrbig"
        :key="j"
        class="bg-white h320 w320 px-6 pt-5"
      >
        <div class="flex flex-col space-y-2">
          <span class="size-15 font-semibold">{{ img.name }}</span>
          <img class="w-full h-full" :src="img.img" alt="Placeholder image" />
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
          <img class="w-full" :src="img.img" alt="Placeholder image" />
          <span class="block size-14 h-fit font-semibold text-center">{{
            img.name
          }}</span>
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
          name: 'Phones & Accessories',
          img: '/cover/toys.jpg',
        },
        two: {
          name: 'Fashion styles',
          img: '/cover/toys.jpg',
        },
        three: {
          name: 'Phones & Accessories',
          img: '/cover/toys.jpg',
        },
        four: {
          name: 'Fashion styles',
          img: '/cover/toys.jpg',
        },
        five: {
          name: 'Phones & Accessories',
          img: '/cover/toys.jpg',
        },
        six: {
          name: 'Fashion styles',
          img: '/cover/toys.jpg',
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
