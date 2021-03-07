<template>
  <div class="w-fit">
    <div
      v-click-outside="hide"
      class="dropdown"
      :class="{ 'is-active': focused }"
    >
      <div class="rounded-full border px-1">
        <client-only>
          <div
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            class="flex align-center clickable button bg-transparent border-none w-fit select-none space-x-0"
            @click="
              {
                focused = !focused
              }
            "
          >
            <span class="size-13 pr-1">{{ title }}: </span>
            <span class="size-125 logo-color font-semibold block w-fit">{{
              ctry
            }}</span>
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
          <div v-if="search">
            <div class="mb-2 px-1">
              <label class="relative flex align-center">
                <input
                  v-model="searching"
                  type="search"
                  placeholder="Search a location"
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
      default: 'Color',
    },
    left: {
      type: Boolean,
      default: false,
    },
    search: {
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
      searching: '',
      ctry: 'Abidjan',
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
    contents() {
      return this.content.filter((x) =>
        x.toLowerCase().includes(this.searching.toLowerCase())
      )
    },
  },
  mounted() {
    this.sendcur()
  },
  methods: {
    sendcur() {
      const cur =
        this.ctry === 'Rand ZAR'
          ? 'ZAR'
          : this.ctry === 'Naira NGN'
          ? 'NGN'
          : this.ctry === 'Franc CFA'
          ? 'FCFA'
          : this.ctry === 'Kwanza AOA'
          ? 'AOA'
          : this.ctry === 'Cedi GHS'
          ? 'GHS'
          : this.ctry === 'Shilling KES'
          ? 'KES'
          : this.ctry === 'Shilling UGX'
          ? 'UGX'
          : this.ctry === 'Rwanda franc RWF'
          ? 'RWF'
          : this.ctry === 'Pula BWP'
          ? 'BWP'
          : this.ctry === 'Euro'
          ? 'Euro'
          : 'USD'
      this.$emit('money', cur)
    },
    hide() {
      this.focused = false
    },
    setLang(value) {
      this.ctry = value
      this.focused = false
      this.sendcur()
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
