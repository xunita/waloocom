<template>
  <div>
    <div
      v-click-outside="hide"
      class="dropdown"
      :class="{ 'is-active': focused }"
    >
      <div class="dropdown-trigger">
        <client-only>
          <div
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            class="flex align-center clickable button is-lights w-fit select-none space-x-0"
            @click="
              {
                focused = !focused
              }
            "
          >
            <svg
              class="w-6 h-6 logo-color"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>

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
        role="menu"
      >
        <div class="dropdown-content bg-white border h292">
          <a class="dropdown-items select-none">
            <span class="size-12 pb-1 block logo-color"
              >Country of delivery</span
            >
            <span class="size-125 block font-semibold">{{ ctry }}</span>
          </a>
          <hr class="dropdown-divider" />
          <a class="dropdown-items select-none">
            <span class="size-12 pb-1 block logo-color"
              >Choose another country</span
            ></a
          >
          <div class="overflow-y-auto aside h200">
            <div class="mb-2 mt-1 px-1">
              <label class="relative flex align-center">
                <input
                  v-model="searching"
                  type="search"
                  placeholder="Search a country"
                  class="border border-gray-400 w-full no-outlines pl-2 pr-6 py-08 rounded size-145"
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
            <a
              v-for="(element, i) in language"
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
  data() {
    return {
      focused: false,
      searching: '',
      ctry: 'Ivory coast',
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
      return this.lan.filter((x) =>
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
  /*right: -12.1rem !important; */
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
