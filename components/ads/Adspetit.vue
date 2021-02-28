<template>
  <div v-if="id === null" class="adlines bg-white size-14 font-medium"></div>
  <div v-else class="adlines relative flex align-center justify-between">
    <div class="h-fit bg-transparent w-16 leftag z-10 px-2">
      <button
        class="button bg-transparent shadow-sm h-11 w-11 rounded-full no-outlines outline-none vertical-centers z-10 gotop btn-004e66 appearxh border-2 border-transparent"
        :class="{ hidden: !scrollxl }"
        @click="scrollLeft"
      >
        <svg
          class="w-6 h-6 transform rotate-90 color-white me-white"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
    <div
      :id="'adscroll' + id"
      class="bg-white h-full w-full flex align-center space-x-2 absolute xxx scrollnone"
      :class="{
        'overflow-x-hidden': size > 768,
        'overflow-x-auto': size <= 768,
      }"
    >
      <Articlepetit v-for="i in 20" :key="i" />
    </div>
    <div class="h-fit bg-transparent w-16 rightag z-10 relative">
      <button
        class="button bg-transparent shadow-sm h-11 w-11 rounded-full no-outlines outline-none vertical-centers ml-2 z-10 gotop btn-004e66 appearxhz border-2 border-transparent"
        :class="{ hidden: scrollxr }"
        @click="scrollRight"
      >
        <svg
          class="w-6 h-6 transform -rotate-90 color-white relative me-white"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scroll: 0,
      tagscrol: false,
      reachtotal: false,
      totalscroll: 0,
      nbscroll: 0,
      clw: 0,
      scrw: 0,
      id: null,
    }
  },
  computed: {
    size() {
      return this.$store.state.size
    },
    scrolling() {
      return this.scroll
    },
    scrollxl() {
      return this.tagscrol === true
    },
    scrollxr() {
      return this.reachtotal === true
    },
  },
  beforeMount() {
    window.addEventListener('wheel', this.handleScroll)
    window.addEventListener('resize', this.large)
  },
  beforeDestroy() {
    window.removeEventListener('wheel', this.handleScroll)
    window.addEventListener('resize', this.large)
  },
  mounted() {
    this.id = this._uid
  },
  methods: {
    scrollLeft() {
      const scroll = document.getElementById('adscroll' + this.id).scrollLeft
      const scr = document.getElementById('adscroll' + this.id).scrollWidth
      const cl = document.getElementById('adscroll' + this.id).clientWidth
      if (scroll - 1024 > 5) this.tagscrol = true
      else this.tagscrol = false
      document.getElementById('adscroll' + this.id).scroll({
        top: scroll - 1024,
        left: scroll - 1024,
        behavior: 'smooth',
      })
      if (Math.abs(scr - scroll + 1024) <= cl) {
        this.reachtotal = true
      } else {
        this.reachtotal = false
      }
      // this.sleep(1024)
    },
    scrollRight() {
      const scroll = document.getElementById('adscroll' + this.id).scrollLeft
      const scr = document.getElementById('adscroll' + this.id).scrollWidth
      const cl = document.getElementById('adscroll' + this.id).clientWidth
      if (scroll + 1024 > 5) this.tagscrol = true
      else this.tagscrol = false
      document.getElementById('adscroll' + this.id).scroll({
        top: scroll + 1024,
        left: scroll + 1024,
        behavior: 'smooth',
      })
      if (Math.abs(scr - scroll - 1024) <= cl) {
        this.reachtotal = true
      } else {
        this.reachtotal = false
      }
    },
    handleScroll() {
      const cl = document.getElementById('adscroll' + this.id).clientWidth
      const scroll = document.getElementById('adscroll' + this.id).scrollLeft
      const scr = document.getElementById('adscroll' + this.id).scrollWidth
      if (scr - cl <= scroll) this.reachtotal = true
      else this.reachtotal = false
      if (scroll <= 0) this.tagscrol = false
      else this.tagscrol = true
    },
    large() {
      const scr = document.getElementById('adscroll' + this.id).scrollWidth
      const cl = document.getElementById('adscroll' + this.id).clientWidth
      if (cl >= scr) {
        this.tagscrol = 0
        this.reachtotal = true
      }
      this.clw = cl
      this.scrw = scr
      this.totalscroll = Math.floor((scr - cl) / 1024) + 1
      if (this.nbscroll - Math.floor(this.clw / 1024) + 1) this.nbscroll = 0
      else this.nbscroll = this.nbscroll - Math.floor(this.clw / 1024) + 1
    },
  },
}
</script>

<style scoped>
/* .hvme {
  background-color: #004e66;
  animation: 0.2s appearZ;
} */

.adlines {
  height: 330px;
}
::-webkit-scrollbar {
  width: 0;
  background: transparent; /* make scrollbar transparent */
}
.leftag,
.rightag {
  visibility: hidden;
  /* border-color: white; */
}
.adlines:hover .leftag {
  visibility: visible !important;
  animation: 0.2s appearxh !important;
}
.adlines:hover .rightag {
  visibility: visible !important;
  animation: 0.2s appearxhz !important;
}
</style>
