<template>
  <div class="h320">
    <div
      class="flex align-center space-x-3 m-0-auto"
      :class="{ 'w-fit': size > 1310 }"
    >
      <div
        v-for="(item, i) in nbr"
        :key="i"
        class="bg-white h320 px-6"
        :class="{ w320: size > 1310, 'w-full': size <= 1310 }"
      >
        <div class="flex flex-col space-y-2 vertical-center">
          <a class="clickable"
            ><span class="size-15 font-semibold">{{ item.name }}</span>
            <img
              class="w-full h-full pt-1"
              :src="item.img"
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
    size() {
      return this.$store.state.size
    },
    nbr() {
      return {
        one: {
          link: '',
          name: 'Phones & Accessories',
          img: '/cover/phone.jpg',
        },
        two: {
          link: '',
          name: 'Fashion styles',
          img: '/cover/fashion.jpg',
        },
        three: {
          link: '',
          name: 'Gaming',
          img: '/cover/gamings.jpg',
        },
        four: {
          link: '',
          name: 'Offices & Books',
          img: '/cover/office.jpg',
        },
      }
    },
  },
}
</script>

<style scoped></style>
