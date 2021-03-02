<template>
  <div class="w-full absolute adlines flex align-center pl-1">
    <div class="h-fit absolute bg-transparent w-16 leftag z-10 px-2">
      <button
        class="button bg-transparent shadow-sm h-8 w-8 -ml-2 -mt-1 rounded-full no-outlines outline-none z-10 gotop btn-004e66 appearxh border-2 border-transparent"
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
      :id="'categscroll' + id"
      class="overflow-x-auto w-full px-3 flex align-center space-x-5 pb-1 xxx scrollnone"
      :class="{
        'overflow-x-hiddens': size > 768,
        'overflow-x-autos': size <= 768,
      }"
    >
      <span
        v-for="(categ, i) in current"
        :key="i"
        class="flex align-center relative space-x-1 rounded-full bg-white px-3 shadow-sm py-08 block"
      >
        <span class="size-12 font-semibold whitespace-no-wrap">{{
          categ
        }}</span>
        <a class="delete is-small" @click="remove(categ)"></a>
      </span>
      <a
        v-if="current.length !== 0"
        class="clickable color-004e66 w-fit whitespace-no-wrap underline-hover size-13 font-semibold"
        @click="removeall"
      >
        <span>Remove all</span>
      </a>
    </div>
    <div class="h-fit absolute bg-transparent w-16 right-0 rightag z-10">
      <button
        class="button bg-transparent shadow-sm h-8 w-8 -mt-1 rounded-full no-outlines outline-none ml-8 z-10 gotop btn-004e66 appearxhz border-2 border-transparent"
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
  props: {
    current: {
      type: Array,
      default: () => [],
    },
  },
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
  watch: {
    // whenever current changes, this function will run
    current() {
      this.handleScroll()
      // this.large()
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
    removeall() {
      this.$emit('removeall')
    },
    remove(value) {
      this.$emit('remove', value)
    },
    scrollLeft() {
      const scroll = document.getElementById('categscroll' + this.id).scrollLeft
      const scr = document.getElementById('categscroll' + this.id).scrollWidth
      const cl = document.getElementById('categscroll' + this.id).clientWidth
      if (scroll - 512 > 5) this.tagscrol = true
      else this.tagscrol = false
      document.getElementById('categscroll' + this.id).scroll({
        top: scroll - 512,
        left: scroll - 512,
        behavior: 'smooth',
      })
      if (Math.abs(scr - scroll + 512) <= cl) {
        this.reachtotal = true
      } else {
        this.reachtotal = false
      }
      // this.sleep(512)
    },
    scrollRight() {
      const scroll = document.getElementById('categscroll' + this.id).scrollLeft
      const scr = document.getElementById('categscroll' + this.id).scrollWidth
      const cl = document.getElementById('categscroll' + this.id).clientWidth
      if (scroll + 512 > 5) this.tagscrol = true
      else this.tagscrol = false
      document.getElementById('categscroll' + this.id).scroll({
        top: scroll + 512,
        left: scroll + 512,
        behavior: 'smooth',
      })
      if (Math.abs(scr - scroll - 512) <= cl) {
        this.reachtotal = true
      } else {
        this.reachtotal = false
      }
    },
    handleScroll() {
      // console.log(document.getElementById('categscroll' + this.id))
      const cl = document.querySelector('[id^="categscroll"]').clientWidth
      const scroll = document.querySelector('[id^="categscroll"]').scrollLeft
      const scr = document.querySelector('[id^="categscroll"]').scrollWidth
      if (scr - cl <= scroll) this.reachtotal = true
      else this.reachtotal = false
      if (scroll <= 0) this.tagscrol = false
      else this.tagscrol = true
    },
    large() {
      const scr = document.querySelector('[id^="categscroll"]').scrollWidth
      const cl = document.querySelector('[id^="categscroll"]').clientWidth
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
