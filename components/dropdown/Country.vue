<template>
  <div class="w-fit">
    <div
      v-click-outside="hide"
      class="dropdown"
      :class="{ 'is-active': focused }"
    >
      <div class="rounded border px-2 h31px">
        <client-only>
          <div
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            class="flex align-center h-fulls clickable bg-transparent border-none w-fit select-none space-x-0"
            @click="
              {
                focused = !focused
              }
            "
          >
            <div>
              <span class="size-13 logo-color block w-fit">{{ ctry }}</span>
            </div>
            <svg
              class="w-4 h-4 logo-color relative top-01x"
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
          </div>
        </client-only>
      </div>
      <div
        v-show="focused"
        id="dropdown-menu"
        class="dropdown-menu walele"
        :class="{ left: left, right: !left }"
        role="menu"
      >
        <div class="dropdown-content bg-white border">
          <div>
            <div class="mb-2 px-1">
              <label class="relative flex align-center">
                <input
                  v-model="searching"
                  type="search"
                  :placeholder="'Search a ' + title"
                  class="border border-gray-400 w-full no-outlines pl-2 pr-6 py-1 rounded size-145"
                />
                <svg
                  class="w-4 h-4 absolute right-0 mr-1 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </label>
            </div>
          </div>
          <div class="h-40max overflow-y-auto aside">
            <a
              v-for="(element, i) in contents"
              :key="i"
              class="dropdown-item clickable flex align-center space-x-1"
              @click="setLang(element)"
            >
              <span
                class="size-125"
                :class="{ 'font-semibold': ctry === element }"
                >{{ element }}</span
              >
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    left: {
      type: Boolean,
      default: false,
    },
    content: {
      type: Array,
      default: () => ['Abidjan', 'Bouake', 'Korhogo', 'Yamoussoukro', 'Daloa'],
    },
  },
  data() {
    return {
      focused: false,
      currentcolor: '',
      searching: '',
      ctry: this.content[0],
      lan: [
        'Nigeria',
        'Ivory coast',
        'Tunisia',
        'Cameroon',
        'Kenya',
        'Uganda',
        'South Africa',
        'Ghana',
        'Morocco',
        'Rwanda',
      ],
    }
  },
  computed: {
    language() {
      return this.lan
    },
    loading() {
      return this.$store.state.pageload === true
    },
    contents() {
      return this.content.filter((x) =>
        x.toLowerCase().includes(this.searching.toLowerCase())
      )
    },
  },
  methods: {
    setcolor(element) {
      const myel = document.getElementById('colorit')
      myel.style.backgroundColor = '#' + element
      this.focused = false
    },
    curcolor() {
      const myel = document.getElementById('colorit')
      myel.style.backgroundColor = '#' + this.content[0]
    },
    hidecontent() {
      const el = document.querySelectorAll('[id ^= "colorsample"]')
      Array.prototype.forEach.call(el, callback)

      function callback(element, iterator) {
        const myel = document.getElementById(element.id)
        const color = element.id.replace('colorsample', '')
        myel.style.backgroundColor = '#' + color
      }
    },
    hide() {
      this.focused = false
    },
    setLang(value) {
      this.ctry = value
      this.focused = false
    },
  },
}
</script>
<style scoped>
.walele {
  animation: appear 0.2s;
  top: 2.05rem !important;
  right: 0 !important;
}
.right {
  right: 0 !important;
}
.left {
  left: 0 !important;
}
.dodo {
  right: 0.2rem !important;
}
@keyframes appear {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
}
</style>
