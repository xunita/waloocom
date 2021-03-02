<template>
  <div class="w-full absolute adlines flex align-center px-6">
    <div class="h-fit absolute bg-transparent w-16 leftag z-10 px-2">
      <button
        class="button bg-transparent shadow-sm h-8 w-8 -ml-5 -mt-1 rounded-full no-outlines outline-none z-10 gotop btn-004e66 appearxh border-2 border-transparent"
        :class="{ hidden: !scrollxl }"
        @click="scrollLeft"
      >
        <svg
          class="w-3 h-3 transform rotate-90 color-white me-white"
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
      :id="'categsugscroll' + id"
      class="overflow-x-auto w-fit m-0-auto px-3 flex align-center space-x-5 pb-1 xxx scrollnone"
      :class="{
        'overflow-x-hiddens': size > 768,
        'overflow-x-autos': size <= 768,
      }"
    >
      <p
        v-for="i in 18"
        :key="i"
        class="flex align-center space-x-1 rounded bg-white px-3 py-1 shadow-sm w-fit"
      >
        <span class="size-125 font-semibold whitespace-no-wrap"
          >Bags, Cases, Cover & Sleeves1</span
        >
      </p>
    </div>
    <div class="h-fit absolute bg-transparent w-16 right-0 rightag z-10">
      <button
        class="button bg-transparent shadow-sm h-8 w-8 -mt-1 rounded-full no-outlines outline-none ml-5 z-10 gotop btn-004e66 appearxhz border-2 border-transparent"
        :class="{ hidden: scrollxr }"
        @click="scrollRight"
      >
        <svg
          class="w-3 h-3 transform -rotate-90 color-white relative me-white"
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
      reachtotal: true,
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
    document.addEventListener('DOMContentLoaded', this.fn, false)
    // document.attachEvent('onreadystatechange', this.fn)
  },
  beforeDestroy() {
    window.removeEventListener('wheel', this.handleScroll)
    window.removeEventListener('resize', this.large)
    // document.adetachEvent('onreadystatechange', this.fn)
    document.removeEventListener('DOMContentLoaded', this.fn, false)
  },
  mounted() {
    this.getId()
  },
  methods: {
    async getId() {
      this.ids = await this._uid
    },
    fn() {
      this.handleScroll()
      this.large()
    },
    scrollLeft() {
      const scroll = document.getElementById('categsugscroll' + this.id)
        .scrollLeft
      const scr = document.getElementById('categsugscroll' + this.id)
        .scrollWidth
      const cl = document.getElementById('categsugscroll' + this.id).clientWidth
      if (scroll - 1024 > 5) this.tagscrol = true
      else this.tagscrol = false
      document.getElementById('categsugscroll' + this.id).scroll({
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
      const scroll = document.getElementById('categsugscroll' + this.id)
        .scrollLeft
      const scr = document.getElementById('categsugscroll' + this.id)
        .scrollWidth
      const cl = document.getElementById('categsugscroll' + this.id).clientWidth
      if (scroll + 1024 > 5) this.tagscrol = true
      else this.tagscrol = false
      document.getElementById('categsugscroll' + this.id).scroll({
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
      // console.log(document.getElementById('categsugscroll' + this.id))
      const cl = document.querySelector('[id^="categsugscroll"]').clientWidth
      const scroll = document.querySelector('[id^="categsugscroll"]').scrollLeft
      const scr = document.querySelector('[id^="categsugscroll"]').scrollWidth
      if (scr - cl <= scroll) this.reachtotal = true
      else this.reachtotal = false
      if (scroll <= 0) this.tagscrol = false
      else this.tagscrol = true
    },
    large() {
      const scr = document.querySelector('[id^="categsugscroll"]').scrollWidth
      const cl = document.querySelector('[id^="categsugscroll"]').clientWidth
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
  animation: 0.2s appearZ !important;
}
.adlines:hover .rightag {
  visibility: visible !important;
  animation: 0.2s appearZ !important;
}
</style>
