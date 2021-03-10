<template>
  <div class="flex space-x-2">
    <div class="flex flex-col space-y-2">
      <a
        v-for="(i, j) in images"
        :key="j"
        class="clickable w-fit h-fit hover:shadow"
        :class="{ 'focus:shadow': now === j }"
        @click="
          {
            active = j
          }
        "
      >
        <figure
          class="image is-40x40 border rounded minimage"
          :class="{ 'border-bluee': now === j }"
        >
          <img
            class="rounded w-full"
            :src="images[j]"
            alt="Placeholder image"
          />
        </figure>
      </a>
    </div>
    <div>
      <div class="clickable relative image is-image">
        <figure
          v-for="(img, ij) in images"
          id="currentimage"
          :key="ij"
          class="w-fit h-fit h-centers hiddenmox"
          :class="{
            slide: active === ij,
          }"
        >
          <img
            class="imagemax vertical-centere"
            :src="currentsrc"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div
        class="w-fit h-fit flex align-center space-x-4 m-0-auto relative pt-4"
      >
        <span class="size-14 font-semibold">Share</span>
        <div class="flex align-center space-x-2">
          <p class="flex align-center space-x-3">
            <i class="fab fa-twitter twi size-20 clickable"></i>
            <i class="fab fa-facebook fbcolor size-20 clickable"></i>
            <i class="fab fa-pinterest pinter size-20 clickable"></i>
            <i class="fas fa-at size-20 mail clickable"></i>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      images: ['/ads/gaming.jpg', '/a.jpg', '/b.jpg', '/t.jpg', '/4.jpg'],
    }
  },
  computed: {
    now() {
      return this.active
    },
    loading() {
      return this.$store.state.pageload === true
    },
    currentsrc() {
      return this.images[this.active]
    },
  },
  watch: {
    loading(newval, oldval) {
      if (newval === false) {
        this.hidecontent()
      }
    },
  },
  methods: {
    hidecontent() {
      const el = document.querySelectorAll('[id ^= "pag"]')
      Array.prototype.forEach.call(el, callback)

      function callback(element, iterator) {
        const myel = document.getElementById(element.id)
        myel.style.display = 'block'
        if (myel.clientWidth === 0) myel.style.display = 'none'
      }
    },
  },
}
</script>

<style scoped>
.slide {
  display: block !important;
  animation: 0.3s appearZ;
}
.minimage:hover {
  border-color: #006280;
}
.border-bluee {
  border-color: #006280;
  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.minimageborder:hover {
  border-color: #006280;
}
</style>
