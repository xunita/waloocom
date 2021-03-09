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
            class="flex align-center space-x-1 button bg-transparent border rounded-full clickable select-none"
            @click="
              {
                focused = !focused
              }
            "
          >
            <span class="size-13 logo-color">Sort by:</span>
            <p class="flex align-center space-x-0">
              <span class="size-13 font-semibold logo-color block w-fit">{{
                spoken
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
            </p>
          </div>
        </client-only>
      </div>
      <div id="dropdown-menu" class="dropdown-menu walele" role="menu">
        <div class="dropdown-content bg-white border">
          <a
            v-for="(element, i) in language"
            :key="i"
            class="dropdown-item clickable flex align-center space-x-1"
            @click="setLang(element)"
          >
            <span
              class="size-13"
              :class="{ 'font-semibold': spoken === element }"
              >{{ element }}</span
            >
          </a>
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
      spoken: 'Most recent',
      lan: [
        'Most recent',
        'Top',
        'Top Review',
        'Top Question',
        'Recent Review',
        'Recent Question',
      ],
    }
  },
  computed: {
    language() {
      return this.lan
    },
  },
  methods: {
    money(value) {
      this.currency = value
    },
    delctry(value) {
      this.ctry = value
    },
    hide() {
      this.focused = false
    },
    setLang(value) {
      this.spoken = value
      this.focused = false
    },
  },
}
</script>
<style scoped>
.walele {
  animation: appear 0.2s;
  top: 2rem !important;
  right: -0.7rem;
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
